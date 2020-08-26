package repository

import (
	"fmt"
	"reflect"
	"testing"

	sqlmock "github.com/DATA-DOG/go-sqlmock"
	"github.com/Toringol/csgo-trainingCamp/backend/app/model"
)

func TestListServers(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("cant create mock: %s", err)
	}
	defer db.Close()

	var elemID int64 = 1

	rows := sqlmock.
		NewRows([]string{"server_id", "ip", "category", "map",
			"currentplayers", "maxplayers", "password"})

	expectResult := []*model.ServerCS{
		{
			ID:             elemID,
			IP:             "127.0.0.1:8080",
			Category:       "dm",
			Map:            "inferno",
			CurrentPlayers: 6,
			MaxPlayers:     10,
			Password:       "",
		},
		{
			ID:             elemID + 1,
			IP:             "127.0.0.1:8081",
			Category:       "1x1",
			Map:            "headshot",
			CurrentPlayers: 1,
			MaxPlayers:     2,
			Password:       "1234",
		},
	}

	for _, item := range expectResult {
		rows = rows.AddRow(item.ID, item.IP, item.Category, item.Map,
			item.CurrentPlayers, item.MaxPlayers, item.Password)
	}

	mock.
		ExpectQuery("SELECT server_id, ip, category, map, currentplayers, " +
			"maxplayers, password FROM servers").
		WillReturnRows(rows)

	repo := &Repository{
		DB: db,
	}

	items, err := repo.ListServers()

	if err != nil {
		t.Errorf("unexpected err: %s", err)
		return
	}
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
		return
	}
	if !reflect.DeepEqual(items[0], expectResult[0]) && !reflect.DeepEqual(items[1], expectResult[1]) {
		t.Errorf("results not match, want %v, have %v or want %v, have %v", expectResult[0], items[0],
			expectResult[1], items[1])
		return
	}

	// query error
	mock.
		ExpectQuery("SELECT server_id, ip, category, map, currentplayers, " +
			"maxplayers, password FROM servers").
		WillReturnError(fmt.Errorf("db_error"))

	_, err = repo.ListServers()
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
		return
	}
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}

	// row scan error
	rows = sqlmock.NewRows([]string{"server_id", "ip"}).
		AddRow(1, "127.0.0.3:8080")

	mock.
		ExpectQuery("SELECT server_id, ip, category, map, currentplayers, " +
			"maxplayers, password FROM servers").
		WillReturnRows(rows)

	_, err = repo.ListServers()
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
		return
	}
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
}

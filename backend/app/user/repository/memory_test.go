package repository

import (
	"fmt"
	"reflect"
	"testing"

	sqlmock "github.com/DATA-DOG/go-sqlmock"
	"github.com/Toringol/csgo-trainingCamp/backend/app/model"
)

func TestSelectUserByID(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("Can`t create mock: %s", err)
	}
	defer db.Close()

	var elemID int64 = 1

	rows := sqlmock.
		NewRows([]string{"user_id", "username", "email", "password", "avatar"})

	expect := []*model.User{
		{
			ID:       elemID,
			Username: "Toringol",
			Email:    "toringol@mail.com",
			Password: "123123",
			Avatar:   "default/avatar",
		},
		{
			ID:       elemID + 1,
			Username: "Toringol1",
			Email:    "toringol1@mail.com",
			Password: "123123",
			Avatar:   "default/avatar",
		},
	}

	for _, item := range expect {
		rows = rows.AddRow(item.ID, item.Username, item.Email, item.Password, item.Avatar)
	}

	mock.
		ExpectQuery("SELECT user_id, username, email, password, avatar FROM users WHERE").
		WithArgs(elemID).
		WillReturnRows(rows)

	repo := &Repository{
		DB: db,
	}

	item, err := repo.SelectUserByID(elemID)
	if err != nil {
		t.Errorf("unexpected err: %s", err)
		return
	}
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
		return
	}
	if !reflect.DeepEqual(item, expect[0]) {
		t.Errorf("results not match, want %v, have %v", expect[0], item)
		return
	}

	// query error
	mock.
		ExpectQuery("SELECT user_id, username, email, password, avatar FROM users WHERE").
		WithArgs(elemID).
		WillReturnError(fmt.Errorf("db_error"))

	_, err = repo.SelectUserByID(elemID)
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
		return
	}
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}

	// row scan error
	rows = sqlmock.NewRows([]string{"user_id", "username"}).
		AddRow(1, "Toringol")

	mock.
		ExpectQuery("SELECT user_id, username, email, password, avatar FROM users WHERE").
		WithArgs(elemID).
		WillReturnRows(rows)

	_, err = repo.SelectUserByID(elemID)
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
		return
	}
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
}

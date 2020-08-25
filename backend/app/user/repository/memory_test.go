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

func TestSelectUserStatsByID(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("Can`t create mock: %s", err)
	}
	defer db.Close()

	var elemID int64 = 1

	rows := sqlmock.
		NewRows([]string{"user_id", "rank", "title", "matchPlayed", "matchWon", "matchLost", "matchDrew",
			"kills", "deaths", "assists", "hs", "damage", "rounds"})

	expect := []*model.UserStats{
		{
			ID:          elemID,
			Rank:        "Newbie",
			Title:       "Newbie",
			MatchPlayed: 1,
			MatchWon:    1,
			MatchLost:   0,
			MatchDrew:   0,
			Kills:       16,
			Deaths:      8,
			Assists:     0,
			HS:          50,
			Damage:      1560,
			Rounds:      16,
		},
		{
			ID:          elemID + 1,
			Rank:        "Newbie",
			Title:       "Newbie",
			MatchPlayed: 0,
			MatchWon:    0,
			MatchLost:   0,
			MatchDrew:   0,
			Kills:       0,
			Deaths:      0,
			Assists:     0,
			HS:          0,
			Damage:      0,
			Rounds:      0,
		},
	}

	for _, item := range expect {
		rows = rows.AddRow(item.ID, item.Rank, item.Title, item.MatchPlayed, item.MatchWon, item.MatchLost,
			item.MatchDrew, item.Kills, item.Deaths, item.Assists, item.HS, item.Damage, item.Rounds)
	}

	mock.
		ExpectQuery("SELECT (.+) FROM usersStats WHERE").
		WithArgs(elemID).
		WillReturnRows(rows)

	repo := &Repository{
		DB: db,
	}

	item, err := repo.SelectUserStatsByID(elemID)
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
		ExpectQuery("SELECT (.+) FROM usersStats WHERE").
		WithArgs(elemID).
		WillReturnError(fmt.Errorf("db_error"))

	_, err = repo.SelectUserStatsByID(elemID)
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
		return
	}
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}

	// row scan error
	rows = sqlmock.NewRows([]string{"user_id", "rank"}).
		AddRow(1, "Newbie")

	mock.
		ExpectQuery("SELECT (.+) FROM usersStats WHERE").
		WithArgs(elemID).
		WillReturnRows(rows)

	_, err = repo.SelectUserStatsByID(elemID)
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
		return
	}
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
}

func TestSelectUserByUsername(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("Can`t create mock: %s", err)
	}
	defer db.Close()

	var elemID int64 = 1
	var username string = "Toringol"

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
		WithArgs(username).
		WillReturnRows(rows)

	repo := &Repository{
		DB: db,
	}

	item, err := repo.SelectUserByUsername(username)
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
		WithArgs(username).
		WillReturnError(fmt.Errorf("db_error"))

	_, err = repo.SelectUserByUsername(username)
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
		WithArgs(username).
		WillReturnRows(rows)

	_, err = repo.SelectUserByUsername(username)
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
		return
	}
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
}

func TestCreateUser(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("cant create mock: %s", err)
	}
	defer db.Close()

	repo := &Repository{
		DB: db,
	}

	username := "Toringol"
	email := "toringol@mail.ru"
	password := "123123"
	avatar := "default/avatar"

	testItem := &model.User{
		Username: username,
		Email:    email,
		Password: password,
		Avatar:   avatar,
	}

	//ok query
	mock.
		ExpectExec(`INSERT INTO users`).
		WithArgs(username, email, password, avatar).
		WillReturnResult(sqlmock.NewResult(1, 1))

	id, err := repo.CreateUser(testItem)
	if id != 1 {
		t.Errorf("bad id: want %v, have %v", id, 1)
		return
	}

	// query error
	mock.
		ExpectExec(`INSERT INTO users`).
		WithArgs(username, email, password, avatar).
		WillReturnError(fmt.Errorf("bad query"))

	_, err = repo.CreateUser(testItem)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}

	// result error
	mock.
		ExpectExec(`INSERT INTO users`).
		WithArgs(username, email, password, avatar).
		WillReturnResult(sqlmock.NewErrorResult(fmt.Errorf("bad_result")))

	_, err = repo.CreateUser(testItem)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
}

func TestCreateUserStats(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("cant create mock: %s", err)
	}
	defer db.Close()

	repo := &Repository{
		DB: db,
	}

	var elemID int64 = 1
	rank := "Newbie"
	title := "Newbie"
	var matchPlayed int64 = 1
	var matchWon int64 = 1
	var matchLost int64 = 0
	var matchDrew int64 = 0
	var kills int64 = 16
	var deaths int64 = 8
	var assists int64 = 0
	var hs int64 = 50
	var damage int64 = 1560
	var rounds int64 = 16

	testItem := &model.UserStats{
		ID:          elemID,
		Rank:        rank,
		Title:       title,
		MatchPlayed: matchPlayed,
		MatchWon:    matchWon,
		MatchLost:   matchLost,
		MatchDrew:   matchDrew,
		Kills:       kills,
		Deaths:      deaths,
		Assists:     assists,
		HS:          hs,
		Damage:      damage,
		Rounds:      rounds,
	}

	//ok query
	mock.
		ExpectExec(`INSERT INTO usersStats`).
		WithArgs(elemID, rank, title, matchPlayed, matchWon, matchLost, matchDrew,
			kills, deaths, assists, hs, damage, rounds).
		WillReturnResult(sqlmock.NewResult(1, 1))

	id, err := repo.CreateUserStats(testItem)
	if id != 1 {
		t.Errorf("bad id: want %v, have %v", id, 1)
		return
	}

	// query error
	mock.
		ExpectExec(`INSERT INTO usersStats`).
		WithArgs(elemID, rank, title, matchPlayed, matchWon, matchLost, matchDrew,
			kills, deaths, assists, hs, damage, rounds).
		WillReturnError(fmt.Errorf("bad query"))

	_, err = repo.CreateUserStats(testItem)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}

	// result error
	mock.
		ExpectExec(`INSERT INTO usersStats`).
		WithArgs(elemID, rank, title, matchPlayed, matchWon, matchLost, matchDrew,
			kills, deaths, assists, hs, damage, rounds).
		WillReturnResult(sqlmock.NewErrorResult(fmt.Errorf("bad_result")))

	_, err = repo.CreateUserStats(testItem)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
}

func TestUpdateUser(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("cant create mock: %s", err)
	}
	defer db.Close()

	var elemID int64 = 1

	rows := sqlmock.
		NewRows([]string{"user_id", "login", "email", "password", "avatar"})

	testInput := []*model.User{
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

	expect := &model.User{
		ID:       elemID,
		Username: "newUser",
		Email:    "newuser@mail.ru",
		Password: "123123",
		Avatar:   "default/avatar",
	}

	for _, item := range testInput {
		rows = rows.AddRow(item.ID, item.Username, item.Email, item.Password, item.Avatar)
	}

	mock.
		ExpectExec(`UPDATE users SET`).
		WithArgs(expect.Username, expect.Email, expect.Password, expect.Avatar, expect.ID).
		WillReturnResult(sqlmock.NewResult(1, 1))

	repo := &Repository{
		DB: db,
	}

	rowsAffected, err := repo.UpdateUser(expect)
	if rowsAffected != 1 {
		t.Errorf("bad rowsAffected: want %v, have %v", rowsAffected, 1)
		return
	}

	// query error
	mock.
		ExpectExec(`UPDATE users SET`).
		WithArgs(expect.Username, expect.Email, expect.Password, expect.Avatar, expect.ID).
		WillReturnError(fmt.Errorf("bad query"))

	_, err = repo.UpdateUser(expect)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}

	// result error
	mock.
		ExpectExec(`UPDATE users SET`).
		WithArgs(expect.Username, expect.Email, expect.Password, expect.Avatar, expect.ID).
		WillReturnResult(sqlmock.NewErrorResult(fmt.Errorf("bad_result")))

	_, err = repo.UpdateUser(expect)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
}

func TestUpdateUserStats(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("cant create mock: %s", err)
	}
	defer db.Close()

	var elemID int64 = 1

	rows := sqlmock.
		NewRows([]string{"user_id", "rank", "title", "matchPlayed", "matchWon", "matchLost", "matchDrew",
			"kills", "deaths", "assists", "hs", "damage", "rounds"})

	testInput := []*model.UserStats{
		{
			ID:          elemID,
			Rank:        "Newbie",
			Title:       "Newbie",
			MatchPlayed: 1,
			MatchWon:    1,
			MatchLost:   0,
			MatchDrew:   0,
			Kills:       16,
			Deaths:      8,
			Assists:     0,
			HS:          50,
			Damage:      1560,
			Rounds:      16,
		},
		{
			ID:          elemID + 1,
			Rank:        "Newbie",
			Title:       "Newbie",
			MatchPlayed: 0,
			MatchWon:    0,
			MatchLost:   0,
			MatchDrew:   0,
			Kills:       0,
			Deaths:      0,
			Assists:     0,
			HS:          0,
			Damage:      0,
			Rounds:      0,
		},
	}

	expect := &model.UserStats{
		ID:          elemID,
		Rank:        "Top",
		Title:       "Top",
		MatchPlayed: 10,
		MatchWon:    10,
		MatchLost:   0,
		MatchDrew:   0,
		Kills:       160,
		Deaths:      50,
		Assists:     60,
		HS:          80,
		Damage:      20000,
		Rounds:      160,
	}

	for _, item := range testInput {
		rows = rows.AddRow(item.ID, item.Rank, item.Title, item.MatchPlayed, item.MatchWon, item.MatchLost,
			item.MatchDrew, item.Kills, item.Deaths, item.Assists, item.HS, item.Damage, item.Rounds)
	}

	mock.
		ExpectExec(`UPDATE usersStats SET`).
		WithArgs(expect.Rank, expect.Title, expect.MatchPlayed, expect.MatchWon, expect.MatchLost, expect.MatchDrew,
			expect.Kills, expect.Deaths, expect.Assists, expect.HS, expect.Damage, expect.Rounds, expect.ID).
		WillReturnResult(sqlmock.NewResult(1, 1))

	repo := &Repository{
		DB: db,
	}

	rowsAffected, err := repo.UpdateUserStats(expect)
	if rowsAffected != 1 {
		t.Errorf("bad rowsAffected: want %v, have %v", rowsAffected, 1)
		return
	}

	// query error
	mock.
		ExpectExec(`UPDATE usersStats SET`).
		WithArgs(expect.Rank, expect.Title, expect.MatchPlayed, expect.MatchWon, expect.MatchLost, expect.MatchDrew,
			expect.Kills, expect.Deaths, expect.Assists, expect.HS, expect.Damage, expect.Rounds, expect.ID).
		WillReturnError(fmt.Errorf("bad query"))

	_, err = repo.UpdateUserStats(expect)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}

	// result error
	mock.
		ExpectExec(`UPDATE usersStats SET`).
		WithArgs(expect.Rank, expect.Title, expect.MatchPlayed, expect.MatchWon, expect.MatchLost, expect.MatchDrew,
			expect.Kills, expect.Deaths, expect.Assists, expect.HS, expect.Damage, expect.Rounds, expect.ID).
		WillReturnResult(sqlmock.NewErrorResult(fmt.Errorf("bad_result")))

	_, err = repo.UpdateUserStats(expect)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
}

func TestDeleteUser(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("cant create mock: %s", err)
	}
	defer db.Close()

	var elemID int64 = 1

	rows := sqlmock.
		NewRows([]string{"user_id", "login", "email", "password", "avatar"})

	testInput := []*model.User{
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

	for _, item := range testInput {
		rows = rows.AddRow(item.ID, item.Username, item.Email, item.Password, item.Avatar)
	}

	mock.
		ExpectExec(`DELETE FROM users WHERE`).
		WithArgs(elemID).
		WillReturnResult(sqlmock.NewResult(1, 1))

	repo := &Repository{
		DB: db,
	}

	rowsAffected, err := repo.DeleteUser(elemID)
	if err != nil {
		t.Errorf("unexpected err: %s", err)
		return
	}
	if rowsAffected != 1 {
		t.Errorf("bad rowsAffected: want %v, have %v", rowsAffected, 1)
		return
	}

	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
	}

	// query error
	mock.
		ExpectExec(`DELETE FROM users WHERE`).
		WithArgs(elemID).
		WillReturnError(fmt.Errorf("bad query"))

	_, err = repo.DeleteUser(elemID)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
	}

	// result error
	mock.
		ExpectExec(`DELETE FROM users WHERE`).
		WithArgs(elemID).
		WillReturnResult(sqlmock.NewErrorResult(fmt.Errorf("bad_result")))

	_, err = repo.DeleteUser(elemID)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
	}
}

func TestDeleteUserStats(t *testing.T) {
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("cant create mock: %s", err)
	}
	defer db.Close()

	var elemID int64 = 1

	rows := sqlmock.
		NewRows([]string{"user_id", "rank", "title", "matchPlayed", "matchWon", "matchLost", "matchDrew",
			"kills", "deaths", "assists", "hs", "damage", "rounds"})

	testInput := []*model.UserStats{
		{
			ID:          elemID,
			Rank:        "Newbie",
			Title:       "Newbie",
			MatchPlayed: 1,
			MatchWon:    1,
			MatchLost:   0,
			MatchDrew:   0,
			Kills:       16,
			Deaths:      8,
			Assists:     0,
			HS:          50,
			Damage:      1560,
			Rounds:      16,
		},
		{
			ID:          elemID + 1,
			Rank:        "Newbie",
			Title:       "Newbie",
			MatchPlayed: 0,
			MatchWon:    0,
			MatchLost:   0,
			MatchDrew:   0,
			Kills:       0,
			Deaths:      0,
			Assists:     0,
			HS:          0,
			Damage:      0,
			Rounds:      0,
		},
	}

	for _, item := range testInput {
		rows = rows.AddRow(item.ID, item.Rank, item.Title, item.MatchPlayed, item.MatchWon, item.MatchLost,
			item.MatchDrew, item.Kills, item.Deaths, item.Assists, item.HS, item.Damage, item.Rounds)
	}

	mock.
		ExpectExec(`DELETE FROM usersStats WHERE`).
		WithArgs(elemID).
		WillReturnResult(sqlmock.NewResult(1, 1))

	repo := &Repository{
		DB: db,
	}

	rowsAffected, err := repo.DeleteUserStats(elemID)
	if err != nil {
		t.Errorf("unexpected err: %s", err)
		return
	}
	if rowsAffected != 1 {
		t.Errorf("bad rowsAffected: want %v, have %v", rowsAffected, 1)
		return
	}

	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
	}

	// query error
	mock.
		ExpectExec(`DELETE FROM usersStats WHERE`).
		WithArgs(elemID).
		WillReturnError(fmt.Errorf("bad query"))

	_, err = repo.DeleteUserStats(elemID)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
	}

	// result error
	mock.
		ExpectExec(`DELETE FROM usersStats WHERE`).
		WithArgs(elemID).
		WillReturnResult(sqlmock.NewErrorResult(fmt.Errorf("bad_result")))

	_, err = repo.DeleteUserStats(elemID)
	if err == nil {
		t.Errorf("expected error, got nil")
		return
	}
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
	}
}

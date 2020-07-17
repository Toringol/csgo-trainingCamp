package repository

import (
	"database/sql"
	"log"

	"github.com/Toringol/csgo-trainingCamp/backend/app/model"
	"github.com/Toringol/csgo-trainingCamp/backend/app/user"
	"github.com/spf13/viper"
)

// Repository - Database implemetation
type Repository struct {
	DB *sql.DB
}

// NewUserMemoryRepository - create connection and return new repository
func NewUserMemoryRepository() user.Repository {
	dsn := viper.GetString("database")
	dsn += "&charset=utf8"
	dsn += "&interpolateParams=true"

	db, err := sql.Open("mysql", dsn)
	db.SetMaxOpenConns(10)

	err = db.Ping()
	if err != nil {
		log.Println("Error while Ping")
	}

	return &Repository{
		DB: db,
	}
}

// SelectUserByID - select all user`s data by ID
func (repo *Repository) SelectUserByID(id int64) (*model.User, error) {
	record := &model.User{}
	err := repo.DB.
		QueryRow("SELECT id, username, email, password, avatar FROM users WHERE id = ?", id).
		Scan(&record.ID, &record.Username, &record.Email, &record.Password, &record.Avatar)
	if err != nil {
		return nil, err
	}
	return record, nil
}

// SelectUserByUsername - select all user`s data by username
func (repo *Repository) SelectUserByUsername(username string) (*model.User, error) {
	record := &model.User{}
	err := repo.DB.
		QueryRow("SELECT id, username, email, password, avatar FROM users WHERE username = ?", username).
		Scan(&record.ID, &record.Username, &record.Email, &record.Password, &record.Avatar)
	if err != nil {
		return nil, err
	}
	return record, nil
}

// CreateUser - create new User in dataBase with default avatar
func (repo *Repository) CreateUser(elem *model.User) (int64, error) {
	result, err := repo.DB.Exec(
		"INSERT INTO users (`username`, `email`, `password`, `avatar`) VALUES (?, ?, ?, ?)",
		elem.Username,
		elem.Email,
		elem.Password,
		elem.Avatar,
	)
	if err != nil {
		return 0, err
	}
	return result.LastInsertId()
}

// UpdateUser - update user`s data in DataBase
func (repo *Repository) UpdateUser(elem *model.User) (int64, error) {
	result, err := repo.DB.Exec(
		"UPDATE users SET"+
			"`username` = ?"+
			"`email` = ?"+
			",`password` = ?"+
			",`avatar` = ?"+
			"WHERE id = ?",
		elem.Username,
		elem.Email,
		elem.Password,
		elem.Avatar,
		elem.ID,
	)
	if err != nil {
		return 0, err
	}
	return result.RowsAffected()
}

// DeleteUser - delete user`s record in DataBase
func (repo *Repository) DeleteUser(id int64) (int64, error) {
	result, err := repo.DB.Exec(
		"DELETE FROM users WHERE id = ?",
		id,
	)
	if err != nil {
		return 0, err
	}
	return result.RowsAffected()
}

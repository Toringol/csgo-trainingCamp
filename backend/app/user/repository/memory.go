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
		QueryRow("SELECT user_id, username, email, password, avatar FROM users WHERE user_id = ?", id).
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
		QueryRow("SELECT user_id, username, email, password, avatar FROM users WHERE username = ?", username).
		Scan(&record.ID, &record.Username, &record.Email, &record.Password, &record.Avatar)
	if err != nil {
		return nil, err
	}
	return record, nil
}

// SelectUserStatsByID - select all user`s stats by user_id
func (repo *Repository) SelectUserStatsByID(id int64) (*model.UserStats, error) {
	record := &model.UserStats{}
	err := repo.DB.
		QueryRow("SELECT * FROM usersStats WHERE user_id = ?", id).
		Scan(&record.ID, &record.Rank, &record.Title, &record.MatchPlayed, &record.MatchWon,
			&record.MatchLost, &record.MatchDrew, &record.Kills, &record.Deaths, &record.Assists,
			&record.HS, &record.Damage, &record.Rounds)
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

// CreateUserStats - create record in userStats table
func (repo *Repository) CreateUserStats(elem *model.UserStats) (int64, error) {
	result, err := repo.DB.Exec(
		"INSERT INTO usersStats (`user_id`, `rank`, `title`, `matchPlayed`, `matchWon`, `matchLost`, "+
			"`matchDrew`, `kills`, `deaths`, `assists`, `hs`, `damage`, `rounds`) "+
			"VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
		elem.ID,
		elem.Rank,
		elem.Title,
		elem.MatchPlayed,
		elem.MatchWon,
		elem.MatchLost,
		elem.MatchDrew,
		elem.Kills,
		elem.Deaths,
		elem.Assists,
		elem.HS,
		elem.Damage,
		elem.Rounds,
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
			",`email` = ?"+
			",`password` = ?"+
			",`avatar` = ? "+
			"WHERE user_id = ?",
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

// UpdateUserStats - update user`s stats data in DataBase
func (repo *Repository) UpdateUserStats(elem *model.UserStats) (int64, error) {
	result, err := repo.DB.Exec(
		"UPDATE usersStats SET"+
			"`rank` = ?"+
			",`title` = ?"+
			",`matchPlayed` = ?"+
			",`matchWon` = ?"+
			",`matchLost` = ?"+
			",`matchDrew` = ?"+
			",`kills` = ?"+
			",`deaths` = ?"+
			",`assists` = ?"+
			",`hs` = ?"+
			",`damage` = ?"+
			",`rounds` = ? "+
			"WHERE user_id = ?",
		elem.Rank,
		elem.Title,
		elem.MatchPlayed,
		elem.MatchWon,
		elem.MatchLost,
		elem.MatchDrew,
		elem.Kills,
		elem.Deaths,
		elem.Assists,
		elem.HS,
		elem.Damage,
		elem.Rounds,
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
		"DELETE FROM users WHERE user_id = ?",
		id,
	)
	if err != nil {
		return 0, err
	}
	return result.RowsAffected()
}

// DeleteUserStats - delete user`s stats record in DataBase
func (repo *Repository) DeleteUserStats(id int64) (int64, error) {
	result, err := repo.DB.Exec(
		"DELETE FROM usersStats WHERE user_id = ?",
		id,
	)
	if err != nil {
		return 0, err
	}
	return result.RowsAffected()
}

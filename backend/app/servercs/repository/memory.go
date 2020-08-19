package repository

import (
	"database/sql"
	"log"

	"github.com/Toringol/csgo-trainingCamp/backend/app/model"
	"github.com/Toringol/csgo-trainingCamp/backend/app/servercs"
	"github.com/spf13/viper"
)

// Repository - Database implementation
type Repository struct {
	DB *sql.DB
}

// NewUserMemoryRepository - create connection and return new repository
func NewUserMemoryRepository() servercs.Repository {
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

// ListServers - return all cs servers
func (repo *Repository) ListServers() ([]*model.ServerCS, error) {
	serversCS := []*model.ServerCS{}

	rows, err := repo.DB.Query("SELECT id, ip, category, map, currentplayers," +
		"maxplayers, password FROM servers")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		server := &model.ServerCS{}
		err = rows.Scan(&server.ID, &server.IP, &server.Category, &server.Map,
			&server.CurrentPlayers, &server.MaxPlayers, &server.Password)
		if err != nil {
			return nil, err
		}
		serversCS = append(serversCS, server)
	}

	return serversCS, nil
}

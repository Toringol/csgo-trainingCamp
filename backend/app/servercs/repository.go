package servercs

import "github.com/Toringol/csgo-trainingCamp/backend/app/model"

// Repository - funcs interact with DataBase
type Repository interface {
	ListServers() ([]*model.ServerCS, error)
}

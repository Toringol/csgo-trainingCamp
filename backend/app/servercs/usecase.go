package servercs

import "github.com/Toringol/csgo-trainingCamp/backend/app/model"

// Usecase - funcs interact with User
type Usecase interface {
	ListServers() ([]*model.ServerCS, error)
}

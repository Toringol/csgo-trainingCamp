package usecase

import (
	"github.com/Toringol/csgo-trainingCamp/backend/app/model"
	"github.com/Toringol/csgo-trainingCamp/backend/app/servercs"
)

// userUsecase - connector database and user
type serverCSUsecase struct {
	repo servercs.Repository
}

// NewServerCSUsecase - create new usercase
func NewServerCSUsecase(serverCSRepo servercs.Repository) servercs.Usecase {
	return serverCSUsecase{repo: serverCSRepo}
}

// SelectServers - return all cs go servers
func (su serverCSUsecase) ListServers() ([]*model.ServerCS, error) {
	return su.repo.ListServers()
}

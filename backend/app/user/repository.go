package user

import "github.com/Toringol/csgo-trainingCamp/backend/app/model"

// Repository - funcs interact with DataBase
type Repository interface {
	SelectUserByID(int64) (*model.User, error)
	SelectUserByUsername(string) (*model.User, error)
	CreateUser(*model.User) (int64, error)
	UpdateUser(*model.User) (int64, error)
	DeleteUser(int64) (int64, error)
}

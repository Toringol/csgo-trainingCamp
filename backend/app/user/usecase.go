package user

import "github.com/Toringol/csgo-trainingCamp/backend/app/model"

// Usecase - funcs interact with User
type Usecase interface {
	// Usecase with User table
	SelectUserByID(int64) (*model.User, error)
	SelectUserByUsername(string) (*model.User, error)
	CreateUser(*model.User) (int64, error)
	UpdateUser(*model.User) (int64, error)
	DeleteUser(int64) (int64, error)

	// Usecase with UserStats table
	SelectUserStatsByID(int64) (*model.UserStats, error)
	CreateUserStats(*model.UserStats) (int64, error)
	UpdateUserStats(*model.UserStats) (int64, error)
	DeleteUserStats(int64) (int64, error)
}

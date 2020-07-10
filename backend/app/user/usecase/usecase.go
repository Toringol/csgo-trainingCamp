package usecase

import (
	"github.com/Toringol/csgo-trainingCamp/backend/app/model"
	"github.com/Toringol/csgo-trainingCamp/backend/app/user"
)

// userUsecase - connector database and user
type userUsecase struct {
	repo user.Repository
}

// NewUserUsecase - create new usercase
func NewUserUsecase(userRepo user.Repository) user.Usecase {
	return userUsecase{repo: userRepo}
}

// SelectUserByID - return user`s data by ID
func (u userUsecase) SelectUserByID(id int64) (*model.User, error) {
	return u.repo.SelectUserByID(id)
}

// SelectUserByUsername - return user`s data by username
func (u userUsecase) SelectUserByUsername(username string) (*model.User, error) {
	return u.repo.SelectUserByUsername(username)
}

// CreateUser - create new user
func (u userUsecase) CreateUser(user *model.User) (int64, error) {
	return u.repo.CreateUser(user)
}

// UpdateUser - update user`s data
func (u userUsecase) UpdateUser(user *model.User) (int64, error) {
	return u.repo.UpdateUser(user)
}

// DeleteUser - delete user data
func (u userUsecase) DeleteUser(id int64) (int64, error) {
	return u.repo.DeleteUser(id)
}

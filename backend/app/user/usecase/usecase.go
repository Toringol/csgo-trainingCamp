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

// SelectUserStatsByID - return user`s stats data by ID
func (u userUsecase) SelectUserStatsByID(id int64) (*model.UserStats, error) {
	return u.repo.SelectUserStatsByID(id)
}

// CreateUser - create new user
func (u userUsecase) CreateUser(user *model.User) (int64, error) {
	return u.repo.CreateUser(user)
}

// CreateUserStats - create user stats record for new user
func (u userUsecase) CreateUserStats(userStats *model.UserStats) (int64, error) {
	return u.repo.CreateUserStats(userStats)
}

// UpdateUser - update user`s data
func (u userUsecase) UpdateUser(user *model.User) (int64, error) {
	return u.repo.UpdateUser(user)
}

// UpdateUserStats - update user`s stats data
func (u userUsecase) UpdateUserStats(userStats *model.UserStats) (int64, error) {
	return u.repo.UpdateUserStats(userStats)
}

// DeleteUser - delete user data
func (u userUsecase) DeleteUser(id int64) (int64, error) {
	return u.repo.DeleteUser(id)
}

// DeleteUserStats - delete user`s stats record
func (u userUsecase) DeleteUserStats(id int64) (int64, error) {
	return u.repo.DeleteUserStats(id)
}

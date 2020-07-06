package model

// User - user structure in DataBase
type User struct {
	ID       int64  `json:"id,omitempty"`
	Username string `json:"username"`
	Email    string `json:"email,omitempty"`
	Password string `json:"password,omitempty"`
	Avatar   string `json:"avatar"`
}

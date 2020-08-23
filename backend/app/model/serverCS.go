package model

// ServerCS - serverCS structure in DataBase
type ServerCS struct {
	ID             int64  `json:"id,omitempty"`
	IP             string `json:"ip"`
	Category       string `json:"category"`
	Map            string `json:"map"`
	CurrentPlayers int64  `json:"currentplayers"`
	MaxPlayers     int64  `json:"maxplayers"`
	Password       string `json:"password,omitempty"`
}

package model

// UserStats - userStats structure in DataBase
type UserStats struct {
	ID          int64  `json:"id,omitempty"`
	Rank        string `json:"rank"`
	Title       string `json:"title"`
	MatchPlayed int64  `json:"matchPlayed"`
	MatchWon    int64  `json:"matchWon"`
	MatchLost   int64  `json:"matchLost"`
	MatchDrew   int64  `json:"matchDrew"`
	Kills       int64  `json:"kills"`
	Deaths      int64  `json:"deaths"`
	Assists     int64  `json:"assists"`
	HS          int64  `json:"hs"`
	Damage      int64  `json:"damage"`
	Rounds      int64  `json:"rounds"`
}

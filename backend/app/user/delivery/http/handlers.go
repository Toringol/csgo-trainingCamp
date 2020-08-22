package http

import (
	"database/sql"
	"encoding/base64"
	"log"
	"net/http"

	"github.com/Toringol/csgo-trainingCamp/backend/app/auth/cookies"
	"github.com/Toringol/csgo-trainingCamp/backend/app/model"
	"github.com/Toringol/csgo-trainingCamp/backend/app/user"
	"github.com/Toringol/csgo-trainingCamp/backend/tools"
	"github.com/labstack/echo/v4"
	"github.com/spf13/viper"
)

// userHandlers - http handlers structure
type userHandlers struct {
	usecase user.Usecase
}

// NewUserHandler - deliver our handlers in http
func NewUserHandler(e *echo.Echo, us user.Usecase) {
	handlers := userHandlers{usecase: us}

	// User handlers
	e.GET("/", handlers.handleHomePage)
	e.GET("/logout/", handlers.handleLogout)
	e.GET("/userStats/", handlers.handleProfileStats)

	e.POST("/signup/", handlers.handleSignUp)
	e.POST("/signin/", handlers.handleSignIn)
}

// handleHomePage - home page with updates and blog
func (h *userHandlers) handleHomePage(ctx echo.Context) error {
	session, err := cookies.СheckSession(ctx)
	if err != nil || session == nil {
		return ctx.JSON(http.StatusOK, nil)
	}

	userData, err := h.usecase.SelectUserByUsername(session.Username)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Internal DB Error")
	}

	userData.ID = 0
	userData.Email = ""
	userData.Password = ""

	return ctx.JSON(http.StatusOK, userData)
}

// handleLogout - delete session
func (h *userHandlers) handleLogout(ctx echo.Context) error {
	err := cookies.ClearSession(ctx)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Cookie del error")
	}

	return ctx.JSON(http.StatusOK, nil)
}

// handleSignUp - create user record in DB if username is not occupied
// user`ll get default avatar from AWS S3 bucket
// setup session
func (h *userHandlers) handleSignUp(ctx echo.Context) error {
	userInput := new(model.User)

	if err := ctx.Bind(userInput); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Bad Request")
	}

	// Check user with input username in DB
	_, err := h.usecase.SelectUserByUsername(userInput.Username)
	switch {
	case err == sql.ErrNoRows:
		break
	case err != nil:
		return echo.NewHTTPError(http.StatusInternalServerError, "Internal DB Error")
	default:
		return echo.NewHTTPError(http.StatusConflict, "This username is occupied")
	}

	// Convert open pass to secure pass
	userInput.Password = base64.RawStdEncoding.EncodeToString(tools.ConvertPass(userInput.Password))

	// Path to AWS S3 bucket and defaultAvatar
	userInput.Avatar = viper.GetString("storagePath") + "avatars/defaultAvatar.png"

	lastID, err := h.usecase.CreateUser(userInput)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Internal DB Error")
	}

	userInput.ID = lastID

	userStats := new(model.UserStats)
	userStats.ID = lastID
	userStats.Title = "Newbie"
	userStats.Rank = "Newbie"

	_, err = h.usecase.CreateUserStats(userStats)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Internal DB Error")
	}

	_, err = cookies.SetSession(ctx, userInput)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Cookie set error")
	}

	userInput.ID = 0
	userInput.Email = ""
	userInput.Password = ""

	return ctx.JSON(http.StatusCreated, userInput)
}

// handleSignIn - check user input
// if all ok -> setup session
func (h *userHandlers) handleSignIn(ctx echo.Context) error {
	authCredentials := new(model.User)

	if err := ctx.Bind(authCredentials); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, "Bad Request")
	}

	userRecord, err := h.usecase.SelectUserByUsername(authCredentials.Username)
	switch {
	case err == sql.ErrNoRows:
		return echo.NewHTTPError(http.StatusUnauthorized, "Incorrect username or password")
	case err != nil:
		return echo.NewHTTPError(http.StatusInternalServerError, "Internal DB Error")
	}

	oldPassDecrypted, err := base64.RawStdEncoding.DecodeString(userRecord.Password)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Internal Error")
	}

	if !tools.CheckPass(oldPassDecrypted, authCredentials.Password) {
		return echo.NewHTTPError(http.StatusUnauthorized, "Incorrect username or password")
	}

	_, err = cookies.SetSession(ctx, userRecord)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Cookie set error")
	}

	userRecord.ID = 0
	userRecord.Email = ""
	userRecord.Password = ""

	return ctx.JSON(http.StatusOK, userRecord)
}

// handleProfileStats - check cookie and return user`s statistics data
func (h *userHandlers) handleProfileStats(ctx echo.Context) error {
	session, err := cookies.СheckSession(ctx)
	if err != nil || session == nil {
		return ctx.JSON(http.StatusOK, nil)
	}

	userData, err := h.usecase.SelectUserByUsername(session.Username)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Internal DB Error")
	}

	userStats, err := h.usecase.SelectUserStatsByID(userData.ID)
	if err != nil {
		log.Println(err)
		return echo.NewHTTPError(http.StatusInternalServerError, "Internal DB Error")
	}

	userStats.ID = 0

	return ctx.JSON(http.StatusOK, userStats)
}

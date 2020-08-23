package delivery

import (
	"net/http"

	"github.com/Toringol/csgo-trainingCamp/backend/app/servercs"
	"github.com/labstack/echo/v4"
)

// userHandlers - http handlers structure
type serverCSHandlers struct {
	usecase servercs.Usecase
}

// NewServerCSHandler - deliver our handlers in http
func NewServerCSHandler(e *echo.Echo, us servercs.Usecase) {
	handlers := serverCSHandlers{usecase: us}

	// ServersCs handlers
	e.GET("/servers", handlers.handleListServers)
}

// handleListServers - return online servers
func (sh *serverCSHandlers) handleListServers(ctx echo.Context) error {
	servers, err := sh.usecase.ListServers()
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "Internal DB Error")
	}

	return ctx.JSON(http.StatusOK, servers)
}

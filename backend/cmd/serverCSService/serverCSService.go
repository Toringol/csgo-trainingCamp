package main

import (
	"log"
	"net/http"

	servercshttp "github.com/Toringol/csgo-trainingCamp/backend/app/servercs/delivery/http"
	"github.com/Toringol/csgo-trainingCamp/backend/app/servercs/repository"
	"github.com/Toringol/csgo-trainingCamp/backend/app/servercs/usecase"
	"github.com/Toringol/csgo-trainingCamp/backend/config"
	_ "github.com/go-sql-driver/mysql"
	"github.com/labstack/echo/v4/middleware"
	"github.com/spf13/viper"
)

func main() {

	if err := config.Init(); err != nil {
		log.Fatalf("%s", err.Error())
	}

	listenAddr := viper.GetString("serverCSServiceListenAddr")

	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: "${time_rfc3339} [${method}] ${remote_ip}, ${uri} ${status} 'error':'${error}'\n",
	}))

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins:     []string{viper.GetString("frontendAddr")},
		AllowMethods:     []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
		AllowCredentials: true,
	}))

	servercshttp.NewUserHandler(e, usecase.NewUserUsecase(repository.NewUserMemoryRepository()))

	e.Logger.Fatal(e.Start(listenAddr))
}

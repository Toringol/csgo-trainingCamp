package main

import (
	"log"
	"net/http"

	"github.com/Toringol/csgo-trainingCamp/backend/app/auth/cookies"
	"github.com/Toringol/csgo-trainingCamp/backend/app/auth/sessionManager"
	userhttp "github.com/Toringol/csgo-trainingCamp/backend/app/user/delivery/http"
	"github.com/Toringol/csgo-trainingCamp/backend/app/user/repository"
	"github.com/Toringol/csgo-trainingCamp/backend/app/user/usecase"
	"github.com/Toringol/csgo-trainingCamp/backend/config"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gomodule/redigo/redis"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/spf13/viper"

	_ "github.com/Toringol/csgo-trainingCamp/backend/docs"
	echoSwagger "github.com/swaggo/echo-swagger"
)

// @title Swagger CS-GO Backend API
// @version 0.1
// @description This is CS-GO Backend Server
// @description Server provides service for players that want to practise their skills and improve it
func main() {

	if err := config.Init(); err != nil {
		log.Fatalf("%s", err.Error())
	}

	listenAddr := viper.GetString("listenAddr")

	redisConn, err := redis.DialURL(viper.GetString("redisDB"))
	if err != nil {
		log.Fatalf("cant connect to redis")
	}

	cookies.SessManager = sessionManager.NewSessionManager(redisConn)

	e := echo.New()

	e.GET("/swagger/*", echoSwagger.WrapHandler)

	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: "${time_rfc3339} [${method}] ${remote_ip}, ${uri} ${status} 'error':'${error}'\n",
	}))

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins:     []string{viper.GetString("frontendAddr")},
		AllowMethods:     []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
		AllowCredentials: true,
	}))

	userhttp.NewUserHandler(e, usecase.NewUserUsecase(repository.NewUserMemoryRepository()))

	e.Logger.Fatal(e.Start(listenAddr))
}

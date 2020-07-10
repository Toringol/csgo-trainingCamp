package main

import (
	"log"

	"github.com/Toringol/csgo-trainingCamp/backend/app/auth/cookies"
	"github.com/Toringol/csgo-trainingCamp/backend/app/auth/sessionManager"
	userhttp "github.com/Toringol/csgo-trainingCamp/backend/app/user/delivery/http"
	"github.com/Toringol/csgo-trainingCamp/backend/app/user/repository"
	"github.com/Toringol/csgo-trainingCamp/backend/app/user/usecase"
	"github.com/Toringol/csgo-trainingCamp/backend/config"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gomodule/redigo/redis"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/spf13/viper"
)

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

	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: "${time_rfc3339} [${method}] ${remote_ip}, ${uri} ${status} 'error':'${error}'\n",
	}))

	userhttp.NewUserHandler(e, usecase.NewUserUsecase(repository.NewUserMemoryRepository()))

	e.Logger.Fatal(e.Start(listenAddr))
}

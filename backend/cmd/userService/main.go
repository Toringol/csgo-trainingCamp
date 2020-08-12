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

	echoSwagger "github.com/swaggo/echo-swagger"
	_ "github.com/swaggo/echo-swagger/example/docs"
)

// @title Swagger Backend API
// @version 2.0
// @description This is a sample server Petstore server.
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host petstore.swagger.io
// @BasePath /v2
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

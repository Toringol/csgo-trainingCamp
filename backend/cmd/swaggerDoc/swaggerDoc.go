package main

import (
	"log"

	"github.com/Toringol/csgo-trainingCamp/backend/config"
	"github.com/labstack/echo/v4"
	"github.com/spf13/viper"

	_ "github.com/Toringol/csgo-trainingCamp/backend/docs"
	echoSwagger "github.com/swaggo/echo-swagger"
)

// http://localhost:8090/swagger/index.html get swagger doc
func main() {

	if err := config.Init(); err != nil {
		log.Fatalf("%s", err.Error())
	}

	listenAddr := viper.GetString("swaggerDocListenAddr")

	e := echo.New()

	e.GET("/swagger/*", echoSwagger.WrapHandler)

	e.Logger.Fatal(e.Start(listenAddr))
}

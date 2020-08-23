package main

import (
	"log"

	"github.com/Toringol/csgo-trainingCamp/backend/config"
	"github.com/Toringol/csgo-trainingCamp/backend/tools"
)

func main() {
	if err := config.Init(); err != nil {
		log.Fatalf("%s", err.Error())
	}

	err := tools.LoadNews()
	if err != nil {
		log.Fatal(err)
	}
	log.Println("Success parse news!")
}

package main

import (
	"log"
	"net/http"
	"ticker-trick/handlers"

	"github.com/joho/godotenv"
)

func main(){
	godotenv.Load()
	http.HandleFunc("/api/stock", handlers.StockHandler)
	log.Println("Server starting on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

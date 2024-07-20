package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"ticker-trick-backend/src/handlers"

	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

func main() {
	godotenv.Load()
	frontOrigin := os.Getenv("FRONT_URL")
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{ frontOrigin },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Authorization", "Content-Type"},
		AllowCredentials: true,
	})
	
	http.HandleFunc("/api/stock/", handlers.StockHandler)
	handler := c.Handler(http.DefaultServeMux)

	port := os.Getenv("PORT")

	fmt.Printf("Starting server on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}

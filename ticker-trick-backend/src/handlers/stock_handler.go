package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"ticker-trick-backend/src/services"
)

func StockHandler(w http.ResponseWriter, r *http.Request) {
	ticker := strings.TrimPrefix(r.URL.Path, "/api/stock/")
	if ticker == "" {
		http.Error(w, "Ticker is required", http.StatusBadRequest)
		return
	}

	data, err := services.GetStockData(ticker)
	if err != nil {
		http.Error(w, fmt.Sprintf("Error fetching stock data: %v", err), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(data)
}

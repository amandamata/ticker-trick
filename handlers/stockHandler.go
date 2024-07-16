package handlers

import (
	"net/http"
	"ticker-trick/services"
)

func StockHandler(w http.ResponseWriter, r * http.Request){
	ticker := r.URL.Query().Get("ticker")

	if ticker == "" {
		http.Error(w, "Ticker is required", http.StatusBadRequest)
		return
	}

	services.GetStockData(ticker)
	
}


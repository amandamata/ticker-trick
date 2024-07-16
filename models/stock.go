package models

type Stock struct {
    Ticker string  `json:"ticker"`
    Price  float64 `json:"price"`
}

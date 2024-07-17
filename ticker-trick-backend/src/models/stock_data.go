package models

import "time"

type StockData struct {
	Results []struct {
		Currency                 string    `json:"currency"`
		ShortName                string    `json:"shortName"`
		LongName                 string    `json:"longName"`
		RegularMarketChange      float64   `json:"regularMarketChange"`
		RegularMarketChangePercent float64   `json:"regularMarketChangePercent"`
		RegularMarketTime        time.Time `json:"regularMarketTime"`
		RegularMarketPrice       float64   `json:"regularMarketPrice"`
		RegularMarketDayHigh     float64   `json:"regularMarketDayHigh"`
		RegularMarketDayRange    string    `json:"regularMarketDayRange"`
		RegularMarketDayLow      float64   `json:"regularMarketDayLow"`
		RegularMarketVolume      int       `json:"regularMarketVolume"`
		RegularMarketPreviousClose float64   `json:"regularMarketPreviousClose"`
		RegularMarketOpen        float64   `json:"regularMarketOpen"`
		FiftyTwoWeekRange        string    `json:"fiftyTwoWeekRange"`
		FiftyTwoWeekLow          float64   `json:"fiftyTwoWeekLow"`
		FiftyTwoWeekHigh         float64   `json:"fiftyTwoWeekHigh"`
		Symbol                   string    `json:"symbol"`
		PriceEarnings            float64   `json:"priceEarnings"`
		EarningsPerShare         float64   `json:"earningsPerShare"`
		LogoURL                  string    `json:"logourl"`
	} `json:"results"`
	RequestedAt time.Time `json:"requestedAt"`
	Took        string    `json:"took"`
}

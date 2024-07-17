package services

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"ticker-trick-backend/src/models"
)

func GetStockData(ticker string) (*models.StockData, error) {
	token := os.Getenv("TOKEN")
	env := os.Getenv("ENVIRONMENT")

	var baseUrl string

	if env == "PRD" {
		baseUrl = "https://brapi.dev/"
	} else {
		baseUrl = "http://localhost:3005/"
	}

	url := fmt.Sprintf("%s/api/quote/%s", baseUrl, ticker)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("Error creating request: %v", err)
	}

	req.Header.Add("Authorization", "Bearer "+token)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("Error making request: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("Received non-OK response: %s", resp.Status)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("Error reading response: %v", err)
	}

	var stockData models.StockData
	err = json.Unmarshal(body, &stockData)
	if err != nil {
		return nil, fmt.Errorf("Error unmarshalling response: %v", err)
	}

	return &stockData, nil
}

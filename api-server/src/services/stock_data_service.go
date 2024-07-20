package services

import (
	"api-server/src/models"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func GetStockData(ticker string) (*models.StockData, error) {
	token := os.Getenv("TOKEN")
	env := os.Getenv("ENVIRONMENT")
	
	var baseUrl string
	if env == "PRD" {
		baseUrl = os.Getenv("PRD_DATASET_URL")
	} else {
		baseUrl = os.Getenv("DEV_DATASET_URL")
	}

	url := fmt.Sprintf("%s/api/quote/%s", baseUrl, ticker)
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %v", err)
	}

	req.Header.Add("Authorization", "Bearer "+token)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error making request: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("received non-OK response: %s", resp.Status)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("error reading response: %v", err)
	}

	var stockData models.StockData
	err = json.Unmarshal(body, &stockData)
	if err != nil {
		return nil, fmt.Errorf("error unmarshalling response: %v", err)
	}

	return &stockData, nil
}

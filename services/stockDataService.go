package services

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)


func GetStockData(ticker string) {
 	token := os.Getenv("TOKEN")
    env := os.Getenv("ENVIROMENT")

	var baseUrl string

	if env == "PRD" {
		baseUrl = "https://brapi.dev/"
	} else {
		baseUrl = "http://localhost:3005/"
	}

	url := fmt.Sprintf("%s/api/quote/%s", baseUrl, ticker)
    req, _ := http.NewRequest("GET", url, nil)

    req.Header.Add("Authorization", "Bearer "+token)

    client := &http.Client{}
    resp, _ := client.Do(req)

    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Printf("Error reading response: %v\n", err)
        return
    }

    fmt.Println(string(body))
}

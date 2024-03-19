package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
)

type Flags struct {
  PNG string `json:"png"`
  SVG string `json:"svg"`
}

type Country struct {
  Code string `json:"cca3"`
  Flags Flags `json:"flags"`
}

func main() {
  const url string = "https://restcountries.com/v3.1/all?fields=cca3,flags"
  response, err := http.Get(url)
  if err != nil {
		fmt.Printf("error making http request: %s\n", err)
		os.Exit(1)
	}
  defer response.Body.Close()

  var decoder = json.NewDecoder(response.Body)
  var countries []Country
  err = decoder.Decode(&countries)

  for index, country := range countries {
    fmt.Printf("---- %d ----\n", index);
    fmt.Println(country.Code)
    fmt.Println(country.Flags.SVG)
    var file string = fmt.Sprintf("./icons/flags/%s.svg", strings.ToLower(country.Code))
    DownloadFile(file, country.Flags.SVG)
  }
}

func DownloadFile(filepath string, url string) error {
	// Get the data
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	// Create the file
	out, err := os.Create(filepath)
	if err != nil {
		return err
	}
	defer out.Close()

	// Write the body to file
	_, err = io.Copy(out, resp.Body)
	return err
}

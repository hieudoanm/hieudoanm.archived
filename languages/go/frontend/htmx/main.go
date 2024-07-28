package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"
	"sort"

	"github.com/gin-gonic/gin"
)

func main() {
	engine := gin.Default()

	engine.Static("/public", "./public")
	engine.StaticFile("/favicon.ico", "./public/favicon.ico")

	engine.LoadHTMLGlob("templates/*")

	engine.GET("/", func(context *gin.Context) {
		var countries = ReadCountries()

		context.HTML(200, "index.html", gin.H{
			"Title":     "Countries",
			"Countries": countries,
		})
	})

	engine.GET("/health", func(context *gin.Context) {
		context.JSON(http.StatusOK, gin.H{
			"status": "OK",
		})
	})

	engine.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

type Name struct {
	Common   string `json:"common"`
	Official string `json:"official"`
}

type Flags struct {
	PNG string `json:"png"`
	SVG string `json:"svg"`
}

type Country struct {
	Name               Name     `json:"name"`
	Cca2               string   `json:"cca2"`
	Cca3               string   `json:"cca3"`
	Region             string   `json:"region"`
	Subregion          string   `json:"subregion"`
	Flag               string   `json:"flag"`
	Flags              Flags    `json:"flags"`
	Capital            []string `json:"capital"`
	Landlocked         bool     `json:"landlocked"`
	UnitedNationMember bool     `json:"unMember"`
	Area               float64  `json:"area"`
	Population         int64    `json:"population"`
}

// func GetCountries() []Country {
// 	var url = "https://restcountries.com/v3.1/all"
// 	response, err := http.Get(url)

// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	responseBody, err := io.ReadAll(response.Body)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	var countries []Country
// 	json.Unmarshal(responseBody, &countries)

// 	return countries
// }

func ReadCountries() []Country {
	jsonFile, err := os.Open("data/countries.json")
	if err != nil {
		log.Fatal(err)
	}
	defer jsonFile.Close()
	byteValue, _ := io.ReadAll(jsonFile)
	var countries []Country
	json.Unmarshal(byteValue, &countries)
	sort.Slice(countries[:], func(i, j int) bool {
		return countries[i].Name.Common < countries[j].Name.Common
	})

	return countries
}

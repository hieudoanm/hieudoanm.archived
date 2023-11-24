// Package cmd ...
package cmd

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/briandowns/spinner"
	constants "github.com/hieudoanm/cli/constants"
	libs "github.com/hieudoanm/cli/libs"
	"github.com/spf13/cobra"
)

// countriesListCmd represents the countries command
var countriesListCmd = &cobra.Command{
	Use:   "list",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		code, _ := cmd.Flags().GetString("code")
		query, _ := cmd.Flags().GetString("query")
		if code != "" {
			GetCountry(code)
		} else if query != "" {
			GetCountries(query)
		}
	},
}

func init() {
	rootCmd.AddCommand(countriesListCmd)
	countriesListCmd.PersistentFlags().String("code", "", "Country - Code")
	countriesListCmd.PersistentFlags().String("query", "", "Country - Search Query")

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// countriesListCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// countriesListCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}

// Country ...
type Country struct {
	Code         string   `json:"code"`
	CommonName   string   `json:"commonName"`
	OfficialName string   `json:"officialName"`
	Cca2         string   `json:"cca2"`
	Cca3         string   `json:"cca3"`
	Fifa         string   `json:"fifa"`
	Flag         string   `json:"flag"`
	Region       string   `json:"region"`
	Subregion    string   `json:"subregion"`
	Capital      []string `json:"capital"`
}

// GetCountry ...
func GetCountry(code string) {
	if code != "" {
		log.Fatalln("Missing Country Code")
	}

	s := spinner.New(spinner.CharSets[9], 100*time.Millisecond)
	s.Suffix = " : Fetching"
	s.Start()
	var country Country = GetCountryByCode(code)
	s.Stop()

	fmt.Printf("Common Name:                %s\n", string(country.CommonName))
	fmt.Printf("Official Name:              %s\n", string(country.OfficialName))
	fmt.Printf("CCA2 (ISO 3166-1 alpha-2):  %s\n", string(country.Cca2))
	fmt.Printf("CCA3 (ISO 3166-1 alpha-3):  %s\n", string(country.Cca3))
	fmt.Printf("FIFA:                       %s\n", string(country.Fifa))
	fmt.Printf("Region:                     %s\n", string(country.Region))
	fmt.Printf("Subregion:                  %s\n", string(country.Subregion))
	fmt.Printf("Capital:                    %s\n", string(strings.Join(country.Capital, ", ")))

}

// GetCountryByCode ...
func GetCountryByCode(code string) Country {
	var url string = fmt.Sprintf("%s/countries/%s", constants.CountriesAPI, code)
	bytes := libs.GetRequest(url)
	country := Country{}
	if unmarshalError := json.Unmarshal(bytes, &country); unmarshalError != nil {
		log.Printf("GetCountryByCode url=%s", url)
		log.Fatalf("GetCountryByCode unmarshalError=%v", unmarshalError)
	}
	return country
}

// SearchResponse ...
type SearchResponse struct {
	Total     int64     `json:"total"`
	Countries []Country `json:"countries"`
}

// GetCountries ...
func GetCountries(query string) {
	s := spinner.New(spinner.CharSets[9], 100*time.Millisecond)
	s.Suffix = " : Searching"
	s.Start()
	var searchResponse = SearchCountries(query)
	s.Stop()

	fmt.Printf("Number of Countries: %d\n", searchResponse.Total)
	for _, country := range searchResponse.Countries {
		fmt.Println("=========================")
		fmt.Printf("Common Name:                %s\n", string(country.CommonName))
		fmt.Printf("Official Name:              %s\n", string(country.OfficialName))
		fmt.Printf("CCA2 (ISO 3166-1 alpha-2):  %s\n", string(country.Cca2))
		fmt.Printf("CCA3 (ISO 3166-1 alpha-3):  %s\n", string(country.Cca3))
		fmt.Printf("FIFA:                       %s\n", string(country.Fifa))
		fmt.Printf("Region:                     %s\n", string(country.Region))
		fmt.Printf("Subregion:                  %s\n", string(country.Subregion))
		fmt.Printf("Capital:                    %s\n", string(strings.Join(country.Capital, ", ")))
	}
}

// SearchCountries ...
func SearchCountries(query string) SearchResponse {
	var url string = fmt.Sprintf("%s/countries/search", constants.CountriesAPI)
	requestBody := []byte(fmt.Sprintf(`{"query": "%s"}`, query))
	var requestBodyBytes *bytes.Buffer = bytes.NewBuffer(requestBody)
	var responseBytes []byte = libs.PostRequest(url, requestBodyBytes)
	searchResponse := SearchResponse{}
	if unmarshalError := json.Unmarshal(responseBytes, &searchResponse); unmarshalError != nil {
		log.Printf("searchCountries url=%s", url)
		log.Fatalf("searchCountries unmarshalError=%v", unmarshalError)
	}
	return searchResponse
}

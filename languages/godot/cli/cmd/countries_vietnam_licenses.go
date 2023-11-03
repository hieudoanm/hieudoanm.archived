// Package cmd ...
package cmd

import (
	"encoding/json"
	"fmt"
	"log"
	"time"

	"github.com/briandowns/spinner"
	constants "github.com/hieudoanm/cli/constants"
	libs "github.com/hieudoanm/cli/libs"
	"github.com/spf13/cobra"
)

// countriesVietnamLicensesCmd represents the licenses command
var countriesVietnamLicensesCmd = &cobra.Command{
	Use:   "licenses",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		code, _ := cmd.Flags().GetString("code")
		SearchLicense(code)
	},
}

func init() {
	countriesVietnamCmd.AddCommand(countriesVietnamLicensesCmd)
	countriesVietnamLicensesCmd.PersistentFlags().String("code", "", "License - Code")

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// countriesVietnamLicensesCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// countriesVietnamLicensesCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}

// License ...
type License struct {
	Code        string `json:"code"`
	Type        string `json:"type"`
	Description string `json:"description"`
}

// SearchLicense ...
func SearchLicense(code string) {
	s := spinner.New(spinner.CharSets[9], 100*time.Millisecond)
	s.Suffix = " : Searching"
	s.Start()
	var license License = GetLicense(code)
	s.Stop()
	if license.Code == "" {
		log.Fatalln("License Not Found")
	}
	fmt.Printf("Code:        %s\n", license.Code)
	fmt.Printf("Type:        %s\n", license.Type)
	fmt.Printf("Description: %s\n", license.Description)
}

// GetLicense ...
func GetLicense(code string) License {
	var url string = fmt.Sprintf("%s/licenses/%s", constants.VietnamAPI, code)
	var responseBytes []byte = libs.GetRequest(url)
	license := License{}
	if unmarshalError := json.Unmarshal(responseBytes, &license); unmarshalError != nil {
		log.Printf("searchCountries url=%s", url)
		log.Fatalf("searchCountries unmarshalError=%v", unmarshalError)
	}
	return license
}

// Package cmd ...
package cmd

import (
	"encoding/json"
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/briandowns/spinner"
	constants "github.com/hieudoanm/cli/constants"
	libs "github.com/hieudoanm/cli/libs"
	models "github.com/hieudoanm/cli/models"
	"github.com/spf13/cobra"
)

// listCmd represents the list command
var listCmd = &cobra.Command{
	Use:   "list",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		ListLicenses()
	},
}

func init() {
	githubLicensesCmd.AddCommand(listCmd)
}

// ListResponse ...
type ListResponse struct {
	Total    int64                  `json:"total"`
	Licenses []models.GitHubLicense `json:"licenses"`
}

// GetMaxKeyLength ...
func GetMaxKeyLength(licenses []models.GitHubLicense) int {
	var max int = 0
	for _, license := range licenses {
		var length int = len(license.Key)
		if length > max {
			max = length
		}
	}
	return max
}

// ListLicenses ...
func ListLicenses() {
	s := spinner.New(spinner.CharSets[9], 100*time.Millisecond)
	s.Suffix = " : Fetching Licenses"
	s.Start()
	var licenses []models.GitHubLicense = GetLicenses()
	s.Stop()
	var maxLength int = GetMaxKeyLength(licenses)
	for _, license := range licenses {
		var numberOfSpaces = maxLength - len(license.Key)
		var spaces string = strings.Repeat(" ", numberOfSpaces)
		fmt.Printf("%s%s : %s\n", license.Key, spaces, license.Name)
	}
}

// GetLicenses ...
func GetLicenses() []models.GitHubLicense {
	var url string = fmt.Sprintf("%s/licenses", constants.GitHubAPI)
	bytes := libs.GetRequest(url)
	licensesResponse := ListResponse{}
	if unmarshalError := json.Unmarshal(bytes, &licensesResponse); unmarshalError != nil {
		log.Printf("GetLicenses url=%s", url)
		log.Fatalf("GetLicenses unmarshalError=%v", unmarshalError)
	}
	return licensesResponse.Licenses
}

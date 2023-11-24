// Package cmd ...
package cmd

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/briandowns/spinner"
	constants "github.com/hieudoanm/cli/constants"
	libs "github.com/hieudoanm/cli/libs"
	models "github.com/hieudoanm/cli/models"
	"github.com/spf13/cobra"
)

// initCmd represents the list command
var initCmd = &cobra.Command{
	Use:   "init",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		key, _ := cmd.Flags().GetString("key")
		CreateNewLicense(key)
	},
}

func init() {
	githubLicensesCmd.AddCommand(initCmd)

	initCmd.PersistentFlags().String("key", "", "Key")
	initCmd.MarkPersistentFlagRequired("key")
}

// CreateNewLicense ...
func CreateNewLicense(key string) {
	s := spinner.New(spinner.CharSets[9], 100*time.Millisecond)
	s.Suffix = " : Creating"
	s.Start()
	var license models.GitHubLicense = GetGitHubLicense(key)
	s.Stop()
	svgBytes := []byte(license.Body)
	err := os.WriteFile("LICENSE", svgBytes, 0644)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("LICENSE is created successfully")
}

// GetLicense ...
func GetGitHubLicense(key string) models.GitHubLicense {
	var url string = fmt.Sprintf("%s/licenses/%s", constants.GitHubAPI, key)
	bytes := libs.GetRequest(url)
	license := models.GitHubLicense{}
	if unmarshalError := json.Unmarshal(bytes, &license); unmarshalError != nil {
		log.Printf("GetLicenses url=%s", url)
		log.Fatalf("GetLicenses unmarshalError=%v", unmarshalError)
	}
	return license
}

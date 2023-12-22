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

// sportsFootballCompetitionsCmd represents the footballCompetitions command
var sportsFootballCompetitionsCmd = &cobra.Command{
	Use:   "competitions",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		ListCompetitions()
	},
}

func init() {
	sportsFootballCmd.AddCommand(sportsFootballCompetitionsCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// sportsFootballCompetitionsCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// sportsFootballCompetitionsCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}

// CompetitionsListResponse ...
type CompetitionsListResponse struct {
	Total        int64                `json:"total"`
	Competitions []models.Competition `json:"competitions"`
}

// GetMaxCompetitionCodeLength ...
func GetMaxCompetitionCodeLength(competitions []models.Competition) int {
	var max int = 0
	for _, competition := range competitions {
		var length int = len(competition.Code)
		if length > max {
			max = length
		}
	}
	return max
}

// ListCompetitions ...
func ListCompetitions() {
	s := spinner.New(spinner.CharSets[9], 100*time.Millisecond)
	s.Suffix = " : Fetching Competitions"
	s.Start()
	var competitions []models.Competition = GetCompetitions()
	s.Stop()
	var maxLength int = GetMaxCompetitionCodeLength(competitions)
	for _, competition := range competitions {
		var numberOfSpaces = maxLength - len(competition.Code)
		var spaces string = strings.Repeat(" ", numberOfSpaces)
		fmt.Printf("%s%s : %s\n", competition.Code, spaces, competition.Name)
	}
}

// GetCompetitions ...
func GetCompetitions() []models.Competition {
	var url string = fmt.Sprintf("%s/football/competitions?plan=TIER_ONE", constants.SportsAPI)
	bytes := libs.GetRequest(url)
	competitionsResponse := CompetitionsListResponse{}
	if unmarshalError := json.Unmarshal(bytes, &competitionsResponse); unmarshalError != nil {
		log.Printf("GetLicenses url=%s", url)
		log.Fatalf("GetLicenses unmarshalError=%v", unmarshalError)
	}
	return competitionsResponse.Competitions
}

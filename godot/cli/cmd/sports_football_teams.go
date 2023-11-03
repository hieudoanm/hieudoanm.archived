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
	"github.com/spf13/cobra"
)

// sportsFootballTeamsCmd represents the footballTeams command
var sportsFootballTeamsCmd = &cobra.Command{
	Use:   "teams",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		competition, _ := cmd.Flags().GetString("competition")
		ListTeams(competition)
	},
}

func init() {
	sportsFootballCmd.AddCommand(sportsFootballTeamsCmd)

	sportsFootballTeamsCmd.PersistentFlags().String("competition", "", "Competition")
	sportsFootballTeamsCmd.MarkPersistentFlagRequired("competition")

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// sportsFootballTeamsCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// sportsFootballTeamsCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}

// TeamsListResponse ...
type TeamsListResponse struct {
	Total int64  `json:"total"`
	Teams []Team `json:"teams"`
}

// Team ...
type Team struct {
	ID        int    `json:"id"`
	Code      string `json:"tla"`
	Name      string `json:"name"`
	ShortName string `json:"shortName"`
}

// GetMaxTeamCodeLength ...
func GetMaxTeamCodeLength(teams []Team) int {
	var max int = 0
	for _, team := range teams {
		var length int = len(team.Code)
		if length > max {
			max = length
		}
	}
	return max
}

// ListTeams ...
func ListTeams(competition string) {
	s := spinner.New(spinner.CharSets[9], 100*time.Millisecond)
	s.Suffix = " : Fetching Teams"
	s.Start()
	var teams []Team = GetCompetitionsTeams(competition)
	s.Stop()
	var maxLength int = GetMaxTeamCodeLength(teams)
	for _, team := range teams {
		var numberOfSpaces = maxLength - len(team.Code)
		var spaces string = strings.Repeat(" ", numberOfSpaces)
		fmt.Printf("%s%s : %s (%d)\n", team.Code, spaces, team.Name, team.ID)
	}
}

// GetCompetitionsTeams ...
func GetCompetitionsTeams(competition string) []Team {
	var url string = fmt.Sprintf("%s/football/competitions/%s/teams", constants.SportsAPI, competition)
	bytes := libs.GetRequest(url)
	teamsResponse := TeamsListResponse{}
	if unmarshalError := json.Unmarshal(bytes, &teamsResponse); unmarshalError != nil {
		log.Printf("GetCompetitionsTeams url=%s", url)
		log.Fatalf("GetCompetitionsTeams unmarshalError=%v", unmarshalError)
	}
	return teamsResponse.Teams
}

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

// sportsFootballMatchesCmd represents the footballMatches command
var sportsFootballMatchesCmd = &cobra.Command{
	Use:   "matches",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		team, _ := cmd.Flags().GetString("team")
		ListMatches(team)
	},
}

func init() {
	sportsFootballCmd.AddCommand(sportsFootballMatchesCmd)

	sportsFootballMatchesCmd.PersistentFlags().String("team", "", "Team")
	sportsFootballMatchesCmd.MarkPersistentFlagRequired("team")

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// footballTeamsCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// footballTeamsCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}

// MatchesListResponse ...
type MatchesListResponse struct {
	Total   int64   `json:"total"`
	Matches []Match `json:"matches"`
}

// HomeAway ...
type HomeAway struct {
	Home int `json:"home"`
	Away int `json:"away"`
}

// Score ...
type Score struct {
	Halftime HomeAway `json:"halfTime"`
	Fulltime HomeAway `json:"fullTime"`
}

// Match ...
type Match struct {
	ID          int                `json:"id"`
	DateTime    string             `json:"utcDate"`
	Status      string             `json:"status"`
	Score       Score              `json:"score"`
	Competition models.Competition `json:"competition"`
	HomeTeam    models.Team        `json:"homeTeam"`
	AwayTeam    models.Team        `json:"awayTeam"`
}

// GetMaxHomeTeamNameLength ...
func GetMaxHomeTeamNameLength(matches []Match) int {
	var max int = 0
	for _, match := range matches {
		var length int = len(match.HomeTeam.Name)
		if length > max {
			max = length
		}
	}
	return max
}

// GetMaxAwayTeamNameLength ...
func GetMaxAwayTeamNameLength(matches []Match) int {
	var max int = 0
	for _, match := range matches {
		var length int = len(match.AwayTeam.Name)
		if length > max {
			max = length
		}
	}
	return max
}

// GetMaxStatusLength ...
func GetMaxStatusLength(matches []Match) int {
	var max int = 0
	for _, match := range matches {
		var length int = len(match.Status)
		if length > max {
			max = length
		}
	}
	return max
}

// ListMatches ...
func ListMatches(team string) {
	s := spinner.New(spinner.CharSets[9], 100*time.Millisecond)
	s.Suffix = " : Fetching Matches"
	s.Start()
	var matches []Match = GetTeamMatches(team)
	s.Stop()
	var maxHomeTeamNameLength int = GetMaxHomeTeamNameLength(matches)
	var maxAwayTeamNameLength int = GetMaxAwayTeamNameLength(matches)
	var maxStatusLength int = GetMaxStatusLength(matches)
	for _, match := range matches {
		var dateTime []string = strings.Split(match.DateTime, "T")
		var date string = dateTime[0]
		var time string = dateTime[1]
		// Home Team
		var homeNameNumberOfSpaces = maxHomeTeamNameLength - len(match.HomeTeam.Name)
		var homeNameSpaces string = strings.Repeat(" ", homeNameNumberOfSpaces)
		// Away Team
		var awayTeamNameNumberOfSpaces = maxAwayTeamNameLength - len(match.AwayTeam.Name)
		var awayTeamNameSpaces string = strings.Repeat(" ", awayTeamNameNumberOfSpaces)
		// Status
		var statusNumberOfSpaces = maxStatusLength - len(match.Status)
		var statusSpaces string = strings.Repeat(" ", statusNumberOfSpaces)
		fmt.Printf("| %s | %s | %s | %s%s | %d | %d | %s%s | %s%s |\n",
			match.Competition.Name,
			date,
			time,
			homeNameSpaces,
			match.HomeTeam.Name,
			match.Score.Fulltime.Home,
			match.Score.Fulltime.Away,
			match.AwayTeam.Name,
			awayTeamNameSpaces,
			match.Status,
			statusSpaces,
		)
	}
}

// GetTeamMatches ...
func GetTeamMatches(team string) []Match {
	var url string = fmt.Sprintf("%s/football/teams/%s/matches", constants.SportsAPI, team)
	bytes := libs.GetRequest(url)
	matchesResponse := MatchesListResponse{}
	if unmarshalError := json.Unmarshal(bytes, &matchesResponse); unmarshalError != nil {
		log.Printf("GetTeamMatches url=%s", url)
		log.Fatalf("GetTeamMatches unmarshalError=%v", unmarshalError)
	}
	return matchesResponse.Matches
}

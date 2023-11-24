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

// countriesUsaStatesCmd represents the states command
var countriesUsaStatesCmd = &cobra.Command{
	Use:   "states",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		abbr, _ := cmd.Flags().GetString("abbr")
		GetState(abbr)
	},
}

func init() {
	countriesUsaCmd.AddCommand(countriesUsaStatesCmd)
	countriesUsaStatesCmd.PersistentFlags().String("abbr", "", "State Abbreviation")

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// countriesUsaStatesCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// countriesUsaStatesCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}

// State ...
type State struct {
	Abbreviation string `json:"abbreviation"`
	Name         string `json:"name"`
	Capital      string `json:"capital"`
	Largest      string `json:"largest"`
	Region       string `json:"region"`
	Subregion    string `json:"subregion"`
	Level        string `json:"level"`
	Year         int64  `json:"year"`
	Month        int64  `json:"month"`
	Date         int64  `json:"date"`
}

// GetState ...
func GetState(abbr string) {
	if abbr == "" {
		log.Fatalln("Missing State Abbreviation")
	}

	s := spinner.New(spinner.CharSets[9], 100*time.Millisecond)
	s.Suffix = " : Fetching State"
	s.Start()
	var state State = GetStateByAbbr(abbr)
	s.Stop()

	var date string = fmt.Sprintf(
		"%s-%s-%s",
		libs.AddZero(state.Year),
		libs.AddZero(state.Month),
		libs.AddZero(state.Date),
	)
	fmt.Printf("Abbreviation: %s\n", state.Abbreviation)
	fmt.Printf("Name:         %s\n", state.Name)
	fmt.Printf("Capital:      %s\n", state.Capital)
	fmt.Printf("Largest:      %s\n", state.Largest)
	fmt.Printf("Region:       %s\n", state.Region)
	fmt.Printf("Subregion:    %s\n", state.Subregion)
	fmt.Printf("Level:        %s\n", state.Level)
	fmt.Printf("Date:         %s\n", date)
}

// GetStateByAbbr ...
func GetStateByAbbr(abbr string) State {
	var url string = fmt.Sprintf("%s/states/%s", constants.UsaAPI, abbr)
	bytes := libs.GetRequest(url)
	state := State{}
	if unmarshalError := json.Unmarshal(bytes, &state); unmarshalError != nil {
		log.Printf("GetStateByAbbr url=%s", url)
		log.Fatalf("GetStateByAbbr unmarshalError=%v", unmarshalError)
	}
	return state
}

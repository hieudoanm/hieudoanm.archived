/*
Copyright © 2023 NAME HERE <EMAIL ADDRESS>
*/
package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// colorsRgbCmd represents the colorsRgb command
var colorsRgbCmd = &cobra.Command{
	Use:   "rgb",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		red, _ := cmd.Flags().GetString("red")
		blue, _ := cmd.Flags().GetString("blue")
		green, _ := cmd.Flags().GetString("green")
		var hex string = fmt.Sprintf("#%02x%02x%02x", red, green, blue)
		var result string = fmt.Sprintf("#%s = rgb(%s, %s, %s)", hex, red, green, blue)
		fmt.Println(result)
	},
}

func init() {
	colorsCmd.AddCommand(colorsRgbCmd)

	colorsRgbCmd.Flags().String("red", "", "Red")
	colorsRgbCmd.MarkPersistentFlagRequired("red")

	colorsRgbCmd.Flags().String("green", "", "Green")
	colorsRgbCmd.MarkPersistentFlagRequired("green")

	colorsRgbCmd.Flags().String("blue", "", "Blue")
	colorsRgbCmd.MarkPersistentFlagRequired("blue")
	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// colorsRgbCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// colorsRgbCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}

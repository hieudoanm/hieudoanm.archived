/*
Copyright © 2023 NAME HERE <EMAIL ADDRESS>
*/
package cmd

import (
	"fmt"
	"log"
	"strconv"

	"github.com/spf13/cobra"
)

// colorsHexCmd represents the colorsHex command
var colorsHexCmd = &cobra.Command{
	Use:   "hex",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		hexCode, hexError := cmd.Flags().GetString("hex")
		if hexError != nil {
			log.Fatalln(hexError)
		}
		var hex Hex = Hex(hexCode)
		// Usage:
		rgb, rgbError := hex.toRGB()
		if rgbError != nil {
			panic("Couldn't convert hex to rgb")
		}
		var result string = fmt.Sprintf("#%s = rgb(%d, %d, %d)", hex, rgb.Red, rgb.Green, rgb.Blue)
		fmt.Println(result)
	},
}

func init() {
	colorsCmd.AddCommand(colorsHexCmd)

	colorsHexCmd.Flags().String("hex", "", "HEX Color")
	colorsHexCmd.MarkPersistentFlagRequired("hex")

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// colorsHexCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// colorsHexCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}

type Hex string

type RGB struct {
	Red   uint8
	Green uint8
	Blue  uint8
}

func (h Hex) toRGB() (RGB, error) {
	return HexToRGB(h)
}

func HexToRGB(hex Hex) (RGB, error) {
	var rgb RGB
	values, err := strconv.ParseUint(string(hex), 16, 32)

	if err != nil {
		return RGB{}, err
	}

	rgb = RGB{
		Red:   uint8(values >> 16),
		Green: uint8((values >> 8) & 0xFF),
		Blue:  uint8(values & 0xFF),
	}

	return rgb, nil
}

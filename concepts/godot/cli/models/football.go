// Package models ...
package models

// Competition ...
type Competition struct {
	ID   int    `json:"id"`
	Code string `json:"code"`
	Name string `json:"name"`
	Type string `json:"type"`
	Plan string `json:"plan"`
}

// Team ...
type Team struct {
	ID        int    `json:"id"`
	Code      string `json:"tla"`
	Name      string `json:"name"`
	ShortName string `json:"shortName"`
}

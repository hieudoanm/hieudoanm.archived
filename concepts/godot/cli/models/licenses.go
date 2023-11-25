// Package models ...
package models

// GitHubLicense ...
type GitHubLicense struct {
	Key            string   `json:"key"`
	Name           string   `json:"name"`
	NodeID         string   `json:"url"`
	SpdxID         string   `json:"spdxId"`
	HTMLURL        string   `json:"htmlUrl"`
	Description    string   `json:"description"`
	Implementation string   `json:"implementation"`
	Permissions    []string `json:"permissions"`
	Conditions     []string `json:"conditions"`
	Limitations    []string `json:"limitations"`
	Body           string   `json:"body"`
	Featured       bool     `json:"featured"`
}

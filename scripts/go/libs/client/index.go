package client

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
)

type Repo struct {
	Id           int64  `json:"id"`
	Name         string `json:"name"`
	FullName     string `json:"full_name"`
	HtmlUrl      string `json:"html_url"`
	LanguagesUrl string `json:"languages_url"`
	Private      bool   `json:"private"`
}

func GetRepos() ([]Repo, error) {
	var url string = "https://api.github.com/users/hieudoanm/repos"

	response, httpGetError := http.Get(url)
	if httpGetError != nil {
		return nil, httpGetError
	}
	defer response.Body.Close()

	body, readBodyError := io.ReadAll(response.Body)
	if readBodyError != nil {
		return nil, readBodyError
	}

	// Parse JSON
	var repos []Repo
	jsonUnmarshalError := json.Unmarshal(body, &repos)
	if jsonUnmarshalError != nil {
		log.Println("Fail to GetRepos")
	}

	return repos, nil
}

func GetLanguages(repoName string) ([]byte, error) {
	var url = "https://api.github.com/repos/" + repoName + "/languages"

	response, httpGetError := http.Get(url)
	if httpGetError != nil {
		return nil, httpGetError
	}
	defer response.Body.Close()

	body, readBodyError := io.ReadAll(response.Body)
	if readBodyError != nil {
		return nil, readBodyError
	}

	return body, nil
}

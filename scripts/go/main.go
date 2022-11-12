package main

import (
	"log"
	"strconv"

	client "github/libs/client"
)

func Main() {
	repos, reposError := client.GetRepos()
	if reposError != nil {
		log.Fatalln(reposError)
	}

	var languages map[string]string = map[string]string{}
	var total = 0
	var projects []string = []string{}

	for index, repo := range repos {
		log.Println(repo, index)
		var name string = repo.Name
		var full_name string = repo.FullName
		var html_url string = repo.HtmlUrl
		var languages_url string = repo.LanguagesUrl
		log.Println(full_name)
		var project string = strconv.Itoa(index+1) + ". [" + name + "](" + html_url + ")"
		log.Println(project)
		projects = append(projects, project)
		// languages_in_repo = _.get_languages(full_name)
		// language_keys = list(languages_in_repo.keys())
		// for language_key in language_keys:
		//     if language_key not in languages:
		//         languages[language_key] = languages_in_repo[language_key]
		//     else:
		//         languages[language_key] += languages_in_repo[language_key]
		//     TOTAL += int(languages_in_repo[language_key])
	}
}

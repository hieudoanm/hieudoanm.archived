package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type Template struct {
  Name string `json:"name"`
  Source string `json:"source"`
}

func main() {
  const url string = "https://api.github.com/gitignore/templates"
  response, err := http.Get(url)
  if err != nil {
		fmt.Printf("error making http request: %s\n", err)
		os.Exit(1)
	}
  defer response.Body.Close()

  var decoder = json.NewDecoder(response.Body)
  var templates []string
  err = decoder.Decode(&templates)

  for index, templateName := range templates {
    fmt.Printf("%d + %s\n", index, templateName)
    response, err := http.Get(fmt.Sprintf("%s/%s", url, templateName))
    if err != nil {
		  fmt.Printf("error making http request: %s\n", err)
		  os.Exit(1)
  	}
    defer response.Body.Close()

    var decoder = json.NewDecoder(response.Body)
    var template Template
    err = decoder.Decode(&template)

    WriteFile(fmt.Sprintf("./templates/%s.gitignore", template.Name), template.Source)
  }
}

func WriteFile(file string, content string) {
  f, err := os.Create(file)
	if err != nil {
		fmt.Println(err)
		return
	}

	l, err := f.WriteString(content)
	if err != nil {
		fmt.Println(err)
    f.Close()
		return
	}

	fmt.Println(l, "bytes written successfully")

  err = f.Close()
	if err != nil {
		fmt.Println(err)
		return
	}
}

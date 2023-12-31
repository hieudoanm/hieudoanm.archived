package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type CodesOfConduct struct {
  Key string `json:"key"`
  Name string `json:"name"`
  Body string `json:"body"`
}

func main() {
  const url string = "https://api.github.com/codes_of_conduct"
  response, err := http.Get(url)
  if err != nil {
		fmt.Printf("error making http request: %s\n", err)
		os.Exit(1)
	}
  defer response.Body.Close()

  var decoder = json.NewDecoder(response.Body)
  var files []CodesOfConduct
  err = decoder.Decode(&files)

  for index, file := range files {
    fmt.Printf("%d + %s\n", index, file)
    response, err := http.Get(fmt.Sprintf("%s/%s", url, file.Key))
    if err != nil {
		  fmt.Printf("error making http request: %s\n", err)
		  os.Exit(1)
  	}
    defer response.Body.Close()

    var decoder = json.NewDecoder(response.Body)
    var file CodesOfConduct
    err = decoder.Decode(&file)

    WriteFile(fmt.Sprintf("./docs/%s.md", file.Key), file.Body)
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

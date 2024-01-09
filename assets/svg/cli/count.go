package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
)

func main() {
  const rawGitHub = "https://raw.githubusercontent.com/hieudoanm/hieudoanm/master/assets/svg"
  var paths []string = []string{};
  err := filepath.Walk("../icons", func(path string, info os.FileInfo, err error) error {
  	if err != nil {
		  return err
	  }
  	fmt.Println(path, info.Size())
    paths = append(paths, path)
	  return nil
  })
  if err != nil {
	  log.Println(err)
  }
  fmt.Println(len(paths))
}

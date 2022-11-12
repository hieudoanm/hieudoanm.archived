package files

import (
	"fmt"
	"log"
	"os"
)

func ReadFile(filename string) string {
	buf, readFileError := os.ReadFile(filename)
	if readFileError != nil {
		log.Println(readFileError)
		return ""
	}
	s := string(buf)
	return s
}

func WriteFile(filename string, content string) {
	f, err := os.Create(filename)

	if err != nil {
		log.Fatal(err)
	}

	defer f.Close()

	_, err2 := f.WriteString(content)

	if err2 != nil {
		log.Fatal(err2)
	}

	fmt.Println("write to file")
}

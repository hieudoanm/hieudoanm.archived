format:
	go fmt

vet:
	go vet main.go

lint:
	find . -type d | xargs -L 1 golint

run:
	go run main.go

build:
	go fmt
	go vet main.go
	find . -type d | xargs -L 1 golint
	go build -o ./bin/main ./main.go

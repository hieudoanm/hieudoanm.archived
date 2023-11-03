build:
	go vet main.go
	gofmt -s -w .
	go build -o ./bin/minh

vet:
	go vet main.go

format:
	gofmt -s -w .

lint:
	find . -type d | xargs -L 1 golint

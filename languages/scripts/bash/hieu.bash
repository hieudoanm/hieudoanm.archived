#!/bin/bash

function self-help() {
  # Docker
  echo "docker-list"
  # Heroku
  echo "heroku-logs"
  echo "heroku-open"
  echo "heroku-restart"
  # Install
  echo "install-dotnet"
  echo "install-go"
  echo "install-jenkins"
  echo "install-nginx"
  echo "install-sdkman"
  echo "install-typescript"
  # Pip
  echo "pip-install"
  # Terraform
  echo "tf"
  echo "tf-init"
  echo "tf-apply"
  echo "tf-destroy"
  echo "tf-fmt"
  echo "tf-validate"
  echo "tf-show"
  echo "tf-state-list"
  echo "tf-output"
  # Update
  echo "update-apt"
  echo "update-brew"
  echo "update-yarn"
  echo "update-yum"
  # Utils
  echo "go-build"
  echo "kill-port"
}

alias self-version="echo 'NAM - 1.0.0'"

# Docker

alias docker-list="docker ps -a"

# Heroku

alias heroku-logs="heroku logs --tail --app "
alias heroku-open="heroku apps:open --app "
alias heroku-restart="heroku ps:restart web.1 --app "

# Install

function install-dotnet() {
  wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
  sudo dpkg -i packages-microsoft-prod.deb
  sudo apt-get update
  sudo apt-get install dotnet-sdk-5.0 -y
}

function install-go() {
  go get -v golang.org/x/tools/gopls
  go get -v github.com/uudashr/gopkgs/v2/cmd/gopkgs
  go get -v github.com/ramya-rao-a/go-outline
  go get -v github.com/cweill/gotests/gotests
  go get -v github.com/fatih/gomodifytags
  go get -v github.com/josharian/impl
  go get -v github.com/haya14busa/goplay/cmd/goplay
  go get -v github.com/go-delve/delve/cmd/dlv
  go get -v github.com/go-delve/delve/cmd/dlv@master
  go get -v honnef.co/go/tools/cmd/staticcheck
  go get -v golang.org/x/tools/gopls
}

function install-jenkins() {
  # Add the key to your system
  wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
  # Add a Jenkins apt repository entry
  sudo sh -c "echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list"
  # Update your local package index
  sudo apt-get update
  # Install Jenkins
  sudo apt-get install jenkins -y
}

function install-nginx() {
  if [$1 == "amazon"]; then
    install-terraform-amazon
  else
    install-terraform-ubuntu
  fi
}

function install-nginx-amazon() {
  sudo yum install epel-release
  sudo yum install nginx
}

function install-nginx-ubuntu() {
  sudo apt-get update
  sudo apt-get install nginx -y
  ps aux | grep nginx
}

function install-sdkman() {
  ## Download install script
  wget -O sdk.install.sh "https://get.sdkman.io"
  ## Run install script
  bash sdk.install.sh
  ## Set up PATH
  source ~/.sdkman/bin/sdkman-init.sh
}

function install-terraform() {
  if [$1 == "amazon"]; then
    install-terraform-amazon
  elif [$1 == "macox"]; then
    install-terraform-macox
  else
    install-terraform-ubuntu
  fi
}

function install-terraform-amazon() {
  # Install yum-config-manager to manage your repositories.
  sudo yum install -y yum-utils
  # Use yum-config-manager to add the official HashiCorp Linux repository.
  sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
  # Install
  sudo yum -y install terraform
  # Verify the installation
  terraform -v
}

function install-terraform-macox() {
  # First, install the HashiCorp tap, a repository of all our Homebrew packages.
  brew tap hashicorp/tap
  # Now, install Terraform with hashicorp/tap/terraform.
  brew install hashicorp/tap/terraform
  # To update to the latest version of Terraform, first update Homebrew.
  brew update
  # Then, run the upgrade command to download and use the latest Terraform version.
  brew upgrade hashicorp/tap/terraform
  # Verify the installation
  terraform -v
}

function install-terraform-ubuntu() {
  sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl
  # Add the HashiCorp GPG key.
  curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
  # Add the official HashiCorp Linux repository.
  sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
  # Update to add the repository, and install the Terraform CLI.
  sudo apt-get update && sudo apt-get install terraform
  # Verify the installation
  terraform -help
}

alias install-typescript="sudo npm install -g @types/node ts-node typescript"

# Pip

function pip-install() {
  python3.7 -m pip install $1 --no-cache-dir -r requirements.txt
}

# Terraform

alias tf="terraform"
alias tf-init="terraform init "
alias tf-apply="terraform apply "
alias tf-destroy="terraform destroy "
alias tf-fmt="terraform fmt "
alias tf-validate="terraform validate "
alias tf-show="terraform show "
alias tf-state-list="terraform state list "
alias tf-output="terraform output "

# Update

function update-apt() {
  sudo apt-get upgrade
  sudo apt-get update
  sudo apt autoremove
}

function update-brew() {
  brew upgrade
  brew update
  brew cleanup
}

function update-yarn() {
  yarn global upgrade --latest
  yarn global list
}

function update-yum() {
  yum update
  yum autoremove
}

# Util

function go-build() {
  go build -o $1
}

function kill-port() {
  sudo lsof -i tcp:$1
}

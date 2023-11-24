terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 1.0"
    }
  }
}

resource "vercel_project" "chess_api" {
  name      = "chessinsightsapi"
  framework = "other"
  git_repository = {
    type = "github"
    repo = "hieudoanm/hieudoanm"
  }
}

data "vercel_project_directory" "chess_api" {
  path = "projects/chess.com/api"
}

resource "vercel_deployment" "chess_api" {
  project_id  = vercel_project.chess_api.id
  files       = data.vercel_project_directory.chess_api.files
  path_prefix = "projects/chess.com/api"
  production  = true
}

resource "vercel_project_domain" "chess_api" {
  project_id = vercel_project.chess_api.id
  domain     = "chessinsightsapi.vercel.app"
}

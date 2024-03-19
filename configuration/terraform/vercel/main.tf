terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 1.0"
    }
  }
}

resource "vercel_project" "<project_id>" {
  name      = "<project_name>"
  framework = "<framework>"
  git_repository = {
    type = "<type>"
    repo = "<username>/<repository>"
  }
}

data "vercel_project_directory" "<project_id>" {
  path = "<project_path>"
}

resource "vercel_deployment" "<project_id>" {
  project_id  = vercel_project.project_id.id
  files       = data.vercel_project_directory.project_id.files
  path_prefix = "<project_path>"
  production  = true
}

resource "vercel_project_domain" "<project_id>" {
  project_id = vercel_project.project_id.id
  domain     = "<domain>"
}

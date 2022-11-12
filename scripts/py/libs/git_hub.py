"""
GitHub
"""
import requests


def get_repos():
    """
    Get Repositories
    """
    url = "https://api.github.com/users/hieudoanm/repos"
    response = requests.get(url, timeout=10)
    print(response)
    return response.json()


def get_languages(repo_name):
    """
    Get Languages
    """
    url = "https://api.github.com/repos/" + repo_name + "/languages"
    response = requests.get(url, timeout=10)
    print(response)
    return response.json()

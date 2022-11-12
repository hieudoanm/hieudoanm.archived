"""
Get Repositories
"""

import requests

response = requests.get(
    "https://api.github.com/users/hieudoanm/repos", timeout=10)

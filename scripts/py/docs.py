"""
Update README.md
"""

import libs as _


repos = _.get_repos()

languages = {}
TOTAL = 0

projects = []

for index, repo in enumerate(repos):
    print(repo, index)
    name = repo.get("name", "")
    full_name = repo.get("full_name", "")
    html_url = repo.get("html_url", "")
    languages_url = repo.get("languages_url", "")
    print(full_name)
    project = str(index + 1) + ". [" + name + "](" + html_url + ")"
    print(project)
    projects.append(project)
    languages_in_repo = _.get_languages(full_name)
    language_keys = list(languages_in_repo.keys())
    for language_key in language_keys:
        if language_key not in languages:
            languages[language_key] = languages_in_repo[language_key]
        else:
            languages[language_key] += languages_in_repo[language_key]
        TOTAL += int(languages_in_repo[language_key])

print(projects)

languages_percentage = []
for key, value in languages.items():
    language_percentage = {}
    language_percentage['language'] = key
    language_percentage['percentage'] = value / TOTAL * 100
    languages_percentage.append(language_percentage)
languages_percentage = list(filter(lambda item: item.get("percentage") >= 1,sorted(
    languages_percentage, key=lambda d: d.get("percentage"))))
languages_percentage.reverse()

print(languages_percentage)

BASE_CONTENT = _.read_file("./README.base.md")
print(BASE_CONTENT)

PROJECTS_CONTENT = "\n".join(projects)
LANGUAGES_CONTENT = "\n".join(
    map(lambda language_percentage: "- " +
        "`" + language_percentage["language"] + "` - " +
        str(round(language_percentage["percentage"], 2)) + "%",
        languages_percentage)
)
CONTENT = BASE_CONTENT.replace("[PROJECTS_PLACEHOLDER]", PROJECTS_CONTENT).replace(
    "[LANGUAGES_PLACEHOLDER]", LANGUAGES_CONTENT)

_.write_file("./README.md", CONTENT)

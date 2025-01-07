brew-update:
	brew update
	brew upgrade
	brew cleanup

delete-branches:
	git branch | grep -v "master" | xargs git branch -D

update:
	pnpm update --latest -r

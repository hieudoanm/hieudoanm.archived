update:
	pnpm update --latest -r

brew-update:
	brew update
	brew upgrade
	brew cleanup

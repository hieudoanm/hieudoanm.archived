#!/bin/sh

python3 -m pylint $(git ls-files '*.py')

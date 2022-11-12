#!/bin/sh

EXTENSIONS=""

for extension in $(code --list-extensions)
do
    echo "\"$extension\""
    EXTENSIONS+="\"$extension\",\n"
done

echo $EXTENSIONS > ./scripts/extensions.txt

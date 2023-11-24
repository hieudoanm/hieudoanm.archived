#!/bin/sh

folders=(
    "hieudoanm"
    "hieudoanm.github.io"
    "hieudoanm.private"
)

for folder in "${folders[@]}"
do
    echo "----- $folder -----";
    if [ -d "$folder" ]; then
        cd $folder;
        git checkout master;
        git fetch origin master;
        git pull origin master;
        cd ..;
    fi
done

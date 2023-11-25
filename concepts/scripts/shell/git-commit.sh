#!/bin/sh

folders=(
    "hieudoanm"
    "hieudoanm.github.io"
    "hieudoanm.private"
)


for folder in "${folders[@]}"
do
    echo "----- $folder -----";
    cd $folder;
    git add -A;
    git status;
    git commit -m "Update CI/CD";
    git push
    cd ..;
done

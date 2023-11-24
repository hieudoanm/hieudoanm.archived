#!/bin/sh

folders=(
    "hieudoanm"
    "hieudoanm.github.io"
    "hieudoanm.private"
)

for folder in "${folders[@]}"
do
    echo "----- $folder -----";
    git clone git@github.com:hieudoanm/$folder.git

done

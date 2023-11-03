#!/bin/sh

folders=(
    "hieudoanm"
    "hieudoanm.github.io"
    "HouseOfApps"
    "HouseOfBCI"
    "HouseOfChess"
    "HouseOfMystery"
    "HouseOfSecrets"
)

for folder in "${folders[@]}"
do
    echo "----- $folder -----";
    git clone git@github.com:hieudoanm/$folder.git

done

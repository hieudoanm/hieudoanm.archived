#!/bin/sh

folders=(
    "data.au"
    "data.cn"
    "data.eu"
    "data.games"
    "data.gh"
    "data.kr"
    "data.ml"
    "data.us"
    "data.vn"
    "data.world"
    "hieudoanm"
    "hieudoanm.ai"
    "hieudoanm.github.io"
    "hieudoanm.sh"
    "hieudoanm.svg"
    "starter.c"
    "starter.cpp"
    "starter.cs"
    "starter.dart"
    "starter.go"
    "starter.java"
    "starter.kt"
    "starter.py"
    "starter.rs"
    "starter.swift"
)

for folder in "${folders[@]}"
do
    echo "----- $folder -----";
    cd $folder;
    git checkout master;
    git fetch origin master;
    git pull origin master;
    cd ..;
done

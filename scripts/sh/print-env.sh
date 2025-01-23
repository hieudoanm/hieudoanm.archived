#!/bin/bash

lines=$(printenv);
IFS=$'\n' sorted=$(sort <<< "${lines[*]}");
unset IFS;
printf "%s" "${sorted[@]}";

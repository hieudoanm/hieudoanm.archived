#!/bin/bash

function dkillall() {
  docker kill $(docker ps -q)
}

function drmall() {
  docker rm $(docker ps -a -q)
}

function drmiall() {
  docker rmi $(docker images -q)
}

alias dc="docker-compose"

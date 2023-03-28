#!/bin/bash

function bupdate {
  brew update
  brew upgrade
  brew cleanup
}

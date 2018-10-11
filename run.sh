#!/bin/bash

## If npm modeules not exist, run npm install
DIRECTORY = '.node_modules'
if [ ! -d "$DIRECTORY" ]; then
  npm install
fi

## Run PM2
pm2 start npm -- start

## View PM2 log
pm2 log
#!/bin/bash

echo "Moving CNAME"
mv ./docs/CNAME ./

echo "Removing old build"
rm -rf ./docs

echo "Building"
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed"
    exit 1
fi

echo "Moving build"
mv ./dist ./docs
mv ./CNAME ./docs


#!/bin/bash

npm run build

# Check if dist/ directory exists
if [ ! -d "dist" ]; then
  echo "Build failed: dist/ directory does not exist."
  exit 1
fi

# copy the contents of dist/ to STATIC_SITE_DIR from environment variable
if [ -z "$STATIC_SITE_DIR" ]; then
  echo "Environment variable STATIC_SITE_DIR is not set."
  exit 1
fi

cp -r dist/* "$STATIC_SITE_DIR"
echo "Static site deployed to $STATIC_SITE_DIR"

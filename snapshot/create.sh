#!/usr/bin/env bash

set -ex

# Create the snapshot
./node_modules/.bin/mksnapshot ./out/snapshot.js --startup_blob ./out/snapshot_blob.bin

# Copy Electron to run with custom snapshot
rm -fr ./node_modules/electron-with-snapshot
cp -R ./node_modules/electron ./node_modules/electron-with-snapshot

# Install the snapshot
cp ./out/snapshot_blob.bin \
  "./node_modules/electron-with-snapshot/dist/Electron.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Resources"

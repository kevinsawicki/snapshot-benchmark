# Snapshot Benchmark

This repository contains benchmarks for a sample Electron app that uses
React, Redux, d3.js, and moment.js totaling 1.3MB in source code loaded at
startup.

It benchmarks an app with no JS, against an app with 1.3MB of library code
compiled into a v8 snapshot, against an app that loads the same 1.3MB of library
code via `require` at startup.

It measures the time taken from `BrowserWindow.loadURL` being called to the
`dom-ready` event being fired on the loaded page.

## Running

- Clone this repository
- Run `npm install`
- Run `npm run benchmark`

## Limitations

- Only works on `macOS` currently

## Results

Average time to DOM ready for 10 app launches.

| Type             | Time   |
| :--------------  | :----- |
| Empty app        | 994ms  |
| With snapshot    | 1014ms |
| Without snapshot | 1208ms |

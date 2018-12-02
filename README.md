# README
## Setup project
1. Install NVM from https://github.com/creationix/nvm
2. Get NODE version v10.13.0
```bash
nvm install v10.13.0
```
3. Use NODE v10.13.0
```bash
nvm use v10.13.0
```
4. Setup ionic
```bash
npm install ionic -g
```
5. Sync repo (Make sure you setup SSH keys on GITHUB)
```bash
git clone git@github.com:sagarudasi/DeadMind.git
```
6. Setup project dependencies
```bash
cd DeadMind
npm install
```

## Run project in browser
1. Use NODE v10.13.0
```bash
nvm use v10.13.0
```
2. Go to project directory
```bash
cd DeadMind
```
3. Launch project
```bash
ionic serve
```
Refer the console logs to get the hostname and port number of project

## Compile Android APK
WIP
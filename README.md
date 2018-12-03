# README

## Preparing HOST

Requirement: Ubuntu 16.04+

Install Node.js by following https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04#how-to-install-using-nvm 

Make sure to use NVM for installing Node

** Node version: v10.13.0

## Setting up project

1. Clone this repository
2. Go to the cloned repository directory and execute the below command to install all dependencies 
```bash
npm install
```
3. Replace the following files with their versions on Project's Google Drive
```bash
cp <firebase_from_gdrive> <project_repository>/keys/firebase.ts
```
4. Run the following command to launch the project in local browser
```bash
ionic serve
```

This must launch the project in default browser.

*Note: You won't be able to login using Phone Auth since the library requires actual device*

## Building for Android

1. Install java development kit using the below commands 
```bash
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```
2. Setup the below environment variable in bashrc
```
export JAVA_HOME=/usr/lib/jvm/java-8-oracle
```
3. Download Android Studio from https://developer.android.com/studio/install.html 
4. Copy the downloaded android studio to /usr/local and unzip it
5. Modify the ownership
```bash
sudo chown -R <username>:<groupname> android-studio
```
6. Run the studio
```bash
/usr/local/android-studio/bin/studio.sh
```
7. Accept all the defaults and install
8. From the launch screen of android studio, open Configure->SDK Manager
9. Select the android versions that you want to build the apps for. Example 6.0, 7.0, 7.1 and 8
10. Apply and close the window
11. Set the below environment variables in bashrc
```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
```
12. Download gradle from https://gradle.org/releases/ and install gradle
```bash
sudo cp <gradle-zip> /usr/local
cd /usr/local
sudo unzip <gradle>
```
Set the gradle in path
```bash
export PATH=$PATH:/usr/local/gradle-x.x.x/bin
```
13. Source the latest bashrc
```bash
source ~/.bashrc
```
14. Run the below command to build the debug APK
```bash
ionic cordova build android
```

## Post Android build env setup
Following are the steps performed as a workaround for now -
```bash
git clone git@github.com:sagarudasi/deadmind.git
cd DeadMind/
npm install
ionic cordova platform add android@6.4.0 
cp ~/Downloads/DeadMind/firebase.ts keys/
ionic cordova run android
```

## Troubleshooting

1. Update java alternatives
```bash
sudo update-java-alternatives -s java-8-oracle
```
2. Update npm
```bash
npm install -g npm
```
3. Add the cordova plugins using below commands - 
```bash
ionic cordova plugin add https://github.com/apache/cordova-plugin-statusbar.git
ionic cordova plugin add https://github.com/jestcastro/cordova-plugin-firebase.git
```
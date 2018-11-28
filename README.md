# VMessenger
To get started:

1) You will need to download the following:

  - Node.js from https://nodejs.org/en/
  - Expo from either the Google Play Store, or the App Store, to demo the app on your phone.

2) Once Node is installed, open up command prompt and type:

  - npm install -g expo-cli
  - expo init <project name>
  
- This creates the directory, and you can name it whatever you want.
- You need to do this to create the directory of node modules because they are not committed to the repo

3) cd to the directory you created and pull this repo
4) In the terminal, type the following:

  - npm install
  
- This will install all the needed node modules based on what is in the package.json
- If there are issues with this, the following commands will install the modules individually:

  - npm install --save react-navigation
  - npm install --save-dev jest
  - npm install --save prop-types
  - npm install --save react-native-nav
  - npm install --save react-native-camera-roll-picker
  - npm install --save react-native-gifted-chat
  
- React Navigation is the routing/navigationg library that makes it easy to navigate between screens.
- Jest is a testing framework that we used for our TDD approach

4) In the same directory, type:

  - expo start

5) In the browser, there will be serveral options to demo it.

  - Android: You can either scan the QR code, or you can choose the option to send the link via text.
  - Apple: You can choose the option to send the link via text or via email.

9) As long as the Expo app is installed on your phone, the application should open.



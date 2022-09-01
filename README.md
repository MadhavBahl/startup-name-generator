
# Startup Name Generator Application

This project was inspired by another [startup name generator](https://codepen.io/rstacruz/full/wJyaJb), but instead of a web version, I wanted to develop it as a mobile application with react native. Please note that this app is just for fun, I created this to pass my free time. Given below is more information about the project, installation steps, and potential additions, so enjoy and have fun 🙌
![Startup Name Generator](https://user-images.githubusercontent.com/26179770/68524492-862fb680-02ed-11ea-9817-fc800311e252.png)
This application is built using a [Startup Name Generator Library](https://github.com/rstacruz/startup-name-generator) by [@rstacruz](https://github.com/rstacruz/). 

The library works by taking the provided word(s) and creating numerous permutations of that word with an available list of appended prefixes and suffixes to create variations (or startup names). The application I created enables the user to enter their information via the mobile app and access those results.

**Startup Name Generation**
   ```js
const name = require('@rstacruz/startup-name-generator')

name('cloud')
//=> ['Cloudary', 'Purecloud', 'Cloudlayer', 'Echocloud', 'Cloudspan',
//   'Cloudloop', 'Activecloud', 'Cloudspark', 'Cloudable', 'Clouder', ...]
```

## Installation
1. **Clone the repository**
    ``` 
    git clone https://github.com/MadhavBahl/startup-name-generator.git
    ```

2. **Open terminal/cmd as an Administrator**
3. **Navigate to the project's src folder**
4. **Install `expo-cli` as a global dependency**
    ``` 
    npm install -g expo-cli
    ```
 5. **Install the project dependencies**
    ``` 
    npm install
    ```
 6. **Initiate the project**
    ``` 
    npm start
    ```
 7. **Scan the QR code that appears in the Expo Dev Tools**

### Potential Installation Problems
**Issues with yarn**
1. **Check yarn version**
    ``` 
   yarn -v
    ```
2. **Install yarn**
    ``` 
   yarn install
    ```
**Issues with react native**
1. **Check yarn version**
    ``` 
   react-native -v
    ```
2. **Install yarn**
    ``` 
   npm install -g react-native-cli
    ```
**Invalid regular expression error**
Check out these Stack Overflow [steps](https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start) to resolve this error.

## Project Roadmap
**Current To-Do List**
- [x] Implement the app logic (used the startup name generator library)
- [x] Make a basic app which runs the app logic (takes input and displays names)
- [ ] Style part 1: Apply basic styling to make the app look better
- [ ] Style part 2: Add more advances animations to make the app look more good

**Future Ideas**
- [ ] Cicking on a proposed name takes the user to another screen where the user can see availability of that domain

## Contribution Guidelines
**Have any more ideas or want to fix an existing issue?**
- Create a PR
- Update the README

Although we do not have specific contribution guidelines please refer to the [general guidelines](https://github.com/github/docs/blob/main/CONTRIBUTING.md) recommended by Github.

# SocialVerse

SocialVerse is a social media web app.

## File structure

#### `client` - Holds the client application

- #### `public` - This holds all of static files, images, favicons.
- #### `src`
  - #### `Components` - This folder holds all of the different components that will make up our views
  - #### `Redux` - This folder holds redux store and all different action and reducers.
  - #### `App.js` - This is what renders all of browser routes and different views
  - #### `main.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client

#### `server` - Holds the server application

- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of data models
- #### `test.js` - This holds all of server tests cases that I have defined
- #### `server.js` - Defines npm behaviors and packages for the client

#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README

#### `.gitignore` - Tells git which files to ignore

#### `README` - This file!

## Available Scripts

In the project directory, you can run:

### server side

- ### `npm install`

  Installs all packages needed for this api.

- ### `npm run dev`

  Runs both the server app in development mode.<br>
  Open [http://localhost:8080](http://localhost:8080) to view the api endpoints.

- ### `npm run test`

  Runs test cases for this I have used chai, supertest and mocha.

### Client side

- ### `npm install`

  Installs all packages needed for this project.

- ### `npm run dev`

  Runs just the client app in development mode.<br>
  Open [http://localhost:5173](http://localhost:5173) to view the client in the browser.

- ### `npm run build`

  Builds the app for production to the `build` folder.<br>
  It correctly bundles React in production mode and optimizes the build for the best performance.

# Thank you ❤️

static reactjs - ie - deploy to a standard web server

NOTE - NPM used for package updates etc

command lines to start from scratch

npm init
npm install --save react react-dom

-- browserify
nmp install --save browserify


-- babel - .babelrc config at root of the project

npm install babel-cli babel-core babel-standalone babel-preset-env babel-preset-es2015 babel-preset-react --save-dev

-- build setup to eliminate the prototyping usage (inline) - npm/vscode tasks TBD
--  you need to be in the fbtutorial dir
command line - node_modules\.bin\babel src --out-dir lib --copy-files --presets=es2015,react

-- build prod would be browerify or webpak

create app with bootstrap for non-node : https://github.com/facebookincubator/create-react-app

-- best environment seems to be the create-react-app model with usage of react-scripts
-- link to a great walkthrough - https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#folder-structure

- change app to use page template model - index.htm / index.js
- add an app.js for node
- use the static folder pattern for assets
-- then ... you can build for prod and deploy just the build and static folder
npm run build
-- for dev just npm start in root folder
-- to test out statics - just publish to your favorite server in a virtual directory or app or
npm install -g serve
serve -s build

-- next step convert this project


npm install react-scripts --save




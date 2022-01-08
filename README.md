# Cypress Test Project

Automation Tests  - API , E2E , visual regression with Cypress

## Installation
Clone and install the dependencies to run the tests:

- Clone this repo
- Open your IDE and navigate to this project directory

Run the following from the IDE terminal:

##### `npm install`
##### `npm install cypress --save-dev`

and to run the tests:

##### `cypress run -C cypress.json --browser=chrome --headless`
it will run tests in headless mode from Cypress CLI

or
##### `cypress open -C cypress.json` 
it will run tests in interactives mode from Cypress test runner 

I created few demo tests(UI + API + Visual Regression) under integration -> demo and playground folders:
- api.spec.js
- applitools.spec.js
- ui.spec.js

For shared test data between tests it's recommended to place json files under fixtures folder and

## For CI\CD Pipline

- Install and configure Jenkins
- Create new pipline project
- Configure in Jenkibs path to run the project Jeknins file from project root folder
- Run Build

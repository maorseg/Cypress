# Cypress Test Project

Automation Tests  - API , E2E with Cypress

## Installation
Install the dependencies and devDependencies to run the tests:

- Clone this repo
- Open your IDE and navigate to this project directory

Run the following from the terminal:

##### `npm install`
##### `npm install cypress --save-dev`
##### `cypress run -C cypress.json --browser=chrome --headless` - it will run tests in headless mode from Cypress CLI
or
##### `cypress open -C cypress.json` - it will run tests in non headless mode from Cypress test runner 

I created few demo tests(UI + API + Visual Regression) under integration -> demo folder:
- api.spec.js
- applitools.spec.js
- ui.spec.js 

## CI\CD Pipline

- Install Jenkins
- Configure in path to run Jekins file
- Run Build

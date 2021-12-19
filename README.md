# Cypress Test Project

Automation Tests  - API , E2E

## Installation
Install the dependencies and devDependencies to run the tests:

- Clone this repo
- Open your text editor and navigate to this project directory

Run the following from the terminal:

##### `npm install`
##### `npm install cypress --save-dev`
##### `cypress run -C cypress.json --browser=chrome --headless` - run tests in headless mode from Cypress CLI
or
##### `cypress open -C cypress.json` - run tests in non headless mode from Cypress test runner 

I created 3 demo tests(UI + API + Visual Regression) under integration -> demo folder:
- api.spec.js
- applitools.spec.js
- ui.spec.js 


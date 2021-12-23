
pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:10'
    }
  }

 stages:
  - test

test:
  image: cypress/browsers:node12.14.1-chrome85-ff81
  stage: test
  script:
    # install dependencies
    - npm ci
    # start the server in the background
    - npm run start:ci &
    # run Cypress tests
    - npx cypress run --browser firefox
  
}}]

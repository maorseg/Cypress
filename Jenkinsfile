
pipeline {
     agent any
    
    stages {
  
        stage('Install dependencies') { 
            steps {
                echo '######## Install dependencies ########'
                  bat "npm install"    // bat for windows and sh for linux
            }
        }
        stage('client-e2e-testing') {
            steps {
               echo '######## Running cypress tests ########'
                 bat "npm run test"   // bat for windows and sh for linux
             
          }
        }
      } 
  

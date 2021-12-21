pipeline {
     agent any
     
       stages {
       
        stage('build') {
            steps {
                bat 'node --version'
            }    
            
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
     }

   


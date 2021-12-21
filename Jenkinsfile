
pipeline {
     agent any
    
    stages {
  
        stage('--clone--') {
            steps {
                echo "Cloning stage"
                }
                
                // CLONE PROJECT
                   "git clone https://github.com/maorseg/cypress"
            }
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
  

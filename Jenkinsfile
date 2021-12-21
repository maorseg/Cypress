
pipeline {
     agent any
    
    stages {
       
             
             
        stage('--clone--') {
            steps {
                script {
                    FAILED_STAGE=env.STAGE_NAME
                    echo "Cloning stage"
                }
                // REMOVE PREVIOUS FILE
                bat "rm -rf ${projectFolder}"
                // CLONE PROJECT
                bat "git clone "
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
    }

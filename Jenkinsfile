
pipeline {
     agent any
    
    stages {
        stage('Build') {
            steps {
                echo '######## Building ########'
            }
        }
        stage('nimbus-web-viewer-client-e2e-testing') {
            steps {
               echo '######## Testing ########'
               bat "npm install"    // bat for windows and sh for linux
               bat "npm run test"   // bat for windows and sh for linux
            }
        }
        stage('Deploy') {
            steps {
                echo '######## Deploying ########'
                echo 'Deploying'
            } 
         }
      } 
    }

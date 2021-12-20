
pipeline {
    agent {
        node {
            label 'cypress-e2e-tests'
        }
    }
    
     environment {
       SLACK_CHANNEL = "cypress-maor-test"
    }
    
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
            
              post {
    always {
      script {
            env.BUILD_STATUS = currentBuild.getCurrentResult()
            sendEmails.call()
            slackNoftify.call(env.BUILD_STATUS,SLACK_CHANNEL)

      }
    }}
         }
      } 
    }

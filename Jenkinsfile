pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo '######## Building ########'
            }
        }
        stage('Test') {
            steps {
               echo '######## Testing ########'
               bat "npm install"    // bat for windows and sh for linux
               bat "npm run test"
            }
        }
        stage('Deploy') {
            steps {
                echo '######## Deploying ########'
                echo 'Deploying'
            }
            
           post {
    success {
        slackSend channel: "#cypress-maor-test", message: "Build Started: ${env.JOB_NAME} ${env.BUILD_NUMBER}"
        }
      } 
    }
  } 
}

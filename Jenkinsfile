pipeline {
    agent {
        node
    }}

     environment {
        SLACK_CHANNEL = "di-sharing"
    }

    stages {
        stage('GHFF') {

            steps {
                echo 'yo from Jenkinsfile'
                }
        }

    }
    post {
        success {
            script {
                echo " lovely "
                  }
        }
    }



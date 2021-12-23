pipeline {
       agent any

     environment {
        SLACK_CHANNEL = "di-sharing"
    }

    stages {
        stage('FEF') {

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
}

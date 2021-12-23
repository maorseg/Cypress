pipeline {
    agent {
        node
    }}

     environment {
        SLACK_CHANNEL = "di-sharing"
    }

    stages {
        stage('nimbus-evidance manager service') {

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


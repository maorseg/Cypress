pipeline {

  agent {
    kubernetes {
      label "nodeV14_16"
      yaml agents.getAgent("nodeV14_16")
    }
  }

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

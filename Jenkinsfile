pipeline {
    agent {
        docker {
            image 'cypress/base:12.16.1' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Install Dependencies') { 
            steps {
                bat 'npm ci'
                bat 'npm run cy:verify'
            }
        }
        stage('Build') { 
            steps {
                bat 'npm run build'
            }
        }
        stage('Test') { 
            steps {
                bat 'npm run ci:cy-run'
            }
        }
    }
}

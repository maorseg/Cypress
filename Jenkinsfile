pipeline {
    agent any

    parameters {
    string(name: 'SPEC',defaultValue:"**/*{feature,test.js}",description:"Enter the script path to run")
    choice(name: 'BROWSER',choices: ['chrome','edge','firefox'],description:"choice of the browser you want to run")

    }
    options{
        ansiColor('xterm')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building'
            }
        }
        stage('Test') {
            steps {
               bat "npm install"    // bat for windows and sh for linux
               bat "npm run test"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}
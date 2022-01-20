def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]
pipeline {
	     agent any
	
	    	options {
	        ansiColor('xterm')
		timeout(time: 1, unit: 'HOURS')
	       }
	 environment {
    SLACK_CHANNEL = "di-sharing-git"
  }
	       stages {
	       
	        stage('Check versions') {
	            steps {
	                   echo '######## Check versions ########'
			   bat "node --version"
	                   bat "git version"

		      }
		   }
	            
	        stage('Install dependencies') {
	            steps {
	                  echo '######## Install dependencies ########'
	                  bat "npm install"
	            }
	        }
	            
	        stage('client-e2e-testing') {
	            steps {
	                   echo '######## Running cypress tests ########'
	                   bat "npm run ci"   // run the relevant script in package json             
	          }
		
		  post {
    always {
        script {
        if ( env.BRANCH_NAME == 'master' ){
            env.BUILD_STATUS = currentBuild.getCurrentResult()
            slackNoftify.call(env.BUILD_STATUS,SLACK_CHANNEL)
        }
      }
    }
  }
		}}

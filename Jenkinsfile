pipeline {
	     agent any
	    
	      options {
	        ansiColor('xterm')
	       }
	     
	       stages {
	       
	        stage('Check versions') {
	            steps {
	                echo '######## Check versions ########'
			bat "node --version"
	                bat "git version"
			bat "cypress version"    
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
	                 bat "npm run test"   // run the relevant script in package json
	              
	          }
	        }
		       
		post {
                   always {
			  script {
			    if (currentBuild.currentResult == 'SUCCESS') {
			      step([$class: 'Mailer', notifyEveryUnstableBuild: true, recipients: "maors@cellebrite.com, sendToIndividuals: true])
    }
  }
}       
		       
	       }
	     }

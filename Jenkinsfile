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
    SLACK_CHANNEL = "cypress-maor-test"
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
      			publishHTML (target : [
			    allowMissing: true,
			    alwaysLinkToLastBuild: false,
			    keepAll: false,
			    reportDir: 'packages\\nimbus-web-viewer-client-e2e-testing\\cypress\\reports',
			    reportFiles: 'mochawesome.html',
			    reportName: 'HTML Report',
			    reportTitles: 'HTML Report']) 
   }
  }  
 }
}
}

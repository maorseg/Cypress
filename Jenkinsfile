pipeline {
	     agent any
	
	        parameters {
                string(name: 'SPEC', defaultValue: 'cypress/integration/demo/01_api.test.js', description: 'Choose spec file to run')
		}
	
	        options {
	        ansiColor('xterm')
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
		}
	     }
          }
    

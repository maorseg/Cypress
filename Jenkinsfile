pipeline {
	     agent any
	
	        options {
	        ansiColor('xterm')
	       }
	
	       parameters {
               string(name: 'SPEC', defaultValue: 'cypress/integration/**/**', description: 'Eg: cypress/integration/example/*.spec.js')
               choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
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
    

pipeline {
	     agent any
	
	      parameters {
		string(name:'SPEC',defaultValue:"cypress/integration/demo/01_myapi.test.js",description: "Enter the script SPEC file patch to exacute")
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
		       
               stage('post') {
	            steps {
	                echo '######## Post actions here ########'
			echo 'TODO Connect to slack'    
	            }    
	        }       
           }
      }

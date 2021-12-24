pipeline {
	     agent any
	
	       parameters {
               choice(name: 'environment', choices: ['Test', 'Staging'], description: 'Environment to deploy')
               }
     
	      options {
	        ansiColor('xterm')
	       }
	     
	       stages {
	       
	        stage('build') {
	            steps {
	                echo '######## Check versions ########'
	                bat "node --version"
	                bat "git version"
	            }    
	        }
	            
	        stage('Install dependencies') {
	            steps {
	                  echo '######## Install dependencies ########'
	                  bat "npm install"    // bat for windows and sh for linux
	            }
	        }
	            
	        stage('client-e2e-testing') {
	            steps {
	                 echo '######## Running cypress tests ########'
	                 bat "npm run test"   // bat for windows and sh for linux
	              
	          }
	        }
	       }
	     }

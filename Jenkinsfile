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
        always  {
            echo "Build completed. currentBuild.result = ${currentBuild.result}"
        }

        changed {
            echo 'Build result changed'

            script {
                if(currentBuild.result == 'SUCCESS') {
                    echo 'Build has changed to SUCCESS status'
                }
            }
        }

        failure {
            echo 'Build failed'
        }

        success {
            echo 'Build was a success'
        }
        unstable {
            echo 'Build has gone unstable'
        }
    }
		       
	       }
	     }

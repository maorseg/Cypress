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
		       
                stage('post') {
                    steps {        
                         script {
			  always {
				    echo 'One way or another, I have finished'
				    deleteDir() /* clean up our workspace */
				}
				success {
				    echo 'I succeeded!'
				}
				unstable {
				    echo 'I am unstable :/'
				}
				failure {
				    echo 'I failed :('
				}
				changed {
				    echo 'Things were different before...'
			 }
	             }      
		    
	        }
	
           }
		       
      }
}

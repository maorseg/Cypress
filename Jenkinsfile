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
          
			  mail to: 'maors@cellebrite.com',
             		  subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
         	          body: "Something is wrong with ${env.BUILD_URL}"
	             }      
		    
	        }
	
           }
		       
      }
}

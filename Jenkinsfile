pipeline {
    agent any
    
    triggers {
        pollSCM('H/5 * * * *') // Poll every 5 minutes
    }
    
    environment {
        NODE_ENV = 'production'
        PORT = '3000'
        PATH = "C:\\nvm4w\\nodejs;${env.PATH}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                deleteDir() // Clean workspace before checkout
                checkout scm
            }
        }
        
        stage('Verify Files') {
            steps {
                echo 'Verifying image files exist...'
                bat 'dir public\\assets\\images\\logo\\clints'
                bat 'dir public\\assets\\images\\icon'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm ci --legacy-peer-deps'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building Next.js application...'
                script {
                    def buildResult = bat(script: 'npm run build', returnStatus: true)
                    if (buildResult != 0) {
                        error('Next.js build failed. Aborting deployment.')
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Using PM2 with proper port configuration via environment variable
                bat 'pm2 restart pistar || pm2 start npm --name pistar -- run start'
                
                // Option 2: If you prefer copying files to a web server directory, uncomment below:
                // bat 'xcopy /E /I /Y .next\\* C:\\inetpub\\wwwroot\\pistar\\.next\\'
                // bat 'xcopy /E /I /Y public\\* C:\\inetpub\\wwwroot\\pistar\\public\\'
                // bat 'copy package.json C:\\inetpub\\wwwroot\\pistar\\'
            }
        }
    }
    
    post {
        success {
            echo 'Deployment successful! Your site is live.'
        }
        failure {
            echo 'Deployment failed. Check the logs above.'
        }
        always {
            echo 'Pipeline execution completed.'
        }
    }
}

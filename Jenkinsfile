pipeline {
    agent any
    
    triggers {
        pollSCM('H/5 * * * *') // Poll every 5 minutes
    }
    
    environment {
        NODE_ENV = 'production'
        PATH = "C:\\nvm4w\\nodejs;${env.PATH}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
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
                bat 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Option 1: Using PM2 (recommended for Next.js)
                bat 'pm2 restart pistar || pm2 start npm --name pistar -- start -- -p 3000'
                
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

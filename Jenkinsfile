pipeline {
    agent any
    tools {nodejs "nodejs"}

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                echo 'Building..'
              
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

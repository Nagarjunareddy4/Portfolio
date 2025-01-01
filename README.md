# Personalized_Portfolio
This is my personalized portfolio. I created this by using the HTMl, CSS, JS
I deployed this in the Docker container
You can check the below steps how i can deplyed it in the Docker container
Step1: Organize Your project Directory
Step2: Verify Your Project
  Your HTML file links to the correct CSS and JavaScript paths.
Step3: Create a Dockerfile
#Use an official Nginx
FROM nginx:alpine

#Copy all files from the current directory to the containers
COPY . /usr/share/nginx/html

#Expose port 80 to the outside
EXPOSE 80
Step4: Build the Docker Image
  docker build -t portfolio-app .
Step5: Run the Docker Container
  docker run -d -p 8080:80 portfolio-app
  -d : Runs the container in detached mode.
  -p 8080:80 Maps your local port 8080 to the container's port 80.
Step6: Access Your Portfolio
  http://localhost:8080

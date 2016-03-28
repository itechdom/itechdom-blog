docker build -t my-nodejs-app .
docker run -d -p 49160:8080 --name node-running-app -v /root/itechdom-blog:/src/app my-nodejs-app

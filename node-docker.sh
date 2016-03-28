docker build -t my-nodejs-app .
docker run -d -p 49160:3000 --name node-running-app -v /root/itechdom-blog:/src/app my-nodejs-app

FROM node:5.8-wheezy

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm -g install gulp

# Bundle app source
COPY ./app/client /usr/src/app
COPY ./app/server /usr/src/app

# EXPOSE 8080
CMD [ "npm", "start" ]

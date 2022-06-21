
# AUTH SERVER DOCKER FILE

# used by backend, frontend

# Start / click on Docker Desktop, but...
# Don't use Docker Desktop to build and run. That will make unhappyment. Instead, use these CLI commands:

# BUILD
#   docker build --no-cache -t generic-fse-authserver .
# RUN ALONE
#   docker run -dp 4500:4500 --env-file ./.env generic-fse-authserver 
# RUN ON NETWORK
#   docker network create generic-fse
#   docker run -dp 4500:4500 --env-file ./.env --network generic-fse --network-alias authserver generic-fse-authserver

# DEPLOY TO DOCKER HUB
#   build
#   tag
#       docker tag generic-fse-authservere:latest mattburnett01/generic-fse-authserver:latest
#   push
#       docker push mattburnett01/generic-fse-authserver:latest

FROM node:12-alpine

# DOCKER DOESN'T LIKE NODE_ENV=production
#   IT ONLY LIKES NODE_ENV=prod
ENV NODE_ENV=prod

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4500

CMD [ "npm", "start"]

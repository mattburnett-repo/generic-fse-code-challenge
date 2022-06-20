
# AUTH SERVER DOCKER FILE

# DOCKER DOESN'T LIKE NODE_ENV=production
#   IT ONLY LIKES NODE_ENV=prod

# Start / click on Docker Desktop, but...
# Don't use Docker Desktop to build and run. That will make unhappyment. Instead, use these CLI commands:
# BUILD
#   docker build --no-cache -t generic-fse-authserver .
# RUN ALONE
#   docker run -dp 4500:4500 --env-file ./.env generic-fse-authserver 
# RUN ON NETWORK (after running: docker network create generic-fse)
#   docker run -dp 4500:4500 --env-file ./.env --network generic-fse --network-alias authserver generic-fse-authserver

# USE
#   go to browser and type localhost:4500
#   you can also click the 'show in browser button' in Docker 
# It doesn't look like you can start a container from an image in Docker Desktop by clicking 'Run'.
#       I don't know why it is this way

FROM node:12-alpine

ENV NODE_ENV=prod

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4500

CMD [ "npm", "start"]

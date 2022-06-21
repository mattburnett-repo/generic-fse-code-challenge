
# BACKEND DOCKER FILE

# used by frontend
# depends on authServer being available

# Start / click on Docker Desktop, but...
# Don't use Docker Desktop to build and run. That will make unhappyment. Instead, use these CLI commands:

# BUILD
#   docker build --no-cache -t generic-fse-backend .
# RUN ALONE
#   docker run -dp 5000:5000 --env-file ./.env generic-fse-backend
# RUN ON NETWORK
#   docker network create generic-fse
#   docker run -dp 5000:5000 --env-file ./.env --network generic-fse --network-alias backend generic-fse-backend

# DEPLOY TO DOCKER HUB
#   build
#   tag
#       docker tag generic-fse-backend:latest mattburnett01/generic-fse-backend:latest
#   push
#       docker push mattburnett01/generic-fse-backend:latest

FROM node:16-alpine

# DOCKER DOESN'T LIKE NODE_ENV=production
#   IT ONLY LIKES NODE_ENV=prod
ENV NODE_ENV=prod

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start"]

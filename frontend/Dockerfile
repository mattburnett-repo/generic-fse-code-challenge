
# FRONTEND DOCKER FILE

# depends on backend, authServer being available

# Start / click on Docker Desktop, but...
# Don't use Docker Desktop to build and run. That will make unhappyment. Instead, use these CLI commands:

# BUILD
#   docker build --no-cache -t generic-fse-frontend .
# RUN ALONE
#   docker run -dp 3000:3000 --env-file ./.env generic-fse-frontend
# RUN ON NETWORK
#   docker network create generic-fse
#   docker run -dp 3000:3000 --env-file ./.env --network generic-fse --network-alias frontend generic-fse-frontend

# DEPLOY TO DOCKER HUB
#   build
#   tag
#       docker tag generic-fse-frontend:latest mattburnett01/generic-fse-frontend:latest
#   push
#        docker push mattburnett01/generic-fse-frontend:latest

FROM node:16-alpine

# DOCKER DOESN'T LIKE NODE_ENV=production
#   IT ONLY LIKES NODE_ENV=prod
ENV NODE_ENV=prod

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

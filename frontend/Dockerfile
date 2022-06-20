
# FRONTEND DOCKER FILE

# DOCKER DOESN'T LIKE NODE_ENV=production
#   IT ONLY LIKES NODE_ENV=prod

# Don't use Docker Desktop to build and run. That will make unhappyment. Instead, use these CLI commands:
# BUILD
#   docker build --no-cache -t generic-fse-frontend .
# RUN ALONE
#   docker run -dp 3000:3000 --env-file ./.env generic-fse-frontend
# RUN ON NETWORK (docker network create generic-fse). 
#   Depends on backend container being available (on network 'generic-fse' at http://localhost:5000)
#   See backend dockerfile for more details about network
#   docker run -dp 3000:3000 --env-file ./.env --network generic-fse --network-alias frontend generic-fse-frontend

# https://medium.com/geekculture/getting-started-with-docker-in-your-react-js-application-the-basics-6e5300cf749d
FROM node:16-alpine

ENV NODE_ENV=prod

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]


# BUILD
#   docker build --no-cache -t generic-code-challenge-frontend .
# RUN ALONE
#   docker run -dp 3000:3000 generic-code-challenge-frontend
# RUN ON NETWORK (docker network create generic-code-challenge). 
#   Depends on backend container being available (on network 'generic-code-challenge' at http://0.0.0.0:5000)
#   See backend dockerfile for more details about network
#   docker run -dp 3000:3000 --network generic-code-challenge --network-alias frontend -e REACT_APP_APOLLO_URI=http://0.0.0.0:5000 generic-code-challenge-frontend

# https://medium.com/geekculture/getting-started-with-docker-in-your-react-js-application-the-basics-6e5300cf749d
FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

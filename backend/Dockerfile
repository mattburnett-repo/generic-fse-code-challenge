
# DOCKER DOESN'T LIKE NODE_ENV=production
#   IT ONLY LIKES NODE_ENV=prod
#   *facepalm*

# Don't use Docker Desktop to build and run. That will make unhappyment. Instead, use these CLI commands:
# BUILD
#   docker build -t generic-code-challenge-backend .
# RUN
#   docker run -dp 5000:5000 generic-code-challenge-backend
# USE
#   go to browser and type localhost:5000
#   you can also click the 'show in browser button' in Docker 
# It doesn't look like you can start a container from an image in Docker Desktop by clicking 'Run'.
#       I don't know why it is this way

FROM node:12-alpine
ENV NODE_ENV=prod
ENV DATASTORE_BASE_URL=https://feather-datastore.herokuapp.com/api/v1
ENV APOLLOQL_PORT=5000

# RUN --env-file=.env
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN apk add --no-cache python2 g++ make

WORKDIR /backend
COPY . .

EXPOSE 5000

RUN yarn install --production

CMD [ "node", "src/index.js"]

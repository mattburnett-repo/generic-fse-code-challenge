
# BUILD
#   docker build -t generic-code-challenge-frontend .
# RUN
#   docker run -dp 3000:3000 generic-code-challenge-frontend

# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /frontend

ENV NODE_ENV=production

COPY . .
RUN yarn install --production

EXPOSE 3000

CMD ["npm", "start"]

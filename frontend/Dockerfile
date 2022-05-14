
# BUILD
#   docker build --no-cache -t generic-code-challenge-frontend .
# RUN
#   docker run -dp 3000:3000 generic-code-challenge-frontend

# https://medium.com/geekculture/getting-started-with-docker-in-your-react-js-application-the-basics-6e5300cf749d
FROM node:12-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]

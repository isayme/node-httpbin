FROM node:6.12-alpine

WORKDIR /app

COPY package.json .
RUN npm i --production
COPY . /app

CMD npm start

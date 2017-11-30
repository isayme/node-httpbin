FROM node:6.12-alpine

WORKDIR /app

COPY package.json .
RUN npm i --production && npm cache clean
COPY . /app

CMD npm start

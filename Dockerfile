FROM node:6.12

WORKDIR /app

COPY package.json .
RUN npm i --production
COPY . /app

CMD npm start

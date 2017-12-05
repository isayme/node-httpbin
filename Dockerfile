FROM node:6.12.0-alpine AS builder

RUN npm i -g nm-prune

WORKDIR /tmp
COPY package.json .
RUN npm i --production
RUN nm-prune -f

FROM node:6.12.0-alpine

WORKDIR /app
COPY . /app
COPY --from=builder /tmp/node_modules ./node_modules

CMD npm start

FROM node:8.9.4-alpine AS builder

WORKDIR /app
COPY package.json .
RUN npm i --production

FROM node:8.9.4-alpine
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . /app

CMD npm start

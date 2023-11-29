FROM node:18-alpine

WORKDIR /home/account-service

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

CMD yarn dev
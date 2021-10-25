FROM node:alpine

WORKDIR /usr/app

COPY package.json ./
RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

RUN apk add --no-cache bash

CMD ["npm", "run", "start"]
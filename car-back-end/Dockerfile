FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci \
  && npm cache clean --force

COPY . .

COPY . /app

RUN npm run build

EXPOSE 3000

CMD node dist/main.js

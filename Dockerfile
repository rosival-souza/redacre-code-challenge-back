FROM node:16

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN npm install
# RUN npm ci  --only=production

COPY . .

# EXPOSE 4000

CMD [ "node", "server.js" ]
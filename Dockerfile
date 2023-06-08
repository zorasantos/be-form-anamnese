FROM node:18.16.0

RUN npm install -g npm@8.12.2

WORKDIR /usr/app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]
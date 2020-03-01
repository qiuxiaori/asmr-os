FROM node:12

RUN mkdir -p /usr/src/node-app/asmr-os

WORKDIR /usr/src/node-app/asmr-os

COPY package.json /usr/src/node-app/asmr-os/package.json

RUN npm install

COPY . /usr/src/node-app/asmr-os

ENV EGG_MONGODB_URL=mongo://172.17.6.241:27017/asmr-dev

EXPOSE 7001

CMD ["npm", "run", "start"]
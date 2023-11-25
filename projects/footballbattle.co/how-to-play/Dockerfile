FROM node:alpine

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY . .
RUN yarn install

RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]

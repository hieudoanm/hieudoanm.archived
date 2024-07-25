FROM node:20.16.0 AS build

LABEL author hieudoanm

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY . /home/node/app

RUN yarn install
RUN yarn build

FROM node:20.16.0-alpine

USER node

COPY --from=build /home/node/app ./

ENV PORT=5000

EXPOSE $PORT

CMD ["yarn", "start"]

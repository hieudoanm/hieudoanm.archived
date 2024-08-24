FROM node:20.17.0-alpine

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY . .
RUN pnpm install

RUN pnpm build
EXPOSE 3000

CMD ["yarn", "start"]

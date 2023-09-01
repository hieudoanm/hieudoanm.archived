# House of Engineer

- [House of Engineer](#house-of-engineer)
  - [Technology](#technology)
    - [Development Tools](#development-tools)
      - [Package Managers](#package-managers)
      - [Linters and Formatters](#linters-and-formatters)
      - [Logging](#logging)
      - [Testing](#testing)
        - [Unit Test](#unit-test)
        - [End-to-end Test](#end-to-end-test)
      - [Build Tools](#build-tools)
      - [Documentation](#documentation)
    - [Front-end](#front-end)
      - [Web Frameworks](#web-frameworks)
        - [Client-side](#client-side)
        - [Server-side](#server-side)
      - [Web UI](#web-ui)
      - [Mobile](#mobile)
    - [Back-end](#back-end)
      - [Frameworks](#frameworks)
      - [Security](#security)
      - [Object Relational Mapping (ORM)](#object-relational-mapping-orm)
  - [Templates](#templates)
    - [Web Templates](#web-templates)
      - [React](#react)
    - [Sever Templates](#sever-templates)

## Technology

### Development Tools

#### Package Managers

| Categories   | [npm](https://www.npmjs.com/) | [yarn](https://yarnpkg.com/) | [pnpm](https://pnpm.io/) |
| ------------ | ----------------------------- | ---------------------------- | ------------------------ |
| Developed By | Microsoft                     | Yarn                         | Microsoft                |
| Security     | 1                             | 2                            | 3                        |
| Performance  | 1                             | 2                            | 3                        |
| Monorepo     | 1                             | 3                            | 2                        |

#### Linters and Formatters

1. [eslint](https://eslint.org) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease
2. [husky](https://typicode.github.io/husky/#/) - Modern native Git hooks made easy
3. [prettier](https://prettier.io) - Opinionated Code Formatter

```sh
yarn add --dev --exact husky eslint prettier pretty-quick
yarn eslint --init
yarn husky install
yarn husky add .husky/pre-commit "yarn lint && yarn pretty-quick --staged"
```

#### Logging

- [npmlog](https://github.com/npm/npmlog)
- [pino](https://getpino.io)
- [winston](https://github.com/winstonjs)

#### Testing

##### Unit Test

|              | [jest](http://jestjs.io/) | [mocha](https://mochajs.org/) | [jasmine](https://jasmine.github.io/) |
| ------------ | ------------------------- | ----------------------------- | ------------------------------------- |
| Developed By | Meta                      |                               |                                       |

##### End-to-end Test

|              | [cypress](https://www.cypress.io/) | [playwright](https://playwright.dev/) | [karma](https://karma-runner.github.io) |
| ------------ | ---------------------------------- | ------------------------------------- | --------------------------------------- |
| Developed By |                                    | Microsoft                             | Google                                  |

#### Build Tools

1. [vite](https://vitejs.dev/)
2. [webpack](https://webpack.js.org/)

#### Documentation

1. [docsify](https://docsify.js.org/#/)
2. [storybook](https://storybook.js.org/)
3. [tsoa](https://tsoa-community.github.io/docs/)

### Front-end

#### Web Frameworks

##### Client-side

|              | [Angular](https://angular.io/) | [React](https://react.dev/) | [Solid](https://www.solidjs.com/) | [Svelte](https://svelte.dev/) | [Vue.js](https://vuejs.org/) |
| ------------ | ------------------------------ | --------------------------- | --------------------------------- | ----------------------------- | ---------------------------- |
| Developed By | Google                         | Meta                        |                                   | Vercel                        |                              |

##### Server-side

|              | [Next.js](https://nextjs.org/) | [Gatsby.js](https://gatsbyjs.org) | [SolidStart](https://start.solidjs.com) | [SvelteKit](https://kit.svelte.dev/) | [Nuxt](https://nuxtjs.org/) |
| ------------ | ------------------------------ | --------------------------------- | --------------------------------------- | ------------------------------------ | --------------------------- |
| Developed By | Vercel                         | Netlify                           |                                         | Vercel                               |                             |

#### Web UI

|              | [Ant Design](https://ant.design/) | [Chakra UI](https://chakra-ui.com) | [MUI](https://mui.com) |
| ------------ | --------------------------------- | ---------------------------------- | ---------------------- |
| Developed By |                                   |                                    | Google                 |

#### Mobile

|              | [NativeScript](https://nativescript.org/) | [Ionic](https://ionicframework.com/) | [React Native](https://reactnative.dev/) |
| ------------ | ----------------------------------------- | ------------------------------------ | ---------------------------------------- |
| Developed By |                                           |                                      | Meta                                     |
| Built Upon   | Angular - React - Svelte - Vue            | Angular                              | React                                    |

### Back-end

#### Frameworks

1. [express.js](https://expressjs.com/)
2. [fastify](https://www.fastify.io/)
3. [nest.js](https://nestjs.com/)

#### Security

1. [cors](https://github.com/expressjs/cors)
2. [helmet](https://helmetjs.github.io/)
3. Authentication
   1. [jsonwebtoken](https://jwt.io/)
   2. [passport](https://www.passportjs.org/)

#### Object Relational Mapping (ORM)

|            | [Prisma](https://www.prisma.io/) | [TypeORM](https://typeorm.io/) | [Sequelize](https://sequelize.org/) | [Mongoose](https://mongoosejs.com/) |
| ---------- | -------------------------------- | ------------------------------ | ----------------------------------- | ----------------------------------- |
| MongoDB    | Support                          | Support                        |                                     | Support                             |
| PostgreSQL | Support                          | Support                        | Support                             |                                     |

## Templates

### Web Templates

| Framework | Client-side Rendering | Server-side Rendering                 |
| --------- | --------------------- | ------------------------------------- |
| Angular   | [Angular][angular]    |                                       |
| React     | [React][react]        | [Next.js][next] - [Gatsby.js][gatsby] |
| Solid     | [Solid][solid]        | [SolidStart][solid-start]             |
| Svelte    | [Svelte][svelte]      | [SvelteKit][svelte-kit]               |

#### [React](https://github.com/houseoftypescript/react-template)

1. [Hooks](https://github.com/houseoftypescript/react-hooks)
2. [UI](https://github.com/houseoftypescript/react-ui)
3. [Themes](https://github.com/houseoftypescript/react-themes)

### Sever Templates

- MQ: Message Queue
- MQTT: Message Queuing Telemetry Transport
- NATS: Neural Autonomic Transport System
- REST: Representational State Transfer
- RPC: Remote Procedure Call
- QL: Query Language

| No  | Style     | Architecture | Developed By | Express.js                     | Nest.js                     |
| --- | --------- | ------------ | ------------ | ------------------------------ | --------------------------- |
| 01  | RESTful   | API          |              | [API][express-api]             | [API][nest-api]             |
| 02  | QL        | GraphQL      | Meta         | [GraphQL][express-graphql]     | [GraphQL][nest-graphql]     |
| 03  | WebSocket | Socket.io    |              | [WebSocket][express-websocket] | [WebSocket][nest-websocket] |
| 05  | RPC       | gRPC         | Google       | [gRPC][express-grpc]           | [gRPC][nest-grpc]           |
| 04  | Messaging | ActiveMQ     | Apache       | [ActiveMQ][express-active]     | [ActiveMQ][nest-active]     |
| 06  | Messaging | Kafka        | Apache       | [Kafka][express-kafka]         | [Kafka][nest-kafka]         |
| 07  | Messaging | MQTT         |              | [MQTT][express-mqtt]           | [MQTT][nest-mqtt]           |
| 08  | Messaging | NATS         |              | [NATS][express-nats]           | [MQTT][nest-nats]           |
| 09  | Messaging | RabbitMQ     |              | [RabbitMQ][express-rabbit]     | [RabbitMQ][nest-rabbit]     |
| 10  | Messaging | Redis        |              | [Redis][express-redis]         | [Redis][nest-redis]         |

<!-- Web -->

<!-- Web - Client-side -->

[angular]: https://github.com/houseoftypescript/angular-template
[react]: https://github.com/houseoftypescript/react-template
[solid]: https://github.com/houseoftypescript/solid-template
[svelte]: https://github.com/houseoftypescript/svelte-template

<!-- Web - Server-side-->

[next]: https://github.com/houseoftypescript/next-template
[gatsby]: https://github.com/houseoftypescript/gatsby-template
[solid-start]: https://github.com/houseoftypescript/solid-start-template
[svelte-kit]: https://github.com/houseoftypescript/svelte-kit-template

<!-- Server -->

<!-- Server - Express.js -->

[express-api]: https://github.com/houseoftypescript/express-api-template
[express-graphql]: https://github.com/houseoftypescript/express-graphql-template
[express-websocket]: https://github.com/houseoftypescript/express-websocket-template

<!-- Server - Express.js - Microservices -->

[express-active]: https://github.com/houseoftypescript/express-active-template
[express-kafka]: https://github.com/houseoftypescript/express-kafka-template
[express-grpc]: https://github.com/houseoftypescript/express-grpc-template
[express-mqtt]: https://github.com/houseoftypescript/express-mqtt-template
[express-nats]: https://github.com/houseoftypescript/express-nats-template
[express-rabbit]: https://github.com/houseoftypescript/express-rabbit-template
[express-redis]: https://github.com/houseoftypescript/express-redis-template

<!-- Server - Nest.js -->

[nest-api]: https://github.com/houseoftypescript/nest-api-template
[nest-graphql]: https://github.com/houseoftypescript/nest-graphql-template
[nest-websocket]: https://github.com/houseoftypescript/nest-websocket-template

<!-- Server - Nest.js - Microservices -->

[nest-active]: https://github.com/houseoftypescript/nest-active-template
[nest-kafka]: https://github.com/houseoftypescript/nest-kafka-template
[nest-grpc]: https://github.com/houseoftypescript/nest-grpc-template
[nest-mqtt]: https://github.com/houseoftypescript/nest-mqtt-template
[nest-nats]: https://github.com/houseoftypescript/nest-nats-template
[nest-rabbit]: https://github.com/houseoftypescript/nest-rabbit-template
[nest-redis]: https://github.com/houseoftypescript/nest-redis-template

# House of Mystery

- [House of Mystery](#house-of-mystery)
  - [Package Manager](#package-manager)
  - [Languages](#languages)
  - [Linters and Formatters](#linters-and-formatters)
  - [Logging](#logging)
  - [Documentation](#documentation)
  - [Build Tools](#build-tools)
  - [Testing](#testing)
    - [Unit Test](#unit-test)
    - [End-to-end](#end-to-end)
  - [Front-end](#front-end)
    - [Components](#components)
    - [Client-side](#client-side)
    - [Server-side](#server-side)
    - [Mobile](#mobile)
  - [Back-end](#back-end)
    - [Frameworks](#frameworks)
    - [Security](#security)
    - [Object Relational Mapping (ORM)](#object-relational-mapping-orm)
  - [DevOps](#devops)

## Package Manager

- [Node.js](https://nodejs.org/en)
  - [npm](https://www.npmjs.com/)
  - [yarn](https://yarnpkg.com/)
  - [pnpm](https://pnpm.io/)

## Languages

- [Golang](https://go.dev)
- [Java](https://www.java.com/en/)
- [Python](https://www.python.org)
- SVG (Scalable Vector Graphics)
- [TypeScript](https://www.typescriptlang.org)

## Linters and Formatters

1. [eslint](https://eslint.org) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease
2. [husky](https://typicode.github.io/husky/#/) - Modern native Git hooks made easy
3. [prettier](https://prettier.io) - Opinionated Code Formatter

```sh
yarn add --dev --exact husky eslint prettier
yarn eslint --init
yarn husky install
yarn husky add .husky/pre-commit "yarn lint && yarn prettier --write ."
```

## Logging

- [Node.js](https://nodejs.org/en)
  - [npmlog](https://github.com/npm/npmlog)
  - [pino](https://getpino.io)
  - [winston](https://github.com/winstonjs)

## Documentation

- [docsify](https://docsify.js.org/#/)
- [storybook](https://storybook.js.org/)
- [tsoa](https://tsoa-community.github.io/docs/)

## Build Tools

- [vite](https://vitejs.dev/)
- [webpack](https://webpack.js.org/)

## Testing

### Unit Test

- [jasmine](https://jasmine.github.io/)
- [jest](http://jestjs.io/) - Meta
- [mocha](https://mochajs.org/)

### End-to-end

- [cypress](https://www.cypress.io/)
- [karma](https://karma-runner.github.io) - Google
- [playwright](https://playwright.dev/) - Microsoft

## Front-end

### Components

- [Ant Design](https://ant.design/)
- [Chakra UI](https://chakra-ui.com)
- [MUI](https://mui.com) - Google

### Client-side

- [Angular](https://angular.io/) - Google
- [React](https://react.dev/) - Meta
- [Solid](https://www.solidjs.com/)
- [Svelte](https://svelte.dev/) - Vercel
- [Vue.js](https://vuejs.org/)

### Server-side

- [Gatsby.js](https://gatsbyjs.org) - Netlify
- [Next.js](https://nextjs.org/) - Vercel
- [Nuxt](https://nuxtjs.org/)
- [SolidStart](https://start.solidjs.com)
- [SvelteKit](https://kit.svelte.dev/) - Vercel

### Mobile

- [Ionic](https://ionicframework.com/)
- [NativeScript](https://nativescript.org/)
- [React Native](https://reactnative.dev/)

## Back-end

### Frameworks

- [Node.js](https://nodejs.org/en)
  - [express.js](https://expressjs.com/)
  - [fastify](https://www.fastify.io/)
  - [nest.js](https://nestjs.com/)

### Security

- [Node.js](https://nodejs.org/en)
  - [cors](https://github.com/expressjs/cors)
  - [helmet](https://helmetjs.github.io/)
  - Authentication
    - [jsonwebtoken](https://jwt.io/)
    - [passport](https://www.passportjs.org/)

### Object Relational Mapping (ORM)

- [Mongoose](https://mongoosejs.com/)
- [Prisma](https://www.prisma.io/)
- [Sequelize](https://sequelize.org/)
- [TypeORM](https://typeorm.io/)

## DevOps

- [Docker](https://www.docker.com/)

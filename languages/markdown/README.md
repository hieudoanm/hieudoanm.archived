# Encyclopedia of Technology

- [Encyclopedia of Technology](#encyclopedia-of-technology)
  - [Version Control](#version-control)
  - [Languages](#languages)
  - [Software Development](#software-development)
    - [Development Tools](#development-tools)
      - [Package Manager](#package-manager)
      - [Linters and Formatters](#linters-and-formatters)
      - [Logging](#logging)
      - [Documentation](#documentation)
      - [Build Tools](#build-tools)
      - [Testing](#testing)
        - [Unit Test](#unit-test)
        - [End-to-end](#end-to-end)
    - [Front-end](#front-end)
      - [Styling](#styling)
        - [Preprocessors](#preprocessors)
        - [Frameworks](#frameworks)
        - [Components](#components)
      - [Frameworks](#frameworks-1)
        - [Client-side](#client-side)
        - [Server-side](#server-side)
        - [Mobile](#mobile)
      - [Libraries](#libraries)
        - [Charts](#charts)
        - [State Management](#state-management)
    - [Back-end](#back-end)
      - [Status Codes](#status-codes)
      - [Frameworks](#frameworks-2)
      - [Security](#security)
      - [Object Relational Mapping (ORM)](#object-relational-mapping-orm)
      - [Database](#database)
      - [Message Broker](#message-broker)
    - [Data Science](#data-science)
      - [Libraries](#libraries-1)
        - [Data](#data)
        - [Machine Learning](#machine-learning)
    - [DevOps](#devops)
      - [Serverless](#serverless)
      - [PaaS](#paas)
      - [IaaS (Infrastructure as a Service)](#iaas-infrastructure-as-a-service)
        - [AWS - Amazon Web Services](#aws---amazon-web-services)
        - [Azure](#azure)
        - [Digital Ocean](#digital-ocean)
        - [Google Cloud](#google-cloud)
    - [Tools](#tools)
      - [Diagrams](#diagrams)
  - [Hardware Development](#hardware-development)
  - [Resources](#resources)

## Version Control

- [Git](https://git-scm.com/)
  - [GitHub](https://github.com/)
  - [GitLab](https://about.gitlab.com/)

## Languages

- C/C++
- [Golang](https://go.dev)
- [Java](https://www.java.com/en/)
- [Python](https://www.python.org)
- SQL (Structured Query Language)
- SVG (Scalable Vector Graphics)
- [TypeScript](https://www.typescriptlang.org)

## Software Development

### Development Tools

#### Package Manager

- [Node.js](https://nodejs.org/en)
  - [npm](https://www.npmjs.com/)
  - [yarn](https://yarnpkg.com/)
  - [pnpm](https://pnpm.io/)

#### Linters and Formatters

1. [eslint](https://eslint.org) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease
2. [husky](https://typicode.github.io/husky/#/) - Modern native Git hooks made easy
3. [prettier](https://prettier.io) - Opinionated Code Formatter

```sh
yarn add --dev --exact husky eslint prettier
yarn eslint --init
yarn husky install
yarn husky add .husky/pre-commit "yarn lint && yarn prettier --write ."
```

#### Logging

- [Node.js](https://nodejs.org/en)
  - [npmlog](https://github.com/npm/npmlog)
  - [pino](https://getpino.io)
  - [winston](https://github.com/winstonjs)

#### Documentation

- [docsify](https://docsify.js.org/#/)
- [storybook](https://storybook.js.org/)
- [tsoa](https://tsoa-community.github.io/docs/)

#### Build Tools

- [vite](https://vitejs.dev/)
- [webpack](https://webpack.js.org/)

#### Testing

##### Unit Test

- [jasmine](https://jasmine.github.io/)
- [jest](http://jestjs.io/) - Meta
- [mocha](https://mochajs.org/)

##### End-to-end

- [cypress](https://www.cypress.io/)
- [karma](https://karma-runner.github.io) - Google
- [playwright](https://playwright.dev/) - Microsoft

### Front-end

#### Styling

##### Preprocessors

- CSS
  - [PostCSS](https://postcss.org/)
  - [SASS](https://sass-lang.com/)

##### Frameworks

- [TailwindCSS](https://tailwindcss.com/)

##### Components

- [Ant Design](https://ant.design/)
- [Chakra UI](https://chakra-ui.com)
- [Theme UI](https://theme-ui.com/)
- [MUI](https://mui.com) - Google

#### Frameworks

##### Client-side

- [Angular](https://angular.io/) - Google
- [React](https://react.dev/) - Meta
- [Solid](https://www.solidjs.com/)
- [Svelte](https://svelte.dev/) - Vercel
- [Vue.js](https://vuejs.org/)

##### Server-side

- [Gatsby.js](https://gatsbyjs.org) - Netlify
- [Next.js](https://nextjs.org/) - Vercel
- [Nuxt](https://nuxtjs.org/)
- [SolidStart](https://start.solidjs.com)
- [SvelteKit](https://kit.svelte.dev/) - Vercel

##### Mobile

- [Ionic](https://ionicframework.com/)
- [NativeScript](https://nativescript.org/)
- [React Native](https://reactnative.dev/)

#### Libraries

##### Charts

- [Charts.js](https://www.chartjs.org/)
- [Chartist.js](https://gionkunz.github.io/chartist-js/)
- [D3.js](https://d3js.org/)
- [Google Chart](https://developers.google.com/chart)
- [Highcharts](https://www.highcharts.com/)
- [Recharts](https://recharts.org/)

##### State Management

- [Redux](https://redux.js.org/)
  - [Saga](https://redux-saga.js.org/)
  - [Thunk](https://www.npmjs.com/package/redux-thunk)

### Back-end

#### Status Codes

- Information responses
  - 100 - Continue
  - 101 - Switching Protocols
  - 102 - Processing (WebDAV)
  - 103 - Early Hints
- Successful responses
  - 200 - OK
  - 201 - Created
  - 202 - Accepted
  - 203 - Non-Authoritative Information
  - 204 - No Content
  - 205 - Reset Content
  - 206 - Partial Content
  - 207 - Multi-Status (WebDAV)
  - 208 - Already Reported (WebDAV)
  - 226 - IM Used (WebDAV)
- Redirection messages
  - 300 - Multiple Choices
  - 301 - Moved Permanently
  - 302 - Found
  - 303 - See Other
  - 304 - Not Modified
  - 305 - Use Proxy
  - 306 - Unused
  - 307 - Temporary Redirect
  - 308 - Permanent Redirect
- Client error responses
  - 400 - Bad Request
  - 401 - Unauthorized
  - 402 - Payment Required
  - 403 - Forbidden
  - 404 - Not Found
  - 405 - Method Not Allowed
  - 406 - Not Acceptable
  - 407 - Proxy Authentication Required
  - 408 - Request Timeout
  - 409 - Conflict
  - 410 - Gone
  - 411 - Length Required
  - 412 - Precondition Failed
  - 413 - Payload Too Large
  - 414 - URI Too Long
  - 415 - Unsupported Media Type
  - 416 - Range Not Satisfiable
  - 417 - Expectation Failed
  - 418 - I'm a teapot
  - 421 - Misdirected Request
  - 422 - Unprocessable Entity (WebDAV)
  - 423 - Locked (WebDAV)
  - 424 - Failed Dependency (WebDAV)
  - 425 - Too Early
  - 426 - Upgrade Required
  - 428 - Precondition Required
  - 429 - Too Many Requests
  - 431 - Request Header Fields Too Large
  - 451 - Unavailable For Legal Reasons
- Server error responses
  - 500 Internal Server Error
  - 501 Not Implemented
  - 502 Bad Gateway
  - 503 Service Unavailable
  - 504 Gateway Timeout
  - 505 HTTP Version Not Supported
  - 506 Variant Also Negotiates
  - 507 Insufficient Storage (WebDAV)
  - 508 Loop Detected (WebDAV)
  - 510 Not Extended
  - 511 Network Authentication Required

#### Frameworks

- [Node.js](https://nodejs.org/en)
  - [express.js](https://expressjs.com/)
  - [fastify](https://www.fastify.io/)
  - [nest.js](https://nestjs.com/)
  - [Apollo GraphQL](https://www.apollographql.com/docs/apollo-server/)

#### Security

- [Node.js](https://nodejs.org/en)
  - [cors](https://github.com/expressjs/cors)
  - [helmet](https://helmetjs.github.io/)
  - Authentication
    - [jsonwebtoken](https://jwt.io/)
    - [passport](https://www.passportjs.org/)

#### Object Relational Mapping (ORM)

- [Mongoose](https://mongoosejs.com/)
- [Prisma](https://www.prisma.io/) for ORM
- [Sequelize](https://sequelize.org/)
- [TypeORM](https://typeorm.io/)

#### Database

- [Redis](https://redis.io/) for Caching
- [PostgreSQL](https://www.postgresql.org/) for Relational SQL
- [MongoDB](https://www.mongodb.com/) for NoSQL

#### Message Broker

- [Kafka](https://kafka.apache.org/)

### Data Science

#### Libraries

##### Data

- [pandas](https://pandas.pydata.org/)
- [numpy](https://numpy.org/)

##### Machine Learning

- [pytorch](https://pytorch.org/)
- [scikit-learn](https://scikit-learn.org/stable/)
- [tensorflow](https://www.tensorflow.org/)

### DevOps

- [Docker](https://www.docker.com/)

#### Serverless

- [Vercel](https://vercel.com)

#### PaaS

#### IaaS (Infrastructure as a Service)

##### [AWS - Amazon Web Services](https://aws.amazon.com)

- Databases
  - [OpenSearch](https://aws.amazon.com/opensearch-service) (ElasticSearch)
- SSO - Single Sign-On
  - [IAM - Identity and Access Management](https://aws.amazon.com/iam/)

##### Azure

##### Digital Ocean

##### Google Cloud

### Tools

#### Diagrams

- [Diagrams](https://www.diagrams.net/)
- [Sequence Diagram](https://sequencediagram.org/)

## Hardware Development

- [Qt](https://www.qt.io/)

## Resources

- [Roadmap](https://roadmap.sh)

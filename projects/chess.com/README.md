<div align="center">
  <h1 align="center">♟️ Chess Insights ♟️</h1>
  <h3>FOSS for chess.com Insights</h3>
</div>

<div align="center">
  <a href="https://chessinsightsweb.vercel.app">chessinsights.app</a>
</div>

<br/>

<div align="center">
    <a href="https://github.com/hieudoanm/hieudoanm/stargazers">
        <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/hieudoanm/hieudoanm" />
    </a>
    <a href="https://github.com/hieudoanm/hieudoanm/blob/master/LICENSE">
        <img alt="LICENSE" src="https://img.shields.io/badge/license-GNUV3-red" />
    </a>
    <a href="https://github.com/hieudoanm/hieudoanm/issues">
        <img src="https://img.shields.io/github/issues/hieudoanm/hieudoanm" alt="GitHub issues" />
    </a>
    <a href="https://twitter.com/hieudoanm">
        <img alt="Follow" src="https://img.shields.io/twitter/follow/hieudoanm" />
    </a>
</div>

<br/>

Chess Insights is a FOSS (Free Open Source Software) for [chess.com insights](https://www.chess.com/insights/hikaru). Built with [Auth0](https://auth0.com/), [Supabase](https://supabase.com) and [Vercel](https://vercel.com/).

## Table of Content

- [Table of Content](#table-of-content)
- [Features](#features)
- [Demo](#demo)
- [Techstack](#techstack)
  - [Language](#language)
  - [Development](#development)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
  - [DevOps](#devops)
    - [SaaS](#saas)
  - [APIs](#apis)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
    - [1. Clone the repository](#1-clone-the-repository)
    - [2. Install Dependencies](#2-install-dependencies)
    - [3. Copy the environment variables to `.env`](#3-copy-the-environment-variables-to-env)
    - [4. Configure the variables in `.env`](#4-configure-the-variables-in-env)
    - [5. Start Database](#5-start-database)
    - [6. Initialize the database](#6-initialize-the-database)
    - [7. Run the API](#7-run-the-api)
    - [8. Run the Web](#8-run-the-web)
  - [Contributing](#contributing)
  - [Our Contributors ✨](#our-contributors-)
  - [Inspiration](#inspiration)

## Features

- Insights: looks at all your games and gives you insights on what it finds in the data! Be it your wins and losses, hanging pieces, accuracy, or even what time of day you win the most, we've got all the data for you right here!

## Demo

- [API](https://chessinsightsapi.vercel.app/)
- [Web](https://chessinsightsweb.vercel.app/)

![demo](./assets/images/demo.png)

## Techstack

### Language

- [x] [typescript](https://www.typescriptlang.org/)

### Development

- [x] Build: [webpack](https://webpack.js.org/)
- [x] Formatting: [prettier](https://prettier.io/)
- [x] Hooks: [husky](https://typicode.github.io/husky/)
- [x] Linting: [eslint](https://eslint.org/)
- [x] Logging: [pino](https://getpino.io/)
- [x] Testing: [jest.js](https://jestjs.io/)

### Front-end

- [x] JS Framework: [next.js](https://nextjs.org/)
- [x] CSS Library: [tailwindcss](https://tailwindcss.com/)
- [x] CSS Framework: [chakra-ui](https://chakra-ui.com/)

### Back-end

- [x] Runtime: [node.js](https://nodejs.org/en)
- Framework
  - [x] [express.js](https://expressjs.com/)
  - [x] [nest.js](https://nestjs.com)
  - [x] [apollo-graphql](https://www.apollographql.com/)
- Swagger
  - [x] [redocly](https://redocly.com/)
  - [x] [tsoa](https://tsoa-community.github.io/docs/)
- Database
  - [x] Database: [PostgreSQL](https://www.postgresql.org/)
  - [x] ORM: [Prisma](https://www.prisma.io/)
    - [x] [Generators](https://www.prisma.io/docs/concepts/components/prisma-schema/generators)
      - [x] [prisma-client-js](https://www.prisma.io/docs/concepts/components/prisma-client)
      - [x] [prisma-dbml-generator](https://github.com/notiz-dev/prisma-dbml-generator) - [dbdiagram](https://dbdiagram.io)
      - [x] [prisma-docs-generator](https://github.com/pantharshit00/prisma-docs-generator)
      - [x] [prisma-json-schema-generator](https://github.com/valentinpalkovic/prisma-json-schema-generator)

### DevOps

- [x] CI/CD: [GitHub Actions](https://github.com/features/actions)
- [x] Container: [Docker](https://docker.com)
- [x] Hosting: [Vercel](https://vercel.com/)

#### SaaS

- [x] [Auth0](https://auth0.com)
- [x] [Supabase](https://supabase.com)

### APIs

- [x] [chess.com](https://chess.com)
- [x] [lichess.org](https://lichess.org)

## Getting Started

### Prerequisites

Here's what you need to be able to run Chess Insights:

- Node.js (version >= 18)
- PostgreSQL (I am using Supabase)

#### 1. Clone the repository

```shell
git clone https://github.com/hieudoanm/hieudoanm.git
cd app.chess
```

#### 2. Install Dependencies

```shell
yarn install
```

#### 3. Copy the environment variables to `.env`

```shell
cp .env.example .env
```

#### 4. Configure the variables in `.env`

| Variable              | Value                                                         |
| --------------------- | ------------------------------------------------------------- |
| AUTH0_SECRET          | `openssl rand -hex 32`                                        |
| AUTH0_BASE_URL        | `http://localhost:3000`                                       |
| AUTH0_ISSUER_BASE_URL | `https://<tenant>.<region>.auth0.com`                         |
| AUTH0_CLIENT_ID       | `auth_client_id`                                              |
| AUTH0_CLIENT_SECRET   | `auth_client_secret`                                          |
| POSTGRESQL_URL        | `postgresql://<username>:<password>@<host>:<port>/<database>` |

#### 5. Start Database

```shell
docker-compose up -d
```

#### 6. Initialize the database

```shell
yarn prisma:dev
```

#### 7. Run the API

```shell
yarn dev:api
```

#### 8. Run the Web

```shell
yarn dev:web
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Contributing

Chess Insights is a FOSS project and we welcome contributions from the community.

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

### Our Contributors ✨

<a href="https://github.com/hieudoanm/hieudoanm/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hieudoanm/hieudoanm" />
</a>

### Inspiration

- [chessinsights.xyz](https://chessinsights.xyz/)

# NestJS GitHub Actions AWS Lambda

This is a simple example of how to deploy a NestJS application to AWS Lambda using GitHub Actions.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

> **Note:** Remember to update the environment variables in the `.env` file. You can use the `.env.example` file as a template.

## Running the app with Docker

### Postgres Database

```bash
cd postgres-docker
docker-compose up -d
```

### NestJS App

```bash
cd ..
docker-compose up -d
```

> **Note:** Remember to always stop the containers when you are done.

```bash
# Stop the NestJS app
docker-compose down
# Stop the Postgres database
cd postgres-docker
docker-compose down
cd ..
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Build

```bash
npm run build
```

# NestJS GitHub Actions AWS Lambda GraphQL Example

This is a NestJS application configured with GitHub Actions for CI/CD, GraphQL for querying, Husky for pre-commit hooks, and set up for deployment on AWS Lambda.

## Features

- **GraphQL**: Implementing GraphQL for efficient and flexible querying.
- **Husky**: Using Husky for managing Git hooks.
- **Docker**: Containerization of NestJS app and PostgreSQL database.
- **GitHub Actions**: Automated CI/CD pipeline.
- **AWS Lambda**: Ready for deployment on AWS Lambda.

## Installation

```bash
npm install
```

> **Note:** Remember to update the environment variables in the `.env` file. You can use the `.env.example` file as a template.

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

```bash
# To manually trigger Husky hooks
npm run lint
```

## Running with Docker

### Postgres Database

```bash
cd postgres-docker
docker-compose up -d
```

### Populate the Database

```bash
yarn start-database
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

## Testing

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

## GitHub Actions CI/CD

GitHub Actions is configured for continuous integration and deployment. Check `.github/workflows/node.js.yml` for the workflow configuration.

## Deployment on AWS Lambda

The application is configured for deployment on AWS Lambda. Ensure you set up AWS credentials and configure your environment accordingly.

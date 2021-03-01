[![Build Status](https://travis-ci.com/AdrienEtienne/coconut-island.svg?branch=master)](https://travis-ci.com/AdrienEtienne/coconut-island)

# Coconut Island

An awesome misterious project.

## Installation

```bash
$ npm install
```

## Running the app

### Postgres Database

```bash
$ docker run -it -p 5432:5432 postgres:11.6
```

### App

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migration

```bash
# Run migrations
$ npm run typeorm -- migration:run

# Generate a migration
$ npm run typeorm -- migration:generate -n AddMigration
```

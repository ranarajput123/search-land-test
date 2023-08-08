# Project Name

Search Land Full Stack Developer Test

## Getting Started

### Prerequisites

- Docker
- Node.js (>=14)
- Yarn

## Setting Up MongoDB

Start MongoDB using Docker:

```bash
docker run --name mongodb -p 27017:27017 -d mongo
```

## Setting Up Environment Variables

In the root directory, run:

```bash
yarn setup:env
```

## Starting Server and Client

In the root directory, run:

```bash
yarn start:dev
```

This will start both the server and client applications concurrently.

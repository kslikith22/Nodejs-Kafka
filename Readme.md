# Nodejs-Kafka

This repository contains a setup for Apache Kafka using Docker Compose. It includes a producer server and a consumer server to demonstrate message production and consumption.

## Prerequisites

- Docker and Docker Compose installed on your machine.
- Node.js installed (for running producer and consumer scripts).

## Getting Started

Clone the Repository

```bash
git clone https://github.com/kslikith22/Nodejs-Kafka.git

To start the Kafka and ZooKeeper services, run the following command:
docker-compose up

Navigate to the producer directory:

cd producer
npm install

You can create a topic using the createTopic.js script provided:
nodemon producer.js


Navigate to the consumer directory:
cd consumer
npm install
node consumer.js


To stop the Kafka and ZooKeeper services, run:

docker-compose down

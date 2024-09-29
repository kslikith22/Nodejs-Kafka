const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'nodejs_kafka',
  brokers: ['localhost:9092'],
});

const admin = kafka.admin();

const createTopic = async (topicName) => {
  await admin.connect();
  console.log('Connected to Kafka');

  try {
    await admin.createTopics({
      topics: [{ topic: topicName, numPartitions: 1, replicationFactor: 1 }],
    });
    console.log(`Topic "${topicName}" created successfully`);
  } catch (error) {
    console.error('Error creating topic:', error);
  } finally {
    await admin.disconnect();
  }
};

createTopic('my-topic');

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'nodejs_kafka',
  brokers: ['localhost:9092'],
});

const admin = kafka.admin();

const listTopics = async () => {
    await admin.connect();
    console.log('Connected to Kafka');
  
    try {
      const topics = await admin.listTopics();
      console.log('Current topics:', topics);
    } catch (error) {
      console.error('Error listing topics:', error);
    } finally {
      await admin.disconnect();
    }
  };
  
  listTopics();
  
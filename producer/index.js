const express = require("express");
const { sendMessageToKafka } = require("./controller/controller");
const { KafkaConfig } = require("./config/kafka");
const kafkaConfig = new KafkaConfig();

const app = express();

app.use(express.json());

app.post("/api/send", sendMessageToKafka);

// kafkaConfig.consume("my-topic", (value) => {
//   console.log("Consumer");
//   console.log(value);
// });

app.listen(8000, () => {
  console.log(`Server running`);
});

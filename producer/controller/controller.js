const { KafkaConfig } = require("../config/kafka");

const sendMessageToKafka = async (req, res) => {
  try {
    const { message } = req.body;
    const kafkaConfig = new KafkaConfig();
    const messages = [{ key: "key1", value: message }];
    kafkaConfig.produce("my-topic", messages);
    return res.json({ status: "OK", message: "Message succesfully sent" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendMessageToKafka };

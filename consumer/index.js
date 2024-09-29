const express = require("express")
const { KafkaConfig } = require("./config/kafka")
const kafkaConfig = new KafkaConfig()


const app = express()

app.use(express.json())

kafkaConfig.consume("my-topic", (value) => {
  console.log("Consumer");
  console.log(value);
});



app.listen(8001,()=>{
    console.log("Consumer server running")
})
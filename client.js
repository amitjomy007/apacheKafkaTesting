const {Kafka} = require('kafkajs'); 
require('dotenv').config();
const IPV4 = process.env.IPV4;

exports.kafka = new Kafka({
    clientId : 'client-ig' , 
    brokers: [`${IPV4}:9092`]
})
const {kafka} = require('./client');


async function init() {
    const producer = kafka.producer();
    console.log("Connecting producerr");
    await producer.connect();
    console.log("producer connection successful");

    await producer.send({
        topic: 'delivery-update', //which topic to send (the topic we created in admin.js)
        messages: [
            {
                partition: 0, //which partition should the message go ? we have 2 avaialble
                key: 'location-update1', 
                value: JSON.stringify({name: 'tung tung Sahur' , location: "Ohio State University"})
            },
            {   
                partition: 0, 
                key: 'location-update2', 
                value: JSON.stringify({name: 'tung tung Sahur' , location: "Yerpedu Institute of Technologia"})
            }


        ]
    });
    await producer.disconnect();
    console.log("disconnected producer after use");
};

init();
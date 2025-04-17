const {kafka} = require('./client');

async  function init() {
    const consumer = kafka.consumer({groupId: 'my-group-for-some-clients'});

    console.log("Connecting to consumer");
    await consumer.connect();
    console.log('Connected to consumer');

    await consumer.subscribe({topics: ['delivery-update'], fromBeginning: true}); 
    // add more subscriptions by running the line again on top of this, they will append
    //await consumer.subscribe({topics: ['whatsapp-group-family']}); 
    

    console.log("Going to get tthe messages");
    await consumer.run({
        eachMessage: async({topic,partition,message,heartbeat,pause})=> {
        console.log(`Received from topic: ${topic}`);
        console.log(`Partition: ${partition}`);
        console.log(message.value.toString());
        }
    });

    // await consumer.disconnect();
    // console.log("Disconnected the consumer!");
}

init();
//importing kafka client which was created in the file client.js    
const {kafka} = require('./client');


async function init() {
    const admin = kafka.admin();
    console.log("Trying to cnnect admin");
    await admin.connect();
    console.log("Succesful connection of admin");


    await admin.createTopics({
        topics: [ {
            topic: 'delivery-update',
            numPartitions: 2, //representing north india and osuth india
        }],
    });
    console.log("created topic : deliver-udpate with 2 partitions");
    console.log("Disconnecting admin after use");
    await admin.disconnect();
}

init();
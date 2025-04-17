1. Start zookeeper in port 2181 [ zookeeper handles the load balancing, divisioning of topics and partionings]  
   docker run -p 2181:2181 zookeeper
2. Setup Kafka  
   TO get your IP Address : run ipconfig and find out IPV4  
   We download confluentinc/cp-kafka in port 9092  
   docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=<IP> -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<IP> -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafkagit commit -m "first commit"

const { Kafka } = require('kafkajs')

const kafka = new Kafka({
	brokers: ['settling-pony-12431-us1-kafka.upstash.io:9092'],
	sasl: {
		mechanism: 'scram-sha-256',
		username: 'c2V0dGxpbmctcG9ueS0xMjQzMSSGS3UbpAEUN7crnP3hd06YzTIo2vPysLGDBj4',
		password: 'OWFiMmQyZmMtOGFlNi00OWQ3LWI2YTktZGM4NzhhODhmOTQw',
	},
	ssl: true,
})

export { kafka }
// const producer = kafka.producer()
// producer.connect()
// // ...
// producer.disconnect()

// const consumer = kafka.consumer({ groupId: '$GROUP_NAME' })
// consumer.connect()
// // ...
// consumer.disconnect()

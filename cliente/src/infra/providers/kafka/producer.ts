import { kafka } from '.'

export class KafkaSendMessage {
	async executre(topic: string, payload: any) {
		const producer = kafka.producer({})

		await producer.connect()
		console.log(`MESSAGE SENT TO TOPIC ${topic}`)
		console.log(payload)
		await producer.send({
			topic: topic,
			messages: [{ value: JSON.stringify(payload) }],
		})

		await producer.disconnect()
	}
}

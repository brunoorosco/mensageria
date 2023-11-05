import { prismaClient } from '../../../database/prismaClient'
import { kafkaConsumer } from '../kafka.consumer'

type CustomerConsumer = {
	email: string
	id: string
}
export async function createCustomerConsumer() {
	console.log('CONSUMER_CUSTOMER')
	const consumer = await kafkaConsumer('CUSTOMER_CREATED')

	await consumer.run({
		eachMessage: async ({ message }: any) => {
			const messageToString = message.value?.toString()
			const customer = JSON.parse(messageToString) as CustomerConsumer

			const consumerCreate = await prismaClient.customer.create({
				data: { email: customer.email, externalId: customer.id },
			})
			console.log(consumerCreate)
		},
	})
}

createCustomerConsumer()

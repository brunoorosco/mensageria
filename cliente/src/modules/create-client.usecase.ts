import { prismaClient } from '../infra/database/prismaClient'
import { kafka } from '../infra/providers/kafka'
import { KafkaSendMessage } from '../infra/providers/kafka/producer'

type CreateCustomerRequest = {
	name: string
	email: string
	password: string
	phone: string
}

export class CreateCustomerUsecase {
	constructor() {}
	async execute(data: CreateCustomerRequest) {
		const customer = await prismaClient.client.findFirst({
			where: { email: data.email },
		})
		if (customer) throw new Error('Customer already exists!')

		const createCostumer = await prismaClient.client.create({
			data: {
				...data,
			},
		})

		const kafkaProducer = new KafkaSendMessage()
		await kafkaProducer.executre('CUSTOMER_CREATED', {
			id: createCostumer.id,
			email: createCostumer.email,
		})

		return createCostumer
	}
}

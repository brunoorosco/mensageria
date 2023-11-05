import { prismaClient } from '../infra/database/prismaClient'

type CreateClenteRequest = {
	name: string
	email: string
	password: string
	phone: string
}

export class CreateClientUsecase {
	constructor() {}
	async execute(data: CreateClenteRequest) {
		const customer = await prismaClient.client.findFirst({
			where: { email: data.email },
		})
		if (customer) throw new Error('Customer already exists!')

		const createCostumer = await prismaClient.client.create({
			data: {
				...data,
			},
		})
		return createCostumer
	}
}

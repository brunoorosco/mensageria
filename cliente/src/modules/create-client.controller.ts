import { Request, Response } from 'express'
import { CreateCustomerUsecase } from './create-client.usecase'

export class CreateCustomerController {
	constructor() {}
	async handle(req: Request, res: Response) {
		const useCase = new CreateCustomerUsecase()
		try {
			const result = await useCase.execute(req.body)
			return res.status(201).json(result)
		} catch (err) {
			return res.status(400).json(err)
		}
	}
}

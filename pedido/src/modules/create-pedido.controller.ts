import { Request, Response } from 'express'
import { CreateClientUsecase } from './create-pedido.usecase'

export class CreateCustomerController {
	constructor() {}
	async handle(req: Request, res: Response) {
		const useCase = new CreateClientUsecase()
		try {
			const result = await useCase.execute(req.body)
			return res.json(result)
		} catch (err) {
			return res.status(400).json(err)
		}
	}
}

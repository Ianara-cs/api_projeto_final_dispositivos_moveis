import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateContactUseCase } from "./CreateContactUseCase";

export class CreateContactController {
    async handle(req: Request, res: Response): Promise<Response> {
        const userId = req.user.id
        const {name, phone, latitude, longitude} = req.body

        const createContactUseCase = container.resolve(CreateContactUseCase)

        const contact = await createContactUseCase.execute({
            latitude, longitude, name, phone, userId
        })

        return res.status(201).json(contact)
    }
}
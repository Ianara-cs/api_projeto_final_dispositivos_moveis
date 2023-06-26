import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateContactUseCase } from "./UpdateContactUseCase";

export class UpdateContactController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params
        const {name, latitude, longitude, phone} = req.body

        const updateContactUseCase = container.resolve(UpdateContactUseCase)

        const contact = await updateContactUseCase.execute({id, name, latitude, longitude, phone})

        return res.status(204).json(contact)
    }
}
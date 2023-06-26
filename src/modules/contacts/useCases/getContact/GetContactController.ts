import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetContactUseCase } from "./GetContactUseCase";

export class GetContactController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {id} = req.params
        
        const getContactUseCase = container.resolve(GetContactUseCase)

        const contact = await getContactUseCase.execute(id)

        return res.status(200).json(contact)
    }
}
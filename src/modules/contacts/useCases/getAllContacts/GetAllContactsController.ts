import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllContactsUseCase } from "./GetAllContanctsUseCase";

export class GetAllContactsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const userId = req.user.id

        const getAllContactsUseCase = container.resolve(GetAllContactsUseCase)

        const contacts = await getAllContactsUseCase.execute(userId)

        return res.status(200).json(contacts)
    }
}
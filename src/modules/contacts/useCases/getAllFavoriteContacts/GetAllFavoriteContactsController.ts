import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllFavoriteContactsUseCase } from "./GetAllFavoriteContactsUseCase";

export class GetAllFavoriteContactsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const userId = req.user.id

        const getAllFavoriteContactsUseCase = container.resolve(GetAllFavoriteContactsUseCase)

        const contacts = await getAllFavoriteContactsUseCase.execute(userId)

        return res.status(200).json(contacts)
    }
}
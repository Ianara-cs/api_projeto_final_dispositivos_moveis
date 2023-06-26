import { Request, Response } from "express";
import { container } from "tsyringe";
import { ChangeFavoriteUseCase } from "./ChangeFavoriteUseCase";

export class ChangeFavoriteController {
    async handle(req: Request, res: Response): Promise<Response> {
        const userId = req.user.id

        const {id} = req.params

        const changeFavoriteUseCase = container.resolve(ChangeFavoriteUseCase)

        await changeFavoriteUseCase.execute(userId, id)

        return res.status(204).json()
    }
}
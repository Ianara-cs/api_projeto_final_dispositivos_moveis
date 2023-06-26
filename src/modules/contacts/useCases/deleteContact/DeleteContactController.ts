import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteContactUseCase } from "./DeleteContactUseCase";

export class DeleteContactController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const userId = req.user.id

        const deleteContactUseCase = container.resolve(DeleteContactUseCase)

        const deletedContact = await deleteContactUseCase.execute(id, userId)

        return res.status(202).json(deletedContact)
    }
}
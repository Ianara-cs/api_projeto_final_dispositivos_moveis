import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticationUseCase } from "./AuthenticationUseCase";

export class AuthenticationController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {email, password} = req.body

        const authenticationUseCase = container.resolve(AuthenticationUseCase)

        await authenticationUseCase.execute(email, password)

        return res.status(200).json()
    }
}
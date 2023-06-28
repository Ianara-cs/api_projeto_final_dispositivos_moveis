import { Router } from "express";
import { AuthenticationController } from "../../../../modules/users/useCases/authentication/AuthenticationController";
import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUserController";

export const authRoutes = Router()

const authenticationController = new AuthenticationController()
const createUserController = new CreateUserController()


authRoutes.post('/signup', createUserController.handle)
authRoutes.post('/signin', authenticationController.handle)
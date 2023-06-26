import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUserController";
import { authMiddleware } from "../middlewares/authMiddleware";

export const authRoutes = Router()

const createUserController = new CreateUserController()


authRoutes.post('/login', authMiddleware)
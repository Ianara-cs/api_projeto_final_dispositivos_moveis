import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { contactRoutes } from "./contacts.routes";
import { userRoutes } from "./users.routes";
import { authRoutes } from "./auth.routes";

export const router = Router()

router.use('/users', userRoutes)
router.use('/', authRoutes)
router.use('/contacts', authMiddleware, contactRoutes)
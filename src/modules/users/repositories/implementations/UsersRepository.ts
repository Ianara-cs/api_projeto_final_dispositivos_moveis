import { prisma } from "../../../../shared/infra/prisma/prismaClient";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
    async createUser( {email, name, password}: CreateUserDTO): Promise<User> {
        const user = await prisma.user.create({
            data: {
                name, email, password
            },
            include: {
                contact: true
            }
        })

        return user
    }
    
    async findUserById(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {id},
            include: {contact: true}
        })

        return user
    }

    async findUserByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {email},
            include: {contact: true}
        })

        return user
    }
}
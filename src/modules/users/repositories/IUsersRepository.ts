import { User } from "../entities/User";

export interface IUsersRepository {
    createUser(data: CreateUserDTO): Promise<User>
    findUserById(id: string): Promise<User | null>
    findUserByEmail(email: string): Promise<User | null>
}
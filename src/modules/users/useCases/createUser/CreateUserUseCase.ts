import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { INJECT } from "../../../../shared/container";
import { AppError } from '../../../../shared/errors/AppErrors';
import { User } from "../../entities/User";
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class CreateUserUseCase{
    constructor(
        @inject(INJECT.USERS_REPOSITORY)
        private readonly usersRepository: IUsersRepository
    ) {}
    
    async execute({email, name, password}: CreateUserDTO): Promise<User> {
        const userAlreadyExists = await this.usersRepository.findUserByEmail(email)

        if(userAlreadyExists) {
            throw new AppError('User already exists')
        }

        const passwordHash = await hash(password, 8)

        const newUser = await this.usersRepository.createUser({email, name, password: passwordHash})

        return newUser
    }
}
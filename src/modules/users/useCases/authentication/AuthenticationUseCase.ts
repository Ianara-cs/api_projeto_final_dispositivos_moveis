import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { AppError } from "../../../../shared/errors/AppErrors";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class AuthenticationUseCase {
    constructor(
        @inject(INJECT.USERS_REPOSITORY)
        private readonly usersRepository: IUsersRepository
    ) {}

    async execute(email: string, password: string): Promise<void> {
        const user = await this.usersRepository.findUserByEmail(email)
        
        if(!user) {
            throw new AppError('Email or password incorrect')
        }

        const verifyPassword = await compare(password, user.password)

        if(!verifyPassword) {
            throw new AppError('Email or password incorrect')
        }
    }
}
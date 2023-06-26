import { compare } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { UsersRepository } from '../../../../modules/users/repositories/implementations/UsersRepository';
import { AppError } from '../../../errors/AppErrors';

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization

    if(!auth) {
        throw new AppError('Email or password incorrect')
    }

    const [authType, authValue] = auth.split(' ')
    let buff = Buffer.from(authValue, 'base64');
    let [email, password] = buff.toString('ascii').split(':');
    const usersRepository = new UsersRepository()
    const user = await usersRepository.findUserByEmail(email)
    
    if(!user) {
        throw new AppError('Email or password incorrect')
    }

    const verifyPassword = await compare(password, user.password)

    if(!verifyPassword) {
        throw new AppError('Email or password incorrect')
    }
    
    req.user = {
        id: user.id
    }

    next() 
}
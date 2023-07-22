import { NextFunction, Request, Response } from 'express'
import { JwtPayload, verify } from 'jsonwebtoken'

import { AppError } from '@shared/errors/AppError'
import { PrismaSignUpRepository } from '@infra/database/prisma/repositories/SignUp/PrismaSignUpRepository'
// import { Either, left } from '@shared/errors/either'

const SECRET_TOKEN = process.env.SECRET_JWT
// type ResponseEnsure = Either<AppError, void>

export async function ensureAuthenticated(
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> {
  const token = req.headers.authorization

  if (!token) {
    throw new AppError('Token missing!', 401)
    // return left(new AppError('Token missing!', 401))
  }

  try {
    const { sub: userId } = verify(token, SECRET_TOKEN as string) as JwtPayload

    const usersRepository = new PrismaSignUpRepository()
    const user = await usersRepository.findUserById(userId as string)

    if (!user) {
      throw new AppError('User does not exists!', 404)
      // return left(new AppError('User does not exists!', 404))
    }

    next()
  } catch (error) {
    throw new AppError('Invalid token!', 401)
    // return left(new AppError('Invalid token!', 401))
  }
}

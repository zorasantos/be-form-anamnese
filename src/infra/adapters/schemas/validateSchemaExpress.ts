import { Request, Response, NextFunction } from 'express'

import { AnyZodObject, ZodError } from 'zod'

function getZodErrorMessage(error: ZodError): string {
  return error.issues.map((issue) => issue.message).join('\n')
}

export const validateSchemaExpress =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params
      })
      return next()
    } catch (error) {
      const message = getZodErrorMessage(error as ZodError)
      return res.status(400).send({ message })
    }
  }

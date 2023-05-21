import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from 'fastify'

import { AnyZodObject, ZodError } from 'zod'

function getZodErrorMessage(error: ZodError): string {
  return error.issues.map((issue) => issue.message).join('\n')
}

export const validateSchemaFastify =
  (schema: AnyZodObject) =>
  async (
    req: FastifyRequest,
    res: FastifyReply,
    done: HookHandlerDoneFunction,
  ) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      return done()
    } catch (error) {
      const message = getZodErrorMessage(error as ZodError)
      return res.status(400).send({ message })
    }
  }

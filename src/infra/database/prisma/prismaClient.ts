import { PrismaClient } from '@prisma/client'

export const prismaClient = new PrismaClient({
  log: ['error', 'info', 'query', 'warn'],
})

async function checkDatabaseConnection() {
  try {
    await prismaClient.$connect()
    console.log('Database connection established via Prisma.')
  } catch (error) {
    console.error('Error connecting to database:', error)
  } finally {
    await prismaClient.$disconnect()
  }
}
checkDatabaseConnection()

import { PrismaClient } from '@prisma/client'
const isOrmPrisma = process.env.ORM_TYPE

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

if (isOrmPrisma === 'prisma') {
  checkDatabaseConnection()
}

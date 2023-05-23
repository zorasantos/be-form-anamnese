import { DataSource } from 'typeorm'
const isOrmPrisma = process.env.ORM_TYPE

const AppDataSource = new DataSource({
  type: 'postgres',
  host: '172.18.0.2',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'anamnese',
})

const typeormDatabaseConnection = async () => {
  try {
    await AppDataSource.initialize()
    console.log('Typeorm Data Source has been initialized!')
  } catch (error) {
    console.error('Error during typeorm Data Source initialization', error)
  }
}

if (isOrmPrisma === 'typeorm') {
  typeormDatabaseConnection()
}

export { AppDataSource }

import type {
  EnvironmentContext,
  JestEnvironmentConfig,
} from '@jest/environment'

import dotenv from 'dotenv'
import NodeEnvironment from 'jest-environment-node'
import { MongoClient } from 'mongodb'

dotenv.config({ path: '.env.testing' })

export default class MongoTestEnvironment extends NodeEnvironment {
  private connectionString: string
  constructor(config: JestEnvironmentConfig, _context: EnvironmentContext) {
    super(config, _context)

    const dbUser = process.env.MONGODB_USER
    const dbPass = process.env.MONGODB_PASS
    const dbHost = process.env.MONGODB_HOST
    const dbName = process.env.MONGODB_DBNAME

    this.connectionString = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}`
  }

  async teardown() {
    const client = await MongoClient.connect(this.connectionString)

    await client.connect()
    await client.close()
  }
}

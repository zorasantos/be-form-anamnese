import 'dotenv/config'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

import type { Config } from 'jest'

const testEnvironment =
  process.env.DATABASE_TYPE === 'postgres'
    ? './prisma/prisma-test-env.ts'
    : './prisma/mongo-test-env.ts'

export default async (): Promise<Config> => {
  return {
    verbose: true,
    clearMocks: true,
    bail: true,
    collectCoverage: true,
    coverageProvider: 'v8',
    detectOpenHandles: true,
    preset: 'ts-jest',
    silent: true,
    cache: false,
    passWithNoTests: true,
    testRegex: '.e2e.spec.ts$',
    testEnvironment,
    testPathIgnorePatterns: ['/node_modules/', '/coverage/'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/src/',
    }),
  }
}

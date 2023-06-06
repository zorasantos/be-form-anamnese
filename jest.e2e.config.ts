import 'dotenv/config'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

import type { Config } from 'jest'

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
    testEnvironment: './src/infra/database/prisma/prisma-test-env.ts',
    testPathIgnorePatterns: ['/node_modules/', '/coverage/'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/src/',
    }),
  }
}

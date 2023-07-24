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
    coveragePathIgnorePatterns: [
      '/node_modules/',
      'src/infra/database/prisma/',
      'src/application/modules/DifficultiesAndObjectives/Entities/DifficultiesAndObjectives.ts',
      'src/application/modules/FamilyAndYou/Entities/FamilyAndYou.ts',
      'src/application/modules/PersonalData/Entities/PersonalData.ts',
      'src/application/modules/SignUp/Entities/SignUp.ts'
    ],
    detectOpenHandles: true,
    preset: 'ts-jest',
    silent: false,
    cache: false,
    passWithNoTests: true,
    testRegex: '.unit.spec.ts$',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/coverage/'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/src/'
    })
  }
}

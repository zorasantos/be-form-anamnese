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
    preset: 'ts-jest',
    testPathIgnorePatterns: ['/node_modules/', '/coverage/'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
    transform: {
      '^.+\\.(t|j)sx?$': '@swc/jest',
    },
  }
}

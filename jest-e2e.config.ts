import jestConfig from './jest.config'

export default {
  ...jestConfig,
  testEnvironment: './prisma/prisma-test-env.ts',
  testRegex: '.e2e.spec.ts$',
}

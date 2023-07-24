import { Left, Right, left, right } from './either'

describe('Either', () => {
  it('should create an instance of Left with the correct value', () => {
    const leftValue = 42
    const instance = new Left(leftValue)

    expect(instance.isLeft()).toBe(true)
    expect(instance.isRight()).toBe(false)
    expect(instance.value).toBe(leftValue)
  })

  it('should create an instance of Right with the correct value', () => {
    const rightValue = 'success'
    const instance = new Right(rightValue)

    expect(instance.isLeft()).toBe(false)
    expect(instance.isRight()).toBe(true)
    expect(instance.value).toBe(rightValue)
  })
})

describe('left', () => {
  it('should create an instance of Left with the correct value', () => {
    const leftValue = 42
    const instance = left(leftValue)

    expect(instance.isLeft()).toBe(true)
    expect(instance.isRight()).toBe(false)
    expect(instance.value).toBe(leftValue)
  })
})

describe('right', () => {
  it('should create an instance of Right with the correct value', () => {
    const rightValue = 'success'
    const instance = right(rightValue)

    expect(instance.isLeft()).toBe(false)
    expect(instance.isRight()).toBe(true)
    expect(instance.value).toBe(rightValue)
  })
})

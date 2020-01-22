import { Length } from './index'

describe('Length', () => {
  it("should 1 'foot' equals 1 'foot'", () => {
    const length = new Length(1, Length.FOOT)

    expect(length.getValue()).toEqual(1)
    expect(length.getUnit()).toEqual(Length.FOOT)
  })

  it("should 1 'foot' equals 12 inches", () => {
    const result = new Length(1, Length.FOOT).parseTo('inch')

    expect(result.getValue()).toEqual(12)
    expect(result.getUnit()).toEqual('inch')
  })

  it("should 3 feet equals 1 'yard'", () => {
    const result = new Length(3, Length.FOOT).parseTo(Length.YARD)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Length.YARD)
  })

  it("should 1 'yard' equals 3 feet", () => {
    const result = new Length(1, Length.YARD).parseTo(Length.FOOT)

    expect(result.getValue()).toEqual(3)
    expect(result.getUnit()).toEqual(Length.FOOT)
  })

  it("should 1 'yard' equals 36 inches", () => {
    const result = new Length(1, Length.YARD).parseTo('inch')

    expect(result.getValue()).toEqual(36)
    expect(result.getUnit()).toEqual('inch')
  })

  it("should 1 'yard' equals 1 'yard'", () => {
    const result = new Length(1, Length.YARD).parseTo(Length.YARD)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Length.YARD)
  })

  it("should 12 inches equals 1 'foot'", () => {
    const result = new Length(12, 'inch').parseTo(Length.FOOT)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Length.FOOT)
  })

  it("should 36 inches equals 1 'yard'", () => {
    const result = new Length(36, 'inch').parseTo(Length.YARD)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Length.YARD)
  })

  it("should 1 inch equals 1 'inch'", () => {
    const result = new Length(1, 'inch').parseTo('inch')

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual('inch')
  })
})

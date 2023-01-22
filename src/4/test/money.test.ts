import { Dollar } from '../value-object/Dollar'

describe('Money', () => {
  test('掛け算できるか', () => {
    const five = new Dollar(5)

    expect(new Dollar(10)).toStrictEqual(five.times(2))
    expect(new Dollar(15)).toStrictEqual(five.times(3))
  })

  test('等価比較できるか', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(6).equals(new Dollar(6))).toBeTruthy()
  })
})

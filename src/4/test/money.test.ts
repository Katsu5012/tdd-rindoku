import { Dollar } from '../value-object/Dollar'

describe('Money', () => {
  test('掛け算できるか', () => {
    const five = new Dollar(5)
    let product = five.times(2)
    expect(10).toEqual(product.amount)
    product = five.times(3)
    expect(15).toEqual(product.amount)
  })

  test('等価比較できるか', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(6).equals(new Dollar(6))).toBeTruthy()
  })
})

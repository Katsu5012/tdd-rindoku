import { Dollar } from './1';

describe("1章テスト", () => {
  it("testMultiplication", () => {
    const five = new Dollar(5);
		five.times(2);
    expect(10).toEqual(five.amount);
  });
});

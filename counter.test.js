const counter = require('./counter');

describe('counter', () => {
  it('returns "Red: 1" when input is "Red" ', () => {
    expect(couter("Red")).toEqual("Red: 1");
  });
});

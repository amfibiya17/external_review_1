const counter = require('./counter');

describe('counter', () => {
  it('returns "Red: 1" when input is "Red" ', () => {
    expect(counter("Red")).toEqual("Red: 1");
  });
});

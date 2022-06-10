const counter = require('./counter');

describe('counter', () => {
  it('returns "Red: 1" when input is "Red" ', () => {
    expect(counter("Red")).toEqual("Red: 1");
  });

  it('returns "Amber: 1\nRed: 1" when input is "Amber, Red" ', () => {
    expect(counter("Amber, Red")).toEqual("Amber: 1\nRed: 1");
  });
});

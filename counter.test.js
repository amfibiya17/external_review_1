const counter = require('./counter');

describe('counter', () => {
  it('returns "Red: 1" when input is "Red" ', () => {
    expect(counter("Red")).toEqual("Red: 1");
  });

  it('returns "Amber: 1" when input is "Amber" ', () => {
    expect(counter("Amber")).toEqual("Amber: 1");
  });
});

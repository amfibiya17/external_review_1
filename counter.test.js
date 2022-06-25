const counter = require('./counter');

describe('counter', () => {
  it('returns "Red: 1" when input is "Red" ', () => {
    expect(counter("Red")).toEqual("Red: 1");
  });

  it('returns "Amber: 1" when input is "Amber" ', () => {
    expect(counter("Amber")).toEqual("Amber: 1");
  });

  it('returns "Green: 1" when input is "Green" ', () => {
    expect(counter("Green")).toEqual("Green: 1");
  });

  it('returns "Uncounted: 1" when input is "Purple" ', () => {
    expect(counter("Purple")).toEqual("Uncounted: 1");
  });

  it('returns "Red: 3" when input is "Red, Red, Red" ', () => {
    expect(counter("Red, Red, Red")).toEqual("Red: 3");
  });

  it('returns "Green: 2\nAmber: 2\nRed: 2\nUncounted: 3" when input is "Green, Green, Amber, Red, Pink, Purple, Blue, Red, Amber" ', () => {
    expect(counter("Green, Green, Amber, Red, Pink, Purple, Blue, Red, Amber")).toEqual("Green: 2\nAmber: 2\nRed: 2\nUncounted: 3");
  });
});

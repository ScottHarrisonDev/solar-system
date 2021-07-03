const rewire = require("rewire");
const Planet = rewire('./Planet.tsx');

const ageParser = Planet.__get__('ageParser');

describe("ageParser", () => {
  test("Should take a number of any size and output a formatted string", async () => {
    expect(ageParser(100)).toEqual('100');
    expect(ageParser(1000000)).toEqual('1,000,000');
    expect(ageParser(23534654366)).toEqual('23,534,654,366');
    expect(ageParser(0)).toEqual('0');
  });
});

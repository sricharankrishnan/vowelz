/* app imports */
import Vowelz from "../src/index.js";

/* t-suite */
describe("Vowelz - countAllVowels method", () => {
  let myVowelz = null;

  beforeAll(() => {
    myVowelz = new Vowelz();
  });

  afterAll(() => {
    myVowelz = null;
  });

  test("returns all vowels as 'zero' count if input string is empty", () => {
    const input = "";
    const output = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0
    };
    const result = myVowelz.countAllVowels(input);
    expect(result).toEqual(output);
  });

  test("returns all vowels as 'zero' count if there are no vowels in input string", () => {
    const input = "My Rhythms fly. My rhythms cry.";
    const output = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0
    };
    const result = myVowelz.countAllVowels(input);
    expect(result).toEqual(output);
  });

  test("returns the correct count of all vowels from an input string", () => {
    const input = "Hello World. This is a test message";
    const output = {
      a: 2,
      e: 4,
      i: 2,
      o: 2,
      u: 0
    };
    const result = myVowelz.countAllVowels(input);
    expect(result).toEqual(output);
  });
});

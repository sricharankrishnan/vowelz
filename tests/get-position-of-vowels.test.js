/* app imports */
const Vowelz = require("../src/index.js");

/* t-suite */
describe("Vowelz - getPositionsOfVowels method", () => {
  let myVowelz = null;

  beforeAll(() => {
    myVowelz = new Vowelz();
  });

  afterAll(() => {
    myVowelz = null;
  });

  test("provides the correct result even when are duplicate vowels", () => {
    const input = "Pool Table";
    const output = [1, 2, 6, 9];
    const result = myVowelz.getPositionsOfVowels(input);
    expect(result).toEqual(output);
  });

  test("result prevserves order of indices for vowels in input string", () => {
    const input = "hello world";
    const output = [1, 4, 7];
    const result = myVowelz.getPositionsOfVowels(input);
    expect(result).toEqual(output);
  });

  test("no vowels in string: results in empty array", () => {
    const input = "~!@#$%^&*()_+1234567890";
    const output = [];
    const result = myVowelz.getPositionsOfVowels(input);
    expect(result).toEqual(output);
  });

  test("empty string input: results in empty array", () => {
    const input = "";
    const output = [];
    const result = myVowelz.getPositionsOfVowels(input);
    expect(result).toEqual(output);
  });

  test("returns an array of numbers, which are indices of vowels in input", () => {
    const input = 'Hello, World! This is a test string.';
    const output = [1, 4, 8, 16, 19, 22, 25, 32];
    const result = myVowelz.getPositionsOfVowels(input);
    expect(result).toEqual(output);
  });
});

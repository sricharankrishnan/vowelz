/* app imports */
const Vowelz = require("../src/index.js");

/* t-suite */
describe("Vowelz - removeAllVowelsFromString method", () => {
  let myVowelz = null;

  beforeAll(() => {
    myVowelz = new Vowelz();
  });

  afterAll(() => {
    myVowelz = null;
  });

  test("no changes to string if there are no vowels", () => {
    const input = "Fry Dry";
    const output = "Fry Dry";
    const result = myVowelz.removeAllVowelsFromString(input);
    expect(result).toBe(output);
  });

  test("returns an empty string if input is empty", () => {
    const input = "";
    const output = "";
    const result = myVowelz.removeAllVowelsFromString(input);
    expect(result).toBe(output);
  });

  test("removes all vowels from a given string", () => {
    const input = "Hello World!";
    const output = "Hll Wrld!";
    const result = myVowelz.removeAllVowelsFromString(input);
    expect(result).toBe(output);
  });
});

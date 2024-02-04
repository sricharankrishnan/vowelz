/* app imports */
const Vowelz = require("../src/index.js");

/* t-suite */
describe("Vowelz - vowelEncryption method", () => {
  let myVowelz = null;

  beforeAll(() => {
    myVowelz = new Vowelz();
  });

  afterAll(() => {
    myVowelz = null;
  });

  test("does not modify the input string if there are no vowels", () => {
    const input = "My Rhythms fly. My rhythms cry.";
    const output = "My Rhythms fly. My rhythms cry.";
    const result = myVowelz.vowelEncryption(input);
    expect(result).toBe(output);
  });

  test("returns an empty string if the input is an empty string as well", () => {
    const input = "";
    const output = "";
    const result = myVowelz.vowelEncryption(input);
    expect(result).toBe(output);
  });

  test("correctly encrpts all vowels in an input string", () => {
    const input = "EutopiA";
    const output = "3*t0p!@";
    const result = myVowelz.vowelEncryption(input);
    expect(result).toBe(output);
  });

  test("replaces 'u' or 'U' with '*' in the input string", () => {
    const input = "unDug";
    const output = "*nD*g"
    const result = myVowelz.vowelEncryption(input);
    expect(result).toBe(output);
  });

  test("replaces 'o' or 'O' with '0' in the input string", () => {
    const input = "BoOm";
    const output = "B00m"
    const result = myVowelz.vowelEncryption(input);
    expect(result).toBe(output);
  });

  test("replaces 'i' or 'I' with '!' in the input string", () => {
    const input = "SkiIng";
    const output = "Sk!!ng"
    const result = myVowelz.vowelEncryption(input);
    expect(result).toBe(output);
  });

  test("replaces 'e' or 'E' with '3' in the input string", () => {
    const input = "DeEp";
    const output = "D33p"
    const result = myVowelz.vowelEncryption(input);
    expect(result).toBe(output);
  });

  test("replaces 'a' or 'A' with '@' in the input string", () => {
    const input = "BANaNa";
    const output = "B@N@N@";
    const result = myVowelz.vowelEncryption(input);
    expect(result).toBe(output);
  });
});

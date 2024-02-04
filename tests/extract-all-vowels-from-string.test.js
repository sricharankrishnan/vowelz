/* app imports */
import Vowelz from "../src/index.js";

/* t-suite */
describe("Vowelz - extractAllVowelsFromString method", () => {
  let myVowelz = null;

  beforeAll(() => {
    myVowelz = new Vowelz();
  });

  afterAll(() => {
    myVowelz = null;
  });

  test("will also extract duplicate strings from the input", () => {
    const input = "Pool Table";
    const output = ["o", "o", "a", "e"];
    const result = myVowelz.extractAllVowelsFromString(input);
    expect(result).toEqual(output);
  });

  test("preserves the order of vowels in the input string", () => {
    const input = "Beautiful World";
    const output = ["e", "a", "u", "i", "u", "o"];
    const result = myVowelz.extractAllVowelsFromString(input);
    expect(result).toEqual(output);
  });

  test("gives an empty array output if no vowels are present in the input", () => {
    const input = "1234567890!@#$%^&*()~_+";
    const output = [];
    const result = myVowelz.extractAllVowelsFromString(input);
    expect(result).toHaveLength(0);
    expect(result).toEqual(output);
  });

  test("returns an empty array if the input string is empty", () => {
    const input = "";
    const output = [];
    const result = myVowelz.extractAllVowelsFromString(input);
    expect(result).toHaveLength(0);
    expect(result).toEqual(output);
  });

  test("the ouput array of vowels is of the right length", () => {
    const input = "Hello World";
    const output = 3;
    const result = myVowelz.extractAllVowelsFromString(input);
    expect(result).toHaveLength(output);
  });

  test("correct extracts all vowels from a given string", () => {
    const input = "Hello, World! This is a test string.";
    const output = ["e", "o", "o", "i", "i", "a", "e", "i"];
    const result = myVowelz.extractAllVowelsFromString(input);
    expect(result).toEqual(output);
  });
});

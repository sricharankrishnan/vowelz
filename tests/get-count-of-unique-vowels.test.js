/* app imports */
import Vowelz from "../src/index.js";

/* t-suite */
describe("Vowelz - getCountOfUniqueVowels method", () => {
  let myVowelz = null;

  beforeAll(() => {
    myVowelz = new Vowelz();
  });

  afterAll(() => {
    myVowelz = null;
  });

  test("provides the right count even if input has both lower and uppercase", () => {
    const input = "aAeEiIoOuU";
    const output = 5;
    const result = myVowelz.getCountOfUniqueVowels(input);
    expect(result).toBe(output);
  });

  test("returns the right count if there are no duplicate vowels", () => {
    const input = "Eutopia";
    const output = 5;
    const result = myVowelz.getCountOfUniqueVowels(input);
    expect(result).toBe(output);
  });

  test("gives the result as 'zero' if empty string is passed", () => {
    const input = "";
    const output = 0;
    const result = myVowelz.getCountOfUniqueVowels(input);
    expect(result).toBe(output);
  });

  test("returns the count of unique vowels in a string", () => {
    const input = "Hello World!";
    const output = 2; /* because unique vowels are 'e' and 'o' */
    const result = myVowelz.getCountOfUniqueVowels(input);
    expect(result).toBe(output);
  });
});

/* app imports */
import Vowelz from "../src/index.js";

/* t-suite */
describe("Vowelz - setAllVowelsToLowerCase method", () => {
  let myVowelz = null;

  beforeAll(() => {
    myVowelz = new Vowelz();
  });

  afterAll(() => {
    myVowelz = null;
  });

  test("does not alter the input string if there are no vowels", () => {
    const input = "~!@#$%^&*()_+1234567890";
    const output = "~!@#$%^&*()_+1234567890";
    const result = myVowelz.setAllVowelsToLowerCase(input);
    expect(result).toBe(output);
  });

  test("returns an empty string if the input was an empty string", () => {
    const input = "";
    const output = "";
    const result = myVowelz.setAllVowelsToLowerCase(input);
    expect(result).toBe(output);
  });

  test("correctly sets all vowels in a string to uppercase", () => {
    const input = "HEllO WOrld! ThIs Is A tEst mEssAgE.";
    const output = "Hello World! This is a test message.";
    const result = myVowelz.setAllVowelsToLowerCase(input);
    expect(result).toBe(output);
  });
});

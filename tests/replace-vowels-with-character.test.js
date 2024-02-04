/* app imports */
import Vowelz from "../src/index.js";

/* t-suite */
describe("Vowelz - replaceVowelsWithCharacter method", () => {
  let myVowelz = null;

  beforeAll(() => {
    myVowelz = new Vowelz();
  });

  afterAll(() => {
    myVowelz = null;
  });

  test("throws an error if 'character arg' length is greater than 1", () => {
    function demoWrapper() {
      myVowelz.replaceVowelsWithCharacter("Hello World", "**");
    }
    expect(demoWrapper).toThrow();
  });

  test("will not modify the input string if there are no vowels", () => {
    const character = "&";
    const input = "1234567890~!@#$%^&*()_+";
    const output = "1234567890~!@#$%^&*()_+";
    const results = myVowelz.replaceVowelsWithCharacter(input, character);
    expect(results).toBe(output);
  });

  test("will return an empty string if the input string is empty", () => {
    const character = "&";
    const input = "";
    const output = "";
    const results = myVowelz.replaceVowelsWithCharacter(input, character);
    expect(results).toBe(output);
  });

  test("correctly replaces vowels with a given character", () => {
    const character = "&";
    const input = "The sky is blue";
    const output = "Th& sky &s bl&&";
    const results = myVowelz.replaceVowelsWithCharacter(input, character);
    expect(results).toBe(output);
  });
});

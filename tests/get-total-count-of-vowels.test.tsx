/* app imports */
const Vowelz = require("../src/index.js");

/* t-suite */
describe("Vowelz - getTotalCount method", () => {
  let myVowelz = null;

  beforeAll(() => {
    myVowelz = new Vowelz();
  });

  afterAll(() => {
    myVowelz = null;
  });

  test("result includes duplicate vowels present in input string", () => {
    const input = "Pool Table";
    const output = 4;
    const result = myVowelz.getTotalCount(input);
    expect(result).toBe(output);
  });

  test("will return 'zero' if there are no vowels present", () => {
    const input = "";
    const output = 0;
    const result = myVowelz.getTotalCount(input);
    expect(result).toBe(output);
  });

  test("will return 'zero' if input string is empty", () => {
    const input = "";
    const output = 0;
    const result = myVowelz.getTotalCount(input);
    expect(result).toBe(output);
  });

  test("evaluates and returns correct number of vowels in an input string", () => {
    const input = "Hello, World! This is a test string.";
    const output = 8;
    const result = myVowelz.getTotalCount(input);
    expect(result).toBe(output);
  });

  test("return a number type when caluclating total count of vowels", () => {
    const input = "Hello World!";
    const result = myVowelz.getTotalCount(input);
    expect(typeof result).toBe("number");
  });
});

/* app imports */
import Vowelz from "../src/index.js";

/* t-suite */
describe("Vowelz - Methods Accepts Only String Args", () => {
  let myVowelz = null;
  const stringArg = "hello world!";
  const nonStringArg = 10;

  beforeAll(() => {
    myVowelz = new Vowelz();
  });

  afterAll(() => {
    myVowelz = null;
  });

  test("removeAllVowelsFromString() - accepts only string arg", () => {
    expect(() => {
      myVowelz.removeAllVowelsFromString(stringArg);
    }).not.toThrow();

    expect(() => {
      myVowelz.removeAllVowelsFromString(nonStringArg);
    }).toThrow();
  });

  test("getCountOfUniqueVowels() - accepts only string arg", () => {
    expect(() => {
      myVowelz.getCountOfUniqueVowels(stringArg);
    }).not.toThrow();

    expect(() => {
      myVowelz.getCountOfUniqueVowels(nonStringArg);
    }).toThrow();
  });

  test("extractAllVowelsFromString() - accepts only string arg", () => {
    expect(() => {
      myVowelz.extractAllVowelsFromString(stringArg);
    }).not.toThrow();

    expect(() => {
      myVowelz.extractAllVowelsFromString(nonStringArg);
    }).toThrow();
  });

  test("getPositionsOfVowels() - accepts only string arg", () => {
    expect(() => {
      myVowelz.getPositionsOfVowels(stringArg);
    }).not.toThrow();

    expect(() => {
      myVowelz.getPositionsOfVowels(nonStringArg);
    }).toThrow();
  });

  test("getCount() - accepts only string arg", () => {
    expect(() => {
      myVowelz.getCount(stringArg);
    }).not.toThrow();

    expect(() => {
      myVowelz.getCount(nonStringArg);
    }).toThrow();
  });

  test("setAllVowelsToUppercase() - accepts only string arg", () => {
    expect(() => {
      myVowelz.setAllVowelsToUppercase(stringArg);
    }).not.toThrow();

    expect(() => {
      myVowelz.setAllVowelsToUppercase(nonStringArg);
    }).toThrow();
  });

  test("setAllVowelsToLowerCase() - accepts only string arg", () => {
    expect(() => {
      myVowelz.setAllVowelsToLowerCase(stringArg);
    }).not.toThrow();

    expect(() => {
      myVowelz.setAllVowelsToLowerCase(nonStringArg);
    }).toThrow();
  });

  test("countAllVowels() - accepts only string arg", () => {
    expect(() => {
      myVowelz.countAllVowels(stringArg);
    }).not.toThrow();

    expect(() => {
      myVowelz.countAllVowels(nonStringArg);
    }).toThrow();
  });

  test("replaceVowelsWithCharacter() - accepts only string arg", () => {
    expect(() => {
      myVowelz.replaceVowelsWithCharacter(stringArg, "&");
    }).not.toThrow();

    expect(() => {
      myVowelz.vowelEncryption(nonStringArg, "&");
    }).toThrow();
  });

  test("vowelEncryption() - accepts only string arg", () => {
    expect(() => {
      myVowelz.vowelEncryption(stringArg);
    }).not.toThrow();

    expect(() => {
      myVowelz.vowelEncryption(nonStringArg);
    }).toThrow();
  });
});

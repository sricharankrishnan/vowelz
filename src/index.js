class Vowelz {
  /* incoming arg validator - must be string only */
  checkIfPropIsString(arg) {
    if (typeof arg !== "string") {
      return false;
    }
    return true;
  }

  /* vowel encryptoin */
  vowelEncryption(arg) {
    var $this = this;
    if (!$this.checkIfPropIsString(arg)) {
      throw new Error(`Needed argument to be of type string but is not: ${arg}`);
      return;
    }

    const encryptionMap = {
      a: '@',
      e: '3',
      i: '!',
      o: '0',
      u: '*'
    };
    return arg.replace(/[aeiou]/gi, vowel => encryptionMap[vowel.toLowerCase()] || vowel);
  }

  /* replace vowels with a given character */
  replaceVowelsWithCharacter(arg, character) {
    var $this = this;
    if (!$this.checkIfPropIsString(arg)) {
      throw new Error(`Needed argument to be of type string but is not: ${arg}`);
      return;
    }
    else if (typeof character !== 'string' || character.length !== 1) {
      throw new Error('Character must be a single character string.');
      return;
    }
    else {
      return arg.replace(/[aeiou]/gi, character);
    }
  }

  /* counts the number of vowels */
  countAllVowels(arg) {
    var $this = this;
    if (!$this.checkIfPropIsString(arg)) {
      throw new Error(`Needed argument to be of type string but is not: ${arg}`);
      return;
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelCounts = {};

    vowels.forEach(vowel => {
      const regex = new RegExp(vowel, 'gi');
      const matches = arg.match(regex);
      vowelCounts[vowel] = matches ? matches.length : 0;
    });

    return vowelCounts;
  }

  /* sets all vowels to lower case */
  setAllVowelsToLowerCase(arg) {
    var $this = this;
    if (!$this.checkIfPropIsString(arg)) {
      throw new Error(`Needed argument to be of type string but is not: ${arg}`);
      return;
    }

    return arg.replace(/[aeiou]/gi, (match) => {
      return match.toLowerCase();
    });
  }

  /* sets all vowels to upper case */
  setAllVowelsToUpperCase(arg) {
    var $this = this;
    if (!$this.checkIfPropIsString(arg)) {
      throw new Error(`Needed argument to be of type string but is not: ${arg}`);
      return;
    }

    return arg.replace(/[aeiou]/gi, (match) => {
      return match.toUpperCase();
    });
  }

  /* get how many vowels are there in a string value */
  getTotalCount(arg) {
    var $this = this;
    if (!$this.checkIfPropIsString(arg)) {
      throw new Error(`Needed argument to be of type string but is not: ${arg}`);
      return;
    }

    const matches = arg.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  }

  /* get the positions of the vowels in the string */
  getPositionsOfVowels(arg) {
    var $this = this;
    if (!$this.checkIfPropIsString(arg)) {
      throw new Error(`Needed argument to be of type string but is not: ${arg}`);
      return;
    }

    const positions = [];
    arg.replace(/[aeiou]/gi, (match, index) => {
      positions.push(index);
    });
    return positions;
  }

  /* get all the vowels from a string */
  extractAllVowelsFromString(arg) {
    var $this = this;
    if (!$this.checkIfPropIsString(arg)) {
      throw new Error(`Needed argument to be of type string but is not: ${arg}`);
      return;
    }

    return arg.match(/[aeiou]/gi) || [];
  }

  /* gets the count of all unique vowels in a string */
  getCountOfUniqueVowels(arg) {
    var $this = this;
    if (!$this.checkIfPropIsString(arg)) {
      throw new Error(`Needed argument to be of type string but is not: ${arg}`);
      return;
    }

    const uniqueVowels = new Set(arg.toLowerCase().match(/[aeiou]/g));
    return uniqueVowels.size;
  }

  /* removes all the vowels in a string */
  removeAllVowelsFromString(arg) {
    var $this = this;
    if (!$this.checkIfPropIsString(arg)) {
      throw new Error(`Needed argument to be of type string but is not: ${arg}`);
      return;
    }

    return arg.replace(/[aeiou]/gi, '');
  }
}
export default Vowelz;

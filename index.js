class Vowelz {
  /* incoming arg validator - must be string only */
  checkIfPropIsString(arg) {
    if (typeof arg !== "string") {
      return false;
    }
    return true;
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
  setAllVowelsToUppercase(arg) {
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
  getCount(arg) {
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

    const uniqueVowels = new Set(arg.match(/[aeiou]/gi));
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

# Vowelz
![NPM Downloads](https://img.shields.io/npm/dt/vowelz)
![Maintenance](https://img.shields.io/maintenance/yes/2024)


### About
A JavaScript library for efficient manipulation of vowels within strings. Count, transform case, extract positions, and perform various operations on vowels with ease.
<br/><br/>

### Getting Started
- Download the NPM Package into your application folder
```console
foo@foobar-terminal~: npm install --save vowelz
```
- Import the package into your respectie file. Please note that the package has a default export.
```javascript
/* node module imports */
const Vowelz = require("vowelz");
```
- Create a class instance of the imported package and then you can, directly use a method. More details about the method APIS in the following section
```javascript
/* node module imports */
const Vowelz = require("vowelz");

/* create an instance and use methods... */
const myVowelz = new Vowelz();
console.log("How many vowels are there in the word: ", myVowelz.getTotalCount("hello world"));
```
<br/>

### Usage (Methods/API)
- ```getTotalCount(arg: string):``` returns the number of vowels that are present in a string value. Takes in one argument which must be a string only.
- ```getPositionsOfVowels(arg: string):``` returns the index values of the vowels that are present in a string value. Takes in one argument which must be a string only.
- ```extractAllVowelsFromString(arg: string):``` returns all of the vowels that are present in a string. Takes in one argument which must be a string only.
- ```getCountOfUniqueVowels(arg: string):``` returns the number of vowels in a string (non repeating). Takes in one argument which must be a string only.
- ```removeAllVowelsFromString(arg: string):``` removes all vowels in a string and then returns the string. Takes in one argument which must be a string only.
- ```setAllVowelsToUppercase(arg: string):``` converts all vowels present in a string value to uppercase. Takes in one argument which must be a string only.
- ```setAllVowelsToLowerCase(arg: string):``` converts all vowels present in a string value to lowercase. Takes in one argument which must be a string only.
- ```countAllVowels(arg: string):``` provides a count of individual vowels in a string value and returns the result in the form of an object. Takes in one argument which must be a string only.
- ```replaceVowelsWithCharacter(arg: string, character: string):``` replaces vowels in a string with the given custom character argument. Both <b>arg</b> and <b>character</b> are mandatory. The character argument is to be a single character only.
- ```vowelEncryption(arg: string):``` method returns a string value with vowels that are convered to encyrpted characters. Takes in one argument which must be a string only.
<br/><br/>

### Contributions
Do you have an idea? May be you wish to add another method to this existing library? Or perhaps you've found a bug? Please feel free to raise a github issue and I would resolve it at the earliest possible.
<br/><br/>

### Support
If you like this project, I would really appreciate you placing a star on the github project. This would really help encourage me to become a better developer. Speak to your friends and colleagues about this project too if you can and seek their support. Here is wishing you a nice day and happy coding. Cheers!

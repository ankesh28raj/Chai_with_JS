const name = "abv"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('xyzabc-fhfh-dhdhf')
//console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));

// console.log(gameName.indexOf('b'));

const newString = gameName.substring(0,-4);
console.log(newString);

const string2 = gameName.slice(-1, -3);
//console.log(string2);

const string3 = "       abc      "
console.log(string3);
console.log(string3.trim()); //only for whitespaces

const url = "https://abc.com/abc%20"
console.log(url.replace('%20', '-'))
console.log(url.includes('abc'))

console.log(gameName.split('-'));
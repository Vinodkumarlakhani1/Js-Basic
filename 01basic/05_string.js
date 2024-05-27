const name = "vinod";
const repoCount = 50;

// console.log(name + repoCount + "value");

// console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("vinod kumar");
// console.log(gameName[0]);
// console.log(gameName.__proto__); 

// use prototype

// console.log(gameName.charAt);
// string methods 
// let length = gameName.length;
// console.log(length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));
console.log(gameName.toUpperCase());
const newString = gameName.substring(0, 8)
console.log(newString);

const anotherString = gameName.slice(-8, 5);

console.log(anotherString)


const newStringOne = "  Vinod   ";

console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());



const url = "https://www.w3schools.com/js/js_string_methods.asp";

console.log(url.replace('_', '.'));
console.log(url.includes('vinod'));

console.log(gameName.split('_'));


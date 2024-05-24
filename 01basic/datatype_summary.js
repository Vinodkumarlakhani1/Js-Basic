// there two type of datatype 
// 01 primitive data type  mean call by memory 
  

// there are seven type 
// string, Number, Boolean, Null, undefined, symbol, BigInt

// Symbol mean kasi bhi chiz o unique bnany k layi use keya jata h


// javascript is dynamically typed language h
// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

const score = 100;
// const scoreValue = 100.2;JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('122');
console.log(id);
console.log(anotherId);

console.log(id === anotherId);

const bigNumber = 3554648484488n;
console.log(typeof bigNumber);





// 02 non primitive data type  mean reference datatype
// Array, Object, Function


const hero = ["shaktiman", "naagraj", "doga"];
const myObj = {
    name: "vinod",
    age: 25


}
// create function in variable
// function ka data type function ata h lakin ya h retrun function object  
const myFunction = function (){
console.log("hello world");
}

console.log(typeof hero);
console.log(typeof myObj);
console.log(typeof myFunction);


console.log(typeof myObj);



//***************** Memory  */


// stack memory or heap memory

// stack memory use for primitive datatype  copymemory 

let myYoutubeName = "abc";

let anOthername = myYoutubeName;
anOthername = "bcd";
console.log(anOthername);
console.log(myYoutubeName);



// heap memory use for non-primitive datatype  referance

let userOne = { 
    email: "vinod@gmail.com",
    upi: "@asdsa"
}
console.log(userOne.email);
let userTwo = userOne;

userTwo.email = "lakhani@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);


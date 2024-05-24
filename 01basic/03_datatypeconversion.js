// let score = 33; number 
// let score = 33abs;

// let score = null;
let score = undefined;

// there are two methods to check the type
console.log(typeof score)
console.log(typeof(score));


let valueInNumber = Number(score); //convert datatype
console.log(typeof valueInNumber)
console.log(valueInNumber);


//"33" string ko convert karte hain to easyly convert ho jata h 33 number mn 
//"33abc"string ko convert karte hain to easyly convert nahe hota h 33 number NaN 
// NaN ka type h wo number he h 
  // ture convert hojati h 1 mn or false convert hote h 0 
//   let isLoggedIn = 1; convert true or false 
// let isLoggedIn = "";// empty string ko convert karin gi to false aai ga
let isLoggedIn = "vinod"; //agr hum string ko boolen mn convert kari n gi to hamin true mali ga

  let valueIsloggedIn = Boolean(isLoggedIn);
  console.log(valueIsloggedIn);


  // 1 => true ; 0 => false 
  //"" => false 
  //"vinod" => true

  let someNumber = 33 ;
  let stringNumber = String(someNumber);

  console.log(typeof stringNumber);
  console.log(stringNumber);

//****************************Opperations ******************* */


let value = 3;
let negValue = -value;
// console.log(negValue);
// console.log( 2 + 2);
// console.log( 2 - 2);
// console.log( 2 * 2);
// console.log( 2**2);

// console.log( 2 / 2);
// console.log( 2%3);


let str1 = "hello";
let str2 = " vinod";
let str3 = str1 + str2;
console.log(str3);

// problem yahan oe aati h

console.log("1" + 2);
console.log(1 + "2");

console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log( (3 + 4) * 5 / 8 - 5 % 6);

// console.log(true+1);
console.log(+true);
console.log(+"");


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // that is tarki quesion


// prefix and postfix

// prefix mn value pahle add hojati h or post fix mn value bad mn add hooti h 

let gameCounter = 100;
gameCounter++;
++gameCounter;


console.log(gameCounter);













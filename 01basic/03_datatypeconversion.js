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





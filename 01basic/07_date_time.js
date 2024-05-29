// DAte 

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString()); //Wed May 29 2024
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2023, 0, 23, 5, 3);
// let myCreateDate = new Date("2023-01-14");
let myCreateDate = new Date("02-12-2023");

// console.log(myCreateDate.toLocaleString());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime()); 
// console.log(Date.now(Math.floor()/1000)); 
let newDate = new Date();

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// console.log(`${newDate.getDay()} an the time `);

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'timeZone'
})







// singleton  constrector 
Object.create
// object literals 

const mysym = Symbol("key1")

const jsUser = {
    name: "vinod",
    "full name": "Vinod kumar",
    age: 26,
    [mysym]: "mykey1",
    city: "karachi",
    email: "vinodkumar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
}

// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);
// console.log(typeof jsUser.mysym);


// change data 

jsUser.email = "vklakhai@gmail.com";
// console.log(jsUser.email);


// Object.freeze(jsUser);
jsUser.email = "vklakhasi@gmail.com";

// console.log(jsUser.email);
// console.log(jsUser)



jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.email}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());






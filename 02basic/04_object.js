// const tinderUser = new Object();  // singleton
const tinderUser = {} // non singleton

tinderUser.id = "12253abs";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "vinod",
            lastname: "lakhani"
        }
    }
}

// console.log(regularUser.fullname.userfullname?.firstname);
const obj1 = {
    1: "a",
    2: "b",
    3: "c",
    
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f",
    
}
const obj4 = {
    7: "g",
    8: "h",
    9: "j",
    
}
// const obj3 = {...obj1, ...obj2} //spred
// const obj4 = {obj1, obj2}


// console.log(obj3);
// console.log(obj4);
const obj3 = Object.assign({}, obj1, obj2, obj4)

// console.log(obj3);


// data base sy jb bhi value aai gi wo array and object k form man aati h 

const users = [
    {
        id: 1,
        email: "vinodkumar#gmail.com"
    },
    {
        id: 1,
        email: "vinodkumar#gmail.com"
    },
    {
        id: 1,
        email: "vinodkumar#gmail.com"
    },
    {
        id: 1,
        email: "vinodkumar#gmail.com"
    },
    {
        id: 1,
        email: "vinodkumar#gmail.com"
    }
]

users[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "66666",
    courseInstructor: "vinod"
}

// course.courseInstructor;

const {courseInstructor: instructor} = course;
console.log(instructor);


// const navbar = ({company}) => {

// }
// navbar(company = "vinod") react uses


// api constap




// json 


// {
// "coursename": "js in hindi",
// "price": "66666",
// "courseInstructor": "vinod"
// }


// [
//     {},
// ]



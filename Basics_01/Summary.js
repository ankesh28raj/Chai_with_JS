//PRIMITIVE(7) => CALL BY VALUE 
// STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL, BIGINT

// REFERENCE TYPES/NON-PRIMITIVES
//ARRAYS, OBJECTS, FUNCTIONS

// const score = 100
// const scoreValue = 100.3


// const id = Symbol('123')
// const anotherId = Symbol("123")

//console.log(id == anotherId);


// const heroes = ["Sonpari", "Naagraj", "Doga", "Poer Rangers", "Chellam Sir"]
// let myObj = {
//     name : "abc",
//     age : 22
// }

const myFuntion = function(){ //treat func as variable
         console.log("Hello World");
}

console.log(myFuntion);

//------------------

//STACK(PRIMITIVES)
//HEAP(NON-PRIMITIVES)

let penName = "anni"


let anotherName = penName

// console.log(anotherName);

// console.log(penName);

let user1 = {
    email : "xyz@gmail.com",
    upi : "abc@paytm"
}

let user2 = user1

user2.email = "abc@gmail.com"

console.log(user1.email);
console.log(user2.email);



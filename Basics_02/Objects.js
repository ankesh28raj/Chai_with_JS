//singleton
//Object.create

const sym1 = Symbol("key1")

const jsUser = {
    name : "abc",
    "full name" : "abc xyz",
    [sym1] : "key1",     //---Synatx for SYMBOL
    age : 20,
    location : "Roorkee",
    email : "xyz@gmail.com",
    activity : false,
    lastLogin : ["Mon", "Wed"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); //kick
// console.log(jsUser[sym1]);

jsUser.email = "lmn@gamil.com"
//Object.freeze(jsUser)
jsUser.email = "pqr@gamil.com"  //WON'T BE UPDATED

//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello buddy...")
}
// console.log(jsUser.greeting);
// console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello buddy..., ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
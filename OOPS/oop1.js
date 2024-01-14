const user = {
    username : "abc",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        //console.log("get details");
        //console.log(`Username : ${this.username}`);
        //console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

function User(username, loginCount, signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const user1 = new User("abc", 12, true)
//the variable will overwrite the user1
const user2 = new User("xyz", 15, false)
console.log(user1.constructor);
//console.log(user2);


//NEW ----> multiple instance

//1) newobject created
//2) constructor function called
//3) args get injected

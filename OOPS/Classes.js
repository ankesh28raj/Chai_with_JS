// class User{
//     constructor(username, email, pwd){
//         this.username = username
//         this.email = email
//         this.pwd = pwd
//     }
//     encryptPwd(){
//         return `${this.pwd}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("abc", "abc@ex.com", "1234")

// console.log(chai.encryptPwd());
// console.log(chai.changeUsername());


//------>BEHIND THE SCENE
function User(username, email, pwd){
    this.username = username
    this.email = email
    this.pwd = pwd
}

User.prototype.encryptPwd = function(){
    return `${this.pwd}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("xyz", "xyz@ex.com", "987")

console.log(tea.encryptPwd());
console.log(tea.changeUsername());
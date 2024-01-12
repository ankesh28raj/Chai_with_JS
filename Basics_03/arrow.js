const user = {
    username : "ankesh",
    price : 134,

    welcomeMsg : function(){
        // console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }

}
// user.welcomeMsg()
// user.username = "anni "
// user.welcomeMsg()

//console.log(this);

// function chai(){
//     let username = "ankesh"
//     console.log(this.username); //can't use inside a function
// }
// chai()

// const chai = function(){
//     let username = "ankesh"
//     console.log(this.username);

// }
//chai()

const chai = ()  => {
    let username = "ankesh"
    //console.log(this);
}
chai()


// const add2 = (num1, num2) => {
//     return num1+num2     //EXPLICIT RETURN
// }
// console.log(add2(4,6));

const add2 = (num1, num2) =>  (num1+num2)    //IMPLICIT RETURN

const add3 = (num1, num2) =>  ({username : "ankesh"})

console.log(add2(5,7));
console.log((add3));
console.log(add3());


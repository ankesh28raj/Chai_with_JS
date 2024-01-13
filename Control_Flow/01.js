const isUserLoggedIn = true

// if(3 != 2){
//     console.log("executed");
// }

// if("2" == 2){
//     console.log("executed");
// }


// const temp = 15

// if(temp === 15){
//     console.log("Less than 50");
// }
// else{
//     console.log("Greater than 50");
// }


// const score = 200

// if(score>100){
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test");
// console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1200");
// }

const userActivity = true
const debitcard = true
const activityFromGoogle = false
const activityFromEmail = true

if (userActivity && debitcard && 2 == 2) {
    console.log("allowed!");
}

if (activityFromGoogle || activityFromEmail) {
    console.log("User logged in!");
}

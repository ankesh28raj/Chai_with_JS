// let myName = "ankesh     "
// console.log(myName.length);

// console.log(myName.trueLength());


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",


    getSpiderPower : function(){
        //console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ankesh = function(){
    //console.log(`ankesh is present in all objects`);
}

Array.prototype.heyAnky = function(){
    //console.log(`hey there`);
}

//heroPower.ankesh()
myHeroes.ankesh()
//heroPower.heyAnky()




//-----> INHERITANCE


const user = {
    name : 'chai',
    company : 'google'
}
const teacher = {
    makeVideo : true

}

const supportStaff = {
    isAvailable : false
}

const support = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : supportStaff

}

teacher.__pror__ = user


//---MODERN SYNTAX---
Object.setPrototypeOf(supportStaff, teacher)


let anotherUsername = "Chai Aur Code        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`$True length is : ${this.trim().length}`);
}
anotherUsername.trueLength()
"ankesh".trueLength()
"masala_chai".trueLength()
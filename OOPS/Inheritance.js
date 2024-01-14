class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, location){

        super(username)
        this.email = email
        this.location = location
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher("abc", "abc@ex.com", "123")
chai.addCourse()

const masalaChai = new User("xyz")
masalaChai.logMe()

console.log(chai == masalaChai);
console.log(chai === masalaChai);
console.log(chai == Teacher);
console.log(chai === Teacher);
console.log(chai instanceof User);
console.log(chai instanceof Teacher);
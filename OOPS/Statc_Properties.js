class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

     createId(){
        return `aaaaaaa`
    }
}

const ankesh = new User("ankesh")
//console.log(ankesh.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email
    }
}

const motog = new Teacher("Motog62", "moto@ex.com")
//motog.logMe();
console.log(motog.createId());
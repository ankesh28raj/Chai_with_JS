class User{
    constructor(email, pwd){
        this.email = email
        this.pwd = pwd
    }

    get pwd(){
        return `${this.pwd1} anni`

    }
    set pwd(value){
        this.pwd1 = value
    }

    get email(){
        return this.email1.toUpperCase()
    }
    set email(value){
         this.email1 = value

    }

    // get email(){

    // }
}

// const ankesh = new User("ankesh@ex.com", "ahgcccctyc")
// console.log(ankesh.pwd);

const ankesh = new User("ankesh@ex.com", "ahgcccctyc")
console.log(ankesh.email);
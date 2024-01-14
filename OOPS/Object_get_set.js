const User = {
    email1 : 'abc@ex.com',
    pwd1 : "fqewf",

    get email(){
        return this.email1.toUpperCase()

    },
    set email(value){
        this.email1 = value

    },
    get pwd(){
        return this.pwd1.toUpperCase()

    },
    set pwd(value){
        this.pwd1 = value
    
  }
}

const tea = Object.create(User)
console.log(tea.email);
console.log(tea.pwd);
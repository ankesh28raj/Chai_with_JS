function User(email, pwd){
    this.email = email;
    this.pwd = pwd
}

Object.defineProperty(this, 'email', {
    get : function(){
        return this.email1.toUpperCase()
    },
    set : function(value){
        this.email1 = value
    }
})
Object.defineProperty(this, 'pwd', {
    get : function(){
        return this.pwd1.toUpperCase()
    },
    set : function(value){
        this.pwd1 = value
    }
})

const chai = new User("abc@ex.com", "3441")
console.log(chai.email)
function setUsername(username){
    this.username = username
    console.log("Called");
}

function createUser(username, email, pwd){
    //username's reference is provided only, so not called inside the block
    //setUsername(username)
    
    //Now, reference is being held
    //call passes the Current Execution Context to another function
    setUsername.call(this, username)

    this.email = email
    this.pwd = pwd
}

const chai = new createUser("chai", "abc@ex.com", "123")
console.log(chai)
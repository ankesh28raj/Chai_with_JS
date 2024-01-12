function echo(){
    console.log("abc");
    console.log("xyz");
    console.log("pqr");
}

// function add(num1, num2){
//     console.log(num1 + num2);
// }
//add(null ,null)

function add(num1, num2){
    let result = num1 + num2
    //console.log("ankesh");
    return result;
}

            // function add(num1, num2){
            //    let result = num1 + num2
            //    return result;
            //    console.log("ankesh");  //---NO WORK AFTER RETURN STATEMENT
               
            // }

const  result = add(3, 6);
// console.log(result);

// console.log("Result : ", result);

function login_msg(username = "root"){
    if(username === undefined){
        //console.log("Please enter a valid username");
        return
    }


    return `${username} just logged in`
}

// console.log(login_msg("ankesh"))
// console.log(login_msg())  //--print undefined

function calc_cart_price(val1, val2, ...num1){
      // ... -> CALLED REST AS WELL AS SPREAD OPERATOR
    return num1
}
//console.log(calc_cart_price(200 ,450, 134));

const usr = {
    username : "abc",
    price : 123
}
function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
//handleObj(usr)

handleObj({
    username : "abc",
    price : 123
})

const arr = [123, 133, 1234, 124314]

function returnsecondvalue(getArr){
    return getArr[2]
}
console.log(returnsecondvalue(arr))
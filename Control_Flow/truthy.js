

//const userEmail = "abc.ai"
const userEmail = ""

if(userEmail){
    //console.log("Go to user email");
}
else{
    //console.log("Do not have the email");
}


// FALSY VALUES ------ false, 0, -0, BigInt(0n), "", null, undefined, NaN
// TRUTHY VALUES ------ true, "0", 'false', " ", [], {}, function(){}


if (userEmail.length === 0) {
    //console.log("array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    //console.log("Object is empty");
}

// NULLISH COALESCING OPERATOR (??) : null defined

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 
//val1 = undefined ?? 15
val1 = null ?? 20 ?? 10

//console.log(val1);


//---------TERNARY OPERATOR---------

      // condition ? true : false

      const iceTeaPrice = 100
      iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");;


//var c = 300

let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    //console.log("INNER : ", a);
}

//console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const username = "ankesh"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);

    two()
}
one()

if (true) {
    const username = "ankesh "
    if(username === "ankesh "){
        const website = "youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//-----------FUN TASK-----------------
add1(5)
function add1(num){
    return num+1

}
//add1(5)



//add2(10) 
const add2 = function(num){
    return num+2
}
// add2(10)
//  1) Global Execution --- this
//  2) Memory Phase-
         //val1, val2 -> undefined
         //add -> definition
         //result1, result2 -> undefined
 // 3) Execution Phase -
         //val1 <---- 10
         //val2 <---- 5
         //add -> (new Environment + Execution Thread)        
 
// total returned to Global Execution Phase 
// new Env. for total gets free

// result2 -> (new Environment + Execution Thread)

//-----CALL_STACK

                //three()      ^
                //two()        |
                //one()        | 
                //Global Exec  |


let val1 = 10
let val2 = 5
function add(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = add(val1,val2)
let result2 = add(10, 5)
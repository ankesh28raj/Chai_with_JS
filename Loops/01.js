// for 

for (let i = 0; i < 10; i++) {
    const element = i;

    if(element == 5){
    //console.log("5 is element");
    }
    //console.log(element);
}
//console.log(element);


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner loop value : ${`j`}`);
        
//     }
    
// }

// let arr = ["flash", "batman", "superman"]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }
// //console.log(element);


//------BREAK & CONTINUE

// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 is detected");
//         break;
//     }
//     console.log(`Value of i is ${index}`)
    
// }

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("..........5 is detected...........");
        continue
    }
    console.log(`Value of i is ${index}`)
    
}
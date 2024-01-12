// const myArr = [0,1,2,3,4,5, true, "abc", null, undefined]
// console.log(myArr);
// console.log(myArr.length);

//const arr = new Array(1,2,3,4,5)
//console.log(arr[4]);

// arr.push(6);
// console.log(arr);

// arr.unshift(9);
// console.log(arr);

// arr.shift();
// console.log(arr.includes(8));

// arr.unshift(9);
// console.log(arr.indexOf(9));

// const newArr = arr.join()

// console.log(arr);
// console.log(newArr);

// console.log("a ", arr);

// const arr1 = arr.slice(1,3);
// console.log(arr1);
// console.log("b ", arr);

// const arr2 = arr.splice(1,3);
// console.log("c ", arr);
// console.log(arr2);

const mcu = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//mcu.push(dc);

// console.log(mcu);
// console.log(mcu[3][1]);
const force = mcu.concat(dc);
//console.log(force);

//--------SPREAD OPERATOR--------

const force1 =[...mcu, ...dc] 
//console.log(force1);

const arr = [1,2,3, [4,5,6], 7, [8,9,10]]
const newArr= arr.flat(Infinity)
//console.log(newArr)

console.log(Array.from("Ankesh"))
console.log(Array.from({name : "Ankesh"})) //kick

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

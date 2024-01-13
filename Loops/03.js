//-----------forof loop-------------

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    //console.log(val);
    
}

const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}



//-----------MAPS--------->>> NOT REDUNDANT

const map = new Map()
map.set('IN', "INDIA")
map.set('US', "USA")
//console.log(map);


for (const [key, value] of map) {
    //console.log(key, '-', value);
    
}






const myObj = {
    'game1' : 'CZERO',
    'game2' : 'NFS',
    'game3' : 'FarCry'
}


//---------> NOT POSSIBLE WITH for loop
// for (const [key, value] of myObj) {
//     console.log(key, '-', value); 
    
// }
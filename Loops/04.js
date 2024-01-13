const myObj = {
    js : 'javascript',
    cpp : 'c++',
    py : 'python',
    rb : 'ruby'
}

for (const key in myObj) {
    //console.log(` ${key} shortcut is for ${myObj[key]}`);
}

const prgm = ["js", "rb", "py", "java", "cpp"]

for(const key in prgm){
    //console.log(prgm[key]);
}


// const map = new Map()
// map.set('IN', "INDIA")
// map.set('US', "USA")
// map.set('FR', "FRANCE")

// for(const key in map){
//     console.log(key); //------>Maps are not interatable
// }



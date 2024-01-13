const coding = ["js", "rb", "py", "java", "cpp"]



// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item, index, array) => {
    //console.log(item, index, array);
})


const myCoding = [
    {
        langName : "js",
        langFile : ".js"
    },

    {
        langName : "java",
        langFile : ".java"
    },

    {
        langName : "python",
        langFile : ".py"
    }
]

myCoding.forEach((item) => {
    console.log(item.langName);
    console.log(item.langFile);
})
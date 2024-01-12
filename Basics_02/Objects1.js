const onlyFans = new Object()

onlyFans.id = "123abc"
onlyFans.name = "xyz"
onlyFans.activity = false

//console.log(onlyFans)

const regularUser = {
    email : "xyz@gamil.com",
    fullname : {
        userfullname : {
            firstname : "abc",
            lastname : "xyz"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);


//GLASS IS SPREAD AFTER BREAKING INTO PIECES
const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);


//console.log(onlyFans)

// console.log(Object.keys(onlyFans));
// console.log(Object.values(onlyFans));
// console.log(Object.entries(onlyFans));

// console.log(onlyFans.hasOwnProperty('activity'));

// console.log(onlyFans.hasOwnProperty('activity1'));

const course = {
    coursename : "chai aur js",
    price : "999",
    courseInstructor : "hitesh"

}

const {courseInstructor} = course  //DESTRUCTURING OF OBJECTS

console.log(courseInstructor);

// const navbar = () => {

// }

// navbar(cmp = "mnc")


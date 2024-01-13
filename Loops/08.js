//-------REDUCE() METHOD----------


const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, curval){
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc+curval
// }, 0)


//--->Implication with ARROW function

const myTotal = myNums.reduce( (acc, curval) => acc+curval, 0)

//console.log(myTotal);


const shoppingCart = [
    {
      itemName : "js course",
      price : 12412
    },

    {
      itemName : "py course",
      price : 124
    },

    {
      itemName : "java course",
      price : 1241
    }
]

const priceTotal = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(priceTotal);
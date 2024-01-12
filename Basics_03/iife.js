//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS-(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log("DB CONNECTED TWO");
})();

(function cutting_chai() {
    console.log("DB CONNECTED Three");
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('ankesh')
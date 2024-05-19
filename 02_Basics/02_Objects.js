
// Object.create (iske andar singleton bnta hai , constructor method ke through)

// ______________________object literals____________________
const symbol1 = Symbol("key1")
const jsUser = {
     
     [symbol1] : "a", // [] when refering symbol
    "full name" : "Aman Sharma", // {key:"value"} key ko string maanta hai behind the scene
     age : 22,
     email : "amansharma.hp74@gmail.com"

}
/*

// access an object

// console.log(jsUser.name); (not veery good method)

console.log(jsUser["full name"]); // as key is taken as string ki trah access when []
console.log(jsUser[symbol1]);

// object ki values ko change :

jsUser.email = "abc@haha.com"
Object.freeze(jsUser) // lock the values aage ke changes nhi honge
console.log(jsUser);
*/
// add functions in object

jsUser.greetings = function () {
    return console.log(`Hello, ${this["full name"]} of age ${this[symbol1]}.`);
}
console.log(jsUser.greetings());

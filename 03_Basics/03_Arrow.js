const user = {
    username : "Aman",
    price : 334,
    welcome : function(){
        console.log(`${this.price} , is the price of course`);
        // console.log(this);  // current variables
    }

} 
user.welcome()
// user.price = 77 // coz we didnt hard coded hence could be changed
// user.welcome()

// console.log(this); is empty
////////////////////////////////////////////////////////

// declaring function through arrow functions

let obj = {
    num1 : 90,
    name: "Aman",
    age: function()  {console.log(`${this.name} is ${this.num1} years old`)
}
}
obj.age();

let add = (num1,num2) => num1 + num2
console.log(add(11,44))
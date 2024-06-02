function MyName(){
    console.log("aman");
}

// MyName()
// js mai data typre btane ki zarurat nhi

function Add(num1,num2) { // pasrameters
    return num1 + num2 // return ke baad koi kaam nhi krega function
}
let result = Add(44,66)
// console.log(typeof(Add(43,"55")));
// console.log(typeof(result)); // wapis kr rha undefined
function login(username){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(login());

function cart(...num1){
    return num1
}
console.log(cart(333,444,5,566,6,5,4,33,333,32)); // rest operator returns array 

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user = {
    username : "Aman",
    price : 55
}) // direct passing object
baba = {
    username : "papa",
    price: 940
}
handleObject(baba)

const NewArray = [44,404,55,33,33,22]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(NewArray));
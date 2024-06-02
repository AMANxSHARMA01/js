// var c = 900
let a = 990

if(!true){
let a = 55
console.log("Inner: ", a);
// var c = 66 // thats why var is bawaseer

}
// scope ke andar ki value bahar nhi jaaani chahiye

// console.log(a);

function one(){

    const username = "Aman"

    function two() {
        const website = "yahooo"
        console.log(username);
    }
    two()
    }
//  console.log(website);  

one()

// ***************************HOISTING**************************************

function addOne(num){
    return num + 1
}
console.log(addOne(5));

const addTwo = function(num){    // variables are powerfull in js
    return num +2
}
console.log(addTwo(9)); // this method initializes variable and store in it hence cant be executed before function declaration
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

console.log(login());
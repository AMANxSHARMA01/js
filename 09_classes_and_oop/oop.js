// const user = {
//     username: "Aman",
//     loginCount : 9,
//     signedIn: true,
//     getUserDetails: function(){
//         return this.username
//     }

// }

// console.log(user.username);
// console.log(user.getUserDetails());
function user (username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Hello ${this.username}`);
    }

    return this
}

const userOne = new user("Aman sharma", 13, false)
const userTwo = new user("chaman", 3, 1)

console.log(userOne.constructor);  // its reference
console.log(userOne instanceof user);
console.log(userTwo);
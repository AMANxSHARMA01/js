// const User = new Object() // singleton object

const User = {}
User.id = "123avb"
User.name = "ababa"
User.isLoggedIn = false

// console.log(User);
//object ke andar object
const regularUser = {
    email : "nana&djjk.com",
    fullname : {
        username : {
            first : "aman",
            last : "sharma"
        }
    }
}

// console.log(regularUser.fullname?.username.last); // optional chaining

// combine objects
const obj1 = {1:"a", 2 : "t"}
const obj2 = {3:"n", 4 : "p"}
// const obj3 = {...obj1,...obj2} // spread
// const obj3 = Object.assign({}, obj1, obj2) // target ko source mai merge {} becomes target baaki source

// console.log(obj3);

//database se array of object aayega (,) sepersted values

const users = [{
    id : 1,
    name:"nini"
},
{
    id : 2,
    name:"nini"
},{
    id : 3,
    name:"nini"
},{
    id : 4,
    name:"nini"
},{
    id : 5,
    name:"nini"
}]

console.log(users[0].name)// . to access object [] to array element
console.log(Object.entries(User)) // hr ek value ko array 
console.log(Object.values(regularUser)) // return is an array (useful)
console.log(regularUser.hasOwnProperty('fullname')) // to check wheather hai ya nhi key



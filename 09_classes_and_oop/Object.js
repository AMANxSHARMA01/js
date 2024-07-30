function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 3
// console.log(multiplyBy5(4));
// console.log(multiplyBy5.prototype);

function createUser(username, price) {
    this.username = username
    this.price  = price

    createUser.prototype.increment = function(){
        return this.price = ++price
    }

}

createUser.prototype.PrintMe = function (){
    console.log(`Price of chai is ${this.price}`);
    console.log(`Name of chai is ${this.username}`);

}
const chai = new createUser("AdrakChai",30)

chai.PrintMe()
console.log(chai.increment());
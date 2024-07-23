const one = function user (username , count, isLoggedIn) {
    this.username  = username
    this.count = count
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Hello ${this.username}`);
    }
    // return this
}

const user1 = new one("aman", 99, true)
const user2 = new one("chaman", 8, false)
console.log(user1 instanceof one);
console.log(user2.constructor);

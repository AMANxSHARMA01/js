class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        console.log(`ID : ${Math.floor((Math.random() * 1000 + 100))}`);
    }
}

const Aman = new User("Amann Sharma")
Aman.logMe()
// Aman.createId()

// Sometimes we would not want to give access of lets say createId to some object that got instantiated from User class
// for those cases we use "static" keyword
// child ko bhi no access

class Teacher extends User {
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const milk = new Teacher('amool',"moomoo@gmail.com")
milk.logMe()
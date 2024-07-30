class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email, pass){
        super(username)
        this.email = email
        this.pass = pass
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const User1 = new Teacher("aama","asadasd@kkf.com", 2202)
const User2 = new User("gaga", "ajaja@lol.com",3245)

User2.logMe()
User1.logMe()
console.log(User1 === User2);
console.log(User2 instanceof User);
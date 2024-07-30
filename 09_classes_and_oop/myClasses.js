class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this. password = password
    }
    encryptPass(){
        return `2132rfwdf${this.password}al2324`
    }
}

const person = new User("Aman", "amka@klk.com", 3209)

console.log(person.encryptPass());
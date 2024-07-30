function SetUserName(username) {
    this.username = username
    
}

function CreateaUser(username,email,password) {
        this.email = email
        this.password = password
        SetUserName.call(this, username)
}

const user = new CreateaUser("aman","aman@aman.com",233)
console.log(user);
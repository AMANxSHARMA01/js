class user {
    constructor(a,b) {
        // this.a = a
        this.b = b 
    }

    get a(){
        return `2309dsfsdf${this._c}909ifdsf`.toUpperCase()
    }

    set a(value){
        this._c = value
    }
}

const lol = new user("abc", "qwerty")
console.log(lol.a);
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    // get password(){
    //     return this._password.toUpperCase()
    // }
     get password(){
        return `${this._password}siddhesh`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const sid = new User("sid@gmail.com","1234")
console.log(sid.password)
console.log(sid.email);
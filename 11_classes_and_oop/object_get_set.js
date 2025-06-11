const User = {
    _email: 'sid@gmail.com',
    _password: '12321',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value

    }
}
const sid = Object.create(User)
console.log(sid._email);
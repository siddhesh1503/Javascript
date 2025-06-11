const user = {
    username: "Siddhesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        console.log(`Username: ${this.username}`);
    }
};


// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;
    return this; // optional in constructor
}


const userOne = new User("Siddhesh", 12, true)
const userTwo = new User("Javascript", 11, false)
console.log(userOne);
console.log(userTwo);

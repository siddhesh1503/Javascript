class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "1234342");  // ✅ Fixed with `new`
chai.addCourse();  // Output: A new course was added by chai

const masalaChai = new User("masalaChai");
masalaChai.logMe();  // Output: USERNAME is masalaChai

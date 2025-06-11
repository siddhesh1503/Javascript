// let myName = "siddhesh"

// console.log(myName.length);

let myHeros  = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.siddhesh = function(){
    console.log(`Siddhes is present in all objects`);
}

Array.prototype.heySid = function(){
    console.log(`Siddhesh say Hello!!!!!!!`);
}

myHeros.siddhesh()

myHeros.heySid()


const User = {
    name: "Siddhesh",
    email: "hdih@gmail.com"
};

const Teacher = {
    makeVideo: true
};

// Base object for teaching support
const baseTeachingSupport = {
    isAvailable: false
};

// Extended TeachingSupport object
const TeachingSupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: baseTeachingSupport
};

// Inheritance: Teacher gets properties from User
Teacher.__proto__ = User;

// Output check
console.log(Teacher.name);              // Siddhesh (inherited from User)
console.log(TeachingSupport.isAvailable); // false (inherited from baseTeachingSupport)


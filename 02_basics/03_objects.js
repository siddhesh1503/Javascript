// singleton
// A singleton is a design pattern that restricts the instantiation of a class to one single instance.

//objrect literal
const mysym = Symbol('mySymbol');

const person = {
    name: 'John',
    "full name" : "Siddhesh shinde",
    age: 30,
    [mysym] : 'This is a symbol',
    location: 'New York',
    email : 'siddgesg@gmail.com',
    isLoggedIn: true,
    lasrLoginDays: ['Monday', 'Tuesday', 'Wednesday'],
    };
    // console.log(person.email);
    // console.log(person['email']); // Accessing property using bracket notation
    // console.log(person['full name']); // Accessing property with space in the name
    // console.log(person[mysym]); // Accessing symbol property

    Object.freeze(person); // Freezes the object, preventing any changes to its properties
    console.log(person);

    // person.greeting = function() {
    //     console.log('Hello, my name is siddhesh');
    // }
    
    // console.log(person.greeting); // Output: [Function: greeting]
const one = {
    name: "John"
};

one.greeting = function() {
    console.log(`Hello, my name is ${this.name}`);
};

one.greeting(); // Output: Hello, my name is John
// console.log(person.greeting()); // Output: Hello, my name is John


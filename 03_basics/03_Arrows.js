const user = {
    username: "john_doe",
    price: 29.99,
    welcomeMessage: function() {
        console.log(`Welcome, ${this.username}! Your price is ${this.price}.`);
        console.log(this);

    }
};
// user.welcomeMessage(); // Output: Welcome, john_doe! Your price is 29.99.
// user.username = "sidddhesh";
// user.price = 19.99;
// user.welcomeMessage(); // Output: Welcome, sidddhesh! Your price is 19.99.
// console.log(this); // Output: Window object in browser or global object in Node.js

// function greet() {

//     console.log(this);
// }
// greet(); // Output: Window object in browser or global object in Node.js

// const one = () => {
//     let username = "john_doe";
//     console.log(this); // Output: undefined (because 'this' refers to the global object)
// }
// one(); // Output: undefined

const two = (num1,num2) => {
    return num1 + num2;
}
console.log(two(5, 10)); // Output: NaN (because num1 and num2 are not defined in this scope)

const addtwo = (num1, num2) => ( num1 + num2); // it does not require a return statement when using arrow functions with a single expression
console.log(addtwo(5, 10)); // Output: 15 (correctly adds the two numbers)

const userDetails = ()=> ({username: "john_doe", price: 29.99});
console.log(userDetails()); // Output: { username: 'john_doe', price: 29.99 }

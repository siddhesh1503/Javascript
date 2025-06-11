// immediately invoked function expression (IIFE) is a function that runs as soon as it is defined

(function() {
    const user = {
        username: "john_doe",
        price: 29.99,
        welcomeMessage: function() {
            console.log(`Welcome, ${this.username}! Your price is ${this.price}.`);
            console.log(this);
        }
    };
    user.welcomeMessage(); // Output: Welcome, john_doe! Your price is 29.99.
})();
// The IIFE (Immediately Invoked Function Expression) is executed immediately after its definition, allowing you to encapsulate code and avoid polluting the global scope.

// This is useful for creating private variables and functions that are not accessible from the outside, thus preventing naming conflicts and keeping the global scope clean.
// explain me simply
// An IIFE (Immediately Invoked Function Expression) is a function that runs right after it's defined. It's like a quick, self-contained block of code that doesn't affect the rest of your program.
// It helps keep your code organized and prevents conflicts with other variables or functions in the global scope. You can think of it as a way to create a private space for your code to run without interfering with the outside world.
// For example, in the code above, the `user` object and its `welcomeMessage` function are defined inside the IIFE. This means they won't be accessible outside of that function, keeping them private and avoiding any potential conflicts with other code.
// 
let a = 10; // Global variable
let b = 20; // Global variable
function addNumbers(num1, num2) {
let total = num1 + num2
return total
}
let result1 = addNumbers(a,b);
let result2 = addNumbers(10,2);
console.log(result1); // Output: 30
console.log(result2); // Output: 12
// In this example, `a` and `b` are global variables, and the `addNumbers` function takes two parameters and returns their sum. The results of calling the function with different arguments are stored in `result1` and `result2`, which are then logged to the console.
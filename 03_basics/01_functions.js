// function addTwoNumbers(a, b) {
//     console.log(a + b);
// }
// addTwoNumbers(5, 10); // Output: 15
// console.log("Result of addition:", addTwoNumbers(5, 10)); // Output: Result of addition: 15

function addTwoNumbers(a, b) {
    let result = a + b;
    return result; // Return the result instead of logging it
    // after return, no code will be executed
}
const result = addTwoNumbers(5, 10); // Call the function and store the result
console.log("Result of addition:", result); // Output: Result of addition: 15


function loginUserMessage(userName) {
    return `User logged in successfully: ${userName}`; // Return a message instead of logging it
}
const loginMessage = loginUserMessage("Siddhesh Shinde"); // Call the function and store the message
console.log(loginMessage); // Output: User logged in successfully: Siddhesh 


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(100, 200, 300)); // Output: 100

function handleObject (anyobject) {
    console.log(`User name is ${anyobject.name} and price is ${anyobject.price}`); // Log the user's name and price
} 
// handleObject({name: "Siddhesh", price: 100}); // Call the function with an object argument
console.log(handleObject({name: "Siddhesh", price: 100})); // Output: User name is Siddhesh and price is 100


const array = [1, 2, 3, 4, 5];
 function returnSecondElement(arr) {
    return arr[1]; // Return the second element of the array
}
console.log(returnSecondElement(array)); // Output: 2 (the second element of the array)
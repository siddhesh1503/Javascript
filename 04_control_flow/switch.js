// Switch statement example in JavaScript
// switch (key){
//     case value;
//     break;

//     default:
//         break;

// }
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter a day of the week: ', (day) => {
switch (day) {
    case "Monday":
        console.log("It's Monday, start of the week!");
        break;
    case "Tuesday":
        console.log("It's Tuesday, keep going!");
        break;
    case "Wednesday":
        console.log("It's Wednesday, halfway through!");
        break;
    case "Thursday":
        console.log("It's Thursday, almost there!");
        break;
    case "Friday":
        console.log("It's Friday, weekend is near!");
        break;
    case "Saturday":
        console.log("It's Saturday, enjoy your day!");
        break;
    case "Sunday":
        console.log("It's Sunday, relax before the week starts again!");
        break;
    default:
        console.log("Not a valid day");
}
rl.close();
})
//in javascript, how we can take input from the user?
// In JavaScript, you can take input from the user using the `prompt` function in a browser environment.
// Here's an example of how to use it:
// const userInput = prompt("Please enter your input:");
// console.log("You entered: " + userInput);
// Note: The `prompt` function is not available in Node.js or other non-browser environments.
// In Node.js, you can use the `readline` module to take input from the user.
// Example using readline in Node.js
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('Please enter your input: ', (answer) => {
//     console.log(`You entered: ${answer}`);
//     rl.close();
// });
// take the user input for the given program monday, tuesday, wednesday, thursday, friday, saturday, sunday
// and print the message for the given day
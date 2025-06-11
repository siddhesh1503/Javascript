//if
// if(true) {
//     console.log("This is true");
// }

// if(2 == "2") {
//     console.log("This is also true");
// }
// // < > >= <= == != === !==
// const temperature = 21; // You can change this value to test different conditions
// if(temperature === 41) {
//     console.log("It's hot outside");
// }
// else if(temperature === 21) {
//     console.log("It's warm outside");
// }
// else if(temperature === 11) {
//     console.log("It's cold outside");
// }
// else {
//     console.log("Temperature is not defined");
// }
 const userLoggedIn = true;
 const debitCard = true;
if(userLoggedIn && debitCard) {
    console.log("You can make a purchase");
}
else if(userLoggedIn && !debitCard) {
    console.log("You need to add a debit card to make a purchase");
}
else if(!userLoggedIn && debitCard) {
    console.log("You need to log in to make a purchase");
}
else {
    console.log("You need to log in and add a debit card to make a purchase");
}

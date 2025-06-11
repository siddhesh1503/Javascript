const myNumbers = [1, 2, 3, 4, 5];
// myNumbers.map((number, index) => {
//     if (number % 2 === 0) {
//         console.log(`Even number at index ${index} is ${number}`);
//     } else {
//         console.log(`Odd number at index ${index} is ${number}`);
//     }
// }
// );
const newNum = myNumbers.map((number, index) => {return number * 2;})
console.log(newNum);
// //for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// const numbers = [1, 2, 3, 4, 5];
// // Using for loop to iterate over an array
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (let i = 0; i < 5; i++) {
//     for(let j = 0; j < 5; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }

// let myArray = [1, 2, 3, 4, 5];
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(`Element at index ${i} is ${element}`);
// }

//break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at 5");
        break; // Exits the loop when i is 5
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`Skipping even number: ${i}`);
        continue; // Skips the rest of the loop iteration for even numbers
    }
    console.log(i);
}
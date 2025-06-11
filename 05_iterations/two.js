while(2==2){
    console.log("This is true");
    break; // This will exit the loop after the first iteration
}
// This loop will run indefinitely until the condition is false

// let i = 0;
// while(i <= 10) {
//     console.log(i);
//     i = i +2;
// }

//do while loop
let j = 0;
do {
    console.log(j);
    j = j + 2;
}
while(j <= 10);
// This will print even numbers from 0 to 10
// The do-while loop will execute the block at least once, even if the condition is false initially
let k = 0;
do {
    console.log(k);
    k = k + 1;
}
while(k < 0); // This condition is false, but the loop will execute once
// This will print 0 once, then exit the loop
// The do-while loop is useful when you want to ensure that the code block runs at least once, regardless of the condition.
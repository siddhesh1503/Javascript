// for of
//["","",""]
//[{}, {}, {}]
 
// const arr = [1, 2, 3, 4, 5];
// for (const element of arr) {
//     console.log(element);
// }

// const greeting = "Hello World";
// for (const greet of  greeting) {
//     console.log(greet);
// }

const map = new Map() 
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}


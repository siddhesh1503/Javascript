const marvel_heroes = ["thor", "ironman", "hulk", "black widow", "captain america"];
const dc_heroes = ["superman", "batman", "flash"];

// marvel_heroes.push(dc_heroes); // Add a new hero to the end of the marvel_heroes array
// console.log(marvel_heroes); // Output: ["thor", "ironman", "hulk", "black widow", "captain america", "dc_hero"]

// const allhero = marvel_heroes.concat(dc_heroes); // Concatenate the dc_heroes array to the marvel_heroes array
// console.log(allhero); // Output: ["thor", "ironman", "hulk", "black widow", "captain america", "superman", "batman", "flash"]

const allhero = [...marvel_heroes, ...dc_heroes]; // Using spread operator to concatenate arrays
// console.log(allhero); // Output: ["thor", "ironman", "hulk", "black widow", "captain america", "superman", "batman",

const another_array = [1, 2, 3, [4, 5, 6], 7, 8, 9]; // Nested array
const real_another_array = another_array.flat(); // Flatten the nested array
console.log(real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] (flattened array)

console.log(Array.isArray(siddhesh)); // Output: false (checks if siddhesh is an array)
console.log(Array.from("hello")); // Output: ["h", "e", "l", "l", "o"] (converts a string to an array of characters)
console.log(Array.of(1, 2, 3)); // Output: [1, 2, 3] (creates a new array with the given elements)

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3)); // Output: [100, 200, 300] (creates a new array with the given scores)

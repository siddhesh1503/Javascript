// array

const numbers = [1, 2, 3, 4, 5]; // Array of numbers
const fruits = ["apple", "banana", "cherry"]; // Array of strings
const mixedArray = [1, "apple", true, null]; // Array with mixed data types
const emptyArray = []; // Empty array
const nestedArray = [[1, 2], [3, 4], [5, 6]]; // Array of arrays

// // Accessing elements in an array
// console.log(numbers[0]); // Output: 1 (first element)           
// console.log(fruits[1]); // Output: "banana" (second element)
// console.log(mixedArray[2]); // Output: true (third element)
// console.log(emptyArray[0]); // Output: undefined (no elements in the array)
// console.log(nestedArray[1][0]); // Output: 3 (first element of the second nested array)

// // Modifying elements in an array
// numbers[0] = 10; // Change first element to 10
// console.log(numbers); // Output: [10, 2, 3, 4, 5] (modified array)
// fruits[1] = "orange"; // Change second element to "orange"
// console.log(fruits); // Output: ["apple", "orange", "cherry"] (modified array)
// mixedArray[2] = "grape"; // Change third element to "grape"
// console.log(mixedArray); // Output: [1, "apple", "grape", null] (modified array)
// emptyArray[0] = "new element"; // Add an element to the empty array
// console.log(emptyArray); // Output: ["new element"] (modified array)
// nestedArray[0][1] = 20; // Change second element of the first nested array to 20
// console.log(nestedArray); // Output: [[1, 20], [3, 4], [5, 6]] (modified array)

// Array methods
console.log(numbers.length); // Output: 5 (length of the array)
console.log(fruits.push("kiwi")); // Output: 4 (adds "kiwi" to the end of the array and returns the new length)
console.log(fruits); // Output: ["apple", "orange", "cherry", "kiwi"] (modified array)
console.log(mixedArray.pop()); // Output: null (removes the last element and returns it)
console.log(mixedArray); // Output: [1, "apple", "grape"] (modified array)
console.log(emptyArray.unshift("first element")); // Output: 2 (adds "first element" to the beginning of the array and returns the new length)
console.log(emptyArray); // Output: ["first element", "new element"] (modified array)

console.log(nestedArray.shift()); // Output: [1, 20] (removes the first element and returns it)
console.log(nestedArray); // Output: [[3, 4], [5, 6]] (modified array)

console.log(fruits.indexOf("orange")); // Output: 1 (finds the index of "orange" in the array)
console.log(mixedArray.includes("apple")); // Output: true (checks if "apple" is in the array)
console.log(numbers.slice(1, 3)); // Output: [2, 3] (returns a shallow copy of a portion of the array)
console.log(fruits.join(", ")); // Output: "apple, orange, cherry, kiwi" (joins the array elements into a string)
console.log(mixedArray.reverse()); // Output: ["grape", "apple", 1] (reverses the order of the array elements)
console.log(nestedArray.flat()); // Output: [3, 4, 5, 6] (flattens the nested array into a single array)
console.log(fruits.sort()); // Output: ["apple", "cherry", "kiwi", "orange"] (sorts the array elements in ascending order)

console.log(fruits.splice(1, 2, "mango", "peach")); // Output: ["cherry", "kiwi"] (removes 2 elements starting from index 1 and adds "mango" and "peach")
console.log(fruits); // Output: ["apple", "mango", "peach", "orange"] (modified array)

//what is the difference between splice and slice?
// splice modifies the original array by removing or adding elements, while slice returns a shallow copy of a portion of the array without modifying the original array.
// simple example
const arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1, 2)); // Output: [2, 3] (removes 2 elements starting from index 1)

console.log(arr); // Output: [1, 4, 5] (original array is modified)
console.log(arr.slice(1, 3)); // Output: [4, 5] (returns a shallow copy of elements from index 1 to 3)
// console.log(arr); // Output: [1, 4, 5] (original array remains unchanged)
// console.log(arr.slice(1)); // Output: [4, 5] (returns a shallow copy of elements from index 1 to the end)
// console.log(arr.slice(0, 2)); // Output: [1, 4] (returns a shallow copy of elements from index 0 to 2)
// console.log(arr.slice(-2)); // Output: [4, 5] (returns a shallow copy of the last 2 elements)
// console.log(arr.slice(1, -1)); // Output: [4] (returns a shallow copy of elements from index 1 to the second last element)
// console.log(arr.slice(0)); // Output: [1, 4, 5] (returns a shallow copy of the entire array)
// console.log(arr.slice()); // Output: [1, 4, 5] (returns a shallow copy of the entire array, same as arr.slice(0))
// console.log(arr.slice(1, 3)); // Output: [4, 5] (returns a shallow copy of elements from index 1 to 3)
// console.log(arr.slice(1, 2)); // Output: [4] (returns a shallow copy of elements from index 1 to 2)
// console.log(arr.slice(2, 4)); // Output: [5] (returns a shallow copy of elements from index 2 to 4)              
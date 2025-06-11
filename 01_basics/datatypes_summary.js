// notes of data types

// primitive data types
// 7 types of primitive data types
// 1. String
let firstName = "Siddhesh"; // String
console.log(typeof firstName); // "string"

// 2. Number
let age = 19; // Number
console.log(typeof age); // "number"

// 3. Boolean
let isLoggedIn = false; // Boolean
console.log(typeof isLoggedIn); // "boolean"

// 4. Undefined
let notDefined; // Undefined
console.log(typeof notDefined); // "undefined"

// 5. Null
let emptyValue = null; // Null
console.log(typeof emptyValue); // "object" (this is a known JavaScript quirk)

// 6. Symbol (ES6 feature, used for unique identifiers)
let uniqueSymbol = Symbol("unique"); // Symbol
console.log(typeof uniqueSymbol); // "symbol"

// 7. BigInt (ES11 feature, used for large integers)
let largeNumber = BigInt(123456789012345678901234567890); // BigInt
console.log(typeof largeNumber); // "bigint"



// Non-primitive data types
// Non-primitive data types are objects, which can be more complex and can hold multiple values.
// 1. Object
let person = {
    name: "Siddhesh",
    age: 19,
    isLoggedIn: false
}; // Object
console.log(typeof person); // "object"

// 2. Array (a special type of object)
let numbers = [1, 2, 3, 4, 5]; // Array
console.log(typeof numbers); // "object" (arrays are also objects in JavaScript)

// 3. Function (a special type of object)
function greet() {
    console.log("Hello, World!");
} // Function
console.log(typeof greet); // "function" (functions are also objects in JavaScript)

// 4. Date (a special type of object)
let currentDate = new Date(); // Date
console.log(typeof currentDate); // "object" (dates are also objects in JavaScript)

// 5. RegExp (a special type of object for regular expressions)
let regex = /abc/; // RegExp
console.log(typeof regex); // "object" (regular expressions are also objects in JavaScript)

// 6. Map (a collection of key-value pairs)
let map = new Map(); // Map
console.log(typeof map); // "object" (maps are also objects in JavaScript)

// 7. Set (a collection of unique values)
let set = new Set(); // Set
console.log(typeof set); // "object" (sets are also objects in JavaScript)

// 8. WeakMap (a collection of key-value pairs with weak references)
let weakMap = new WeakMap(); // WeakMap
console.log(typeof weakMap); // "object" (weak maps are also objects in JavaScript)

// 9. WeakSet (a collection of unique values with weak references)
let weakSet = new WeakSet(); // WeakSet
console.log(typeof weakSet); // "object" (weak sets are also objects in JavaScript)

// 10. ArrayBuffer (a fixed-length binary data buffer)
let buffer = new ArrayBuffer(16); // ArrayBuffer
console.log(typeof buffer); // "object" (ArrayBuffers are also objects in JavaScript)



//*************************************************************************************************

// stack(primitive data types) vs heap(non-primitive data types)

// Stack: Stores primitive data types (e.g., numbers, strings, booleans) and their values directly.
// Heap: Stores non-primitive data types (e.g., objects, arrays, functions) and their references.
// Primitive data types are stored in the stack, while non-primitive data types are stored in the heap.
// This means that primitive data types are stored directly in memory, while non-primitive data types are stored as references to their locations in memory.
// When you create a primitive data type, it is stored directly in the stack.
// When you create a non-primitive data type, it is stored in the heap, and a reference to its location in memory is stored in the stack.

// Example of stack vs heap
let num = 42; // Primitive data type (stored in stack)
let obj = { value: 42 }; // Non-primitive data type (stored in heap)
let arr = [1, 2, 3]; // Non-primitive data type (stored in heap)
let func = function() { console.log("Hello, World!"); }; // Non-primitive data type (stored in heap)
console.log(num); // 42
console.log(obj); // { value: 42 }
console.log(arr); // [1, 2, 3]
console.log(func); // [Function: func]

//*************************************************************************************************
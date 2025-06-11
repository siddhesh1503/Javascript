// Example of variable scope in JavaScript

const c = 300; // Global variable
if (true) {
  let a = 100; // Block-scoped variable
  const b = 200; // Block-scoped constant
//   console.log(a); // 100 (block-scoped 'a')
//   console.log(b); // 200 (block-scoped 'b')
}
// console.log(c); // 300 (global 'c')


// console.log(a); // ❌ ReferenceError (block-scoped 'a' is not accessible here)
// console.log(b); // ❌ ReferenceError (block-scoped 'b' is not accessible here)
// console.log(c); // 300 (global 'c' is accessible here)

//explain me the scope
// Scope in JavaScript refers to the visibility and accessibility of variables, functions, and objects in different parts of your code. There are several types of scopes:
// 1. **Global Scope**: Variables declared outside of any function or block are in the global scope. They can be accessed from anywhere in the code.
// 2. **Function Scope**: Variables declared within a function are only accessible within that function. They are not visible outside of it.
// 3. **Block Scope**: Variables declared with `let` or `const` inside a block (e.g., within `{}`) are only accessible within that block. They are not visible outside of it.
// 4. **Lexical Scope**: Functions have access to variables from their parent scope, allowing nested functions to access variables from outer functions.

function one() {
    let a = 10;

    function two() {
        let b = 20;
        console.log(a); // Output: 10
        console.log(b); // Output: 20
    }

    two(); // ✅ Now 'two' gets executed
}

one();
// one(); // ❌ Uncommenting this will throw an error because 'two' is not accessible outside of 'one'
// console.log(a); // ❌ ReferenceError (a is not accessible here)
// console.log(b); // ❌ ReferenceError (b is not accessible here)
// In this example, `a` is accessible within the function `two` because of lexical scoping. However, `b` is only accessible within `two`, and trying to access it outside will result in a ReferenceError.
// Understanding scope is crucial for managing variable visibility and avoiding naming conflicts in your code.


function addTwoNumbers(value){
    return value + 2;

}
console.log(addTwoNumbers(5)); // Output: 7

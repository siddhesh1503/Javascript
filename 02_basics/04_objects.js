//const tinderUser = new Object();
// const tinderUser = {};

// tinderUser.id = '12345';
// tinderUser.name = 'Siddhesh';
// tinderUser.age = 30;
// tinderUser.isLoggedIn = false;


// const regularUser = {
//     id: '67890',
//     name: 'John Doe',
//     age: 25,
//     isLoggedIn: true,
//     fullname : {
//         first : 'John', 
//         last: 'Doe'
//     }
// };
// console.log(regularUser.fullname);

// const obj1 = {1: 'one', 2: 'two', 3: 'three'};
// const obj2 = {4: 'four', 5: 'five'};
// const mergedObj = {...obj1, ...obj2}; // Merging two objects using spread operator\
// console.log(mergedObj); // Output: {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five'}

// const users = [
    
//     { id: 1, name: 'Alice', age: 28 },
//     { id: 2, name: 'Bob', age: 32 },
//     { id: 3, name: 'Charlie', age: 25 }

// ];
// console.log(Object.keys(users[0])); // Output: ['id', 'name', 'age'] (returns an array of keys of the first object in the array)
// console.log(Object.values(users[0])); // Output: [1, 'Alice', 28] (returns an array of values of the first object in the array)
// console.log(Object.entries(users[0])); // Output: [[ 'id', 1 ], [ 'name', 'Alice' ], [ 'age', 28 ]] (returns an array of key-value pairs of the first object in the array)
// console.log(Object.entries(regularUser)); // Output: [['id', '67890'], ['name', 'John Doe'], ['age', 25], ['isLoggedIn', true], ['fullname', {first: 'John', last


const course = {
    Title: 'JavaScript Basics',
    duration: 4,
    topics: ['Variables', 'Functions', 'Arrays', 'Objects'],
    isPublished: true,
}

const {courseTitle} = course; // Destructuring assignment
console.log(courseTitle); // Output: 'JavaScript Basics'
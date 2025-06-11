// Example 1
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise consumed");
});

// Example 2
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Task 2");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
});

// Example 3 - Corrected promiseThree
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "Siddhesh", email: "sidjdhd@gmail.com" });
    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user);
});

// Example 4 - Error handling and value passing
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false; // Set to false to simulate success
        if (!error) {
            resolve({ username: "Siddhesh", password: "12334" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username; // Pass username to next .then()
    })
    .then((username) => {
        console.log(username); // Now this works!
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; 
        if (!error) {
            resolve({ username: "Javascript", password: "12334" });
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000); // this closing parenthesis was misplaced in your code
});

async function consumePromiseFive(){
    try{
    const response = await promiseFive;
    console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // ✅ Await fetch
        const data = await response.json(); // ✅ Await json parsing
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}

getAllUser();

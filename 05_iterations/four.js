const object = {
    js : 'JavaScript',
    py : 'Python',
    rb : 'Ruby',
    c : 'C',
    cpp : 'C++',
}

for (const key in object) {
    //console.log(`${key} : ${object[key]}`);
}


const array = ['JavaScript', 'Python', 'Ruby', 'C', 'C++'];
for (const index in array) {
    //console.log(`${index} : ${array[index]}`);
}

const set = new Set(['JavaScript', 'Python', 'Ruby', 'C', 'C++']);
for (const value of set) {
       console.log(value);
}
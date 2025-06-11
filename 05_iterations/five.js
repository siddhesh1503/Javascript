const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];
coding.forEach((language, index) => {
   // console.log(`Language at index ${index} is ${language}`);
}
);

const myCoding = [
    { name: "JavaScript", type: "Scripting" },
    { name: "Python", type: "General Purpose" },
    { name: "Java", type: "Object-Oriented" },
    { name: "C++", type: "System Programming" },
    { name: "Ruby", type: "Web Development" }
];
myCoding.forEach((item, index) => {
    console.log(`Language at index ${index} is ${item.name} of type ${item.type}`);
});
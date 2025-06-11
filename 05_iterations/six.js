// const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];
// coding.forEach((language, index) => {
//    console.log(`Language at index ${index} is ${language}`);
// });

const myNumbers = [1, 2, 3, 4, 5];
myNumbers.filter((number, index) => {
    if (number % 2 === 0) {
        console.log(`Even number at index ${index} is ${number}`);
    } else {
        console.log(`Odd number at index ${index} is ${number}`);
    }
}
);

const books = [
    { title: "1984", author: "George Orwell", published: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", published: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", published: 1925 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", published: 1951 },
    { title: "Brave New World", author: "Aldous Huxley", published: 1932 }
];
const userBooks = books.filter((book, index) => {
    if (book.published < 1950) {
        console.log(`Classic book at index ${index} is "${book.title}" by ${book.author}, published in ${book.published}`);
    } else {
        console.log(`Modern book at index ${index} is "${book.title}" by ${book.author}, published in ${book.published}`);
    }
}
);

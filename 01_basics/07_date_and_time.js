//Dates

let today = new Date();
console.log(today); // Current date and timenode 
console.log(today.toString()); // Converts date to string format
console.log(today.toDateString()); // Converts date to a human-readable string format
console.log(today.toISOString()); // Converts date to ISO 8601 format
console.log(today.toLocaleDateString()); // Converts date to a locale-specific string format
console.log(today.toLocaleTimeString()); // Converts time to a locale-specific string format
console.log(today.getFullYear()); // Gets the full year (e.g., 2023)

let birthday = new Date("2004-01-01");
console.log(birthday.toDateString()); // Date object for January 1, 2004

let myTimeStamp = Date.now(); // Gets the current timestamp in milliseconds since January 1, 1970
console.log(myTimeStamp); // Outputs the current timestamp

console.log(Date.now()); // Outputs the current timestamp in milliseconds since January 1, 1970

let newDate = new Date();
console.log(newDate); // Outputs the current date and time
console.log(newDate.getDate()); // Gets the day of the month (1-31)

newDate.toLocaleDateString("default", {
    weekday: "long", // Full name of the day of the week
    year: "numeric", // Full numeric year
    month: "long", // Full name of the month
    day: "numeric" // Numeric day of the month
}); // Converts date to a locale-specific string format with options

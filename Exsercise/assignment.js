"use strict";
const favoriteNumber = 42; // Change this to your favorite number
const message = `My favorite number is: ${favoriteNumber}`;
console.log(message);
function inviteAdditionalGuests(currentGuests) {
    const additionalGuests = ["Frank", "Grace", "Hannah"];
    const updatedGuests = [...currentGuests, ...additionalGuests];
    return updatedGuests;
}
const initialGuests = ["Alice", "Bob", "Charlie", "David", "Eve"];
const finalGuests = inviteAdditionalGuests(initialGuests);
console.log("Dinner Guests:");
finalGuests.forEach((guest, index) => {
    console.log(`Guest ${index + 1}: ${guest}`);
});
const names1 = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("My Friends' Names:");
for (let i = 0; i < names1.length; i++) {
    console.log(names1[i]);
}
// Define the array of places to visit
const placesToVisit = [
    "Paris",
    "Tokyo",
    "New York",
    "Venice",
    "Sydney"
];
// Print the original order of the array
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order (sorted):");
console.log([...placesToVisit].sort());
// Show that the original order is still intact
console.log("\nOriginal Order After Sorting:");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order (sorted in reverse):");
console.log([...placesToVisit].sort().reverse());
// Show that the original order is still intact
console.log("\nOriginal Order After Reverse Sorting:");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show that its order has changed
console.log("\nReversed Order:");
console.log(placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
// Print the list to show it's back to its original order
console.log("\nOriginal Order (reversed again):");
console.log(placesToVisit);
// Sort the array to store it in alphabetical order
placesToVisit.sort();
// Print the array to show that its order has been changed
console.log("\nAlphabetical Order (sorted):");
console.log(placesToVisit);
// Sort to change the array to reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
// Print the list to show that its order has changed
console.log("\nReverse Alphabetical Order (sorted in reverse):");
console.log(placesToVisit);
function inviteAdditionalGuests1(currentGuests) {
    const additionalGuests = ["Frank", "Grace", "Hannah"];
    const updatedGuests = [...currentGuests, ...additionalGuests];
    return updatedGuests;
}
const initialGuests1 = ["Alice", "Bob", "Charlie", "David", "Eve"];
const finalGuests1 = inviteAdditionalGuests1(initialGuests1);
console.log("Dinner Guests:");
finalGuests1.forEach((guest, index) => {
    console.log(`Guest ${index + 1}: ${guest}`);
});
console.log("Good news! We found a bigger dinner table.");
// Print the number of people you are inviting to dinner
const numberOfGuests = finalGuests1.length;
console.log(`Number of people invited to dinner: ${numberOfGuests}`);
// Create an array of famous mountains
const mountains = [
    "Mount Everest",
    "K2",
    "Matterhorn",
    "Mount Kilimanjaro",
    "Denali"
];
// Print the list of famous mountains
console.log("List of Famous Mountains:");
mountains.forEach((mountain, index) => {
    console.log(`${index + 1}: ${mountain}`);
});
// Create an array of country objects
const countriesInfo = [
    {
        name: "Pakistan",
        capital: "Islamabad",
        population: 241002651
    },
    {
        name: "India",
        capital: "New Delhi",
        population: 1380004385
    },
    {
        name: "China",
        capital: "Beijing",
        population: 1444216107
    },
    {
        name: "Brazil",
        capital: "Brasília",
        population: 212559417
    },
    {
        name: "France",
        capital: "Paris",
        population: 65273511
    }
];
// Print information about each country
console.log("Country Information:");
countriesInfo.forEach((country, index) => {
    console.log(`Country ${index + 1}:`);
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log();
});
let number = 5;
// Test 1: Is number equal to 5? I predict True.
console.log(number == 5);
// Test 2: Is number not equal to 7? I predict True.
console.log(number != 7);
// Test 3: Is number greater than 3? I predict True.
console.log(number > 3);
// Test 4: Is number less than or equal to 5? I predict True.
console.log(number <= 5);
// Test 5: Is the type of number a number? I predict True.
console.log(typeof number === "number");
let name2 = "John";
// Test 6: Is name equal to "John"? I predict True.
console.log(name2 == "John");
// Test 7: Is name not equal to "Jane"? I predict True.
console.log(name2 != "Jane");
// Test 8: Is name shorter than 6 characters? I predict True.
console.log(name2.length < 6);
// Test 9: Is name a string? I predict True.
console.log(typeof name2 === "string");
let isSunny = true;
// Test 10: Is isSunny equal to true? I predict True.
console.log(isSunny == true);
// Tests for equality and inequality with strings
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "apple";
console.log("Test 1: Is fruit1 equal to fruit2? I predict False.");
console.log(fruit1 == fruit2);
console.log("Test 2: Is fruit1 not equal to fruit2? I predict True.");
console.log(fruit1 != fruit2);
console.log("Test 3: Is fruit1 equal to fruit3? I predict True.");
console.log(fruit1 == fruit3);
// Tests using the toLowerCase function
let text = "Hello, World!";
let lowercaseText = text.toLowerCase();
console.log("Test 4: Is lowercaseText equal to 'hello, world!'? I predict True.");
console.log(lowercaseText == "hello, world!");
// Numerical tests
let num4 = 10;
let num5 = 5;
console.log("Test 5: Is num1 greater than num2? I predict True.");
console.log(num4 > num5);
console.log("Test 6: Is num1 less than or equal to num2? I predict False.");
console.log(num4 <= num5);
console.log("Test 7: Is num1 equal to num2? I predict False.");
console.log(num4 == num5);
console.log("Test 8: Is num1 not equal to num2? I predict True.");
console.log(num4 != num5);
console.log("Test 9: Is num1 greater than or equal to num2? I predict True.");
console.log(num4 >= num5);
// Tests using "and" and "or" operators
let sunny = true;
let warm = false;
console.log("Test 10: Is it sunny and warm? I predict False.");
console.log(sunny && warm);
console.log("Test 11: Is it sunny or warm? I predict True.");
console.log(sunny || warm);
// Test whether an item is in an array
let fruits1 = ["apple", "banana", "cherry", "date"];
console.log("Test 12: Is 'banana' in the fruits array? I predict True.");
console.log(fruits1.includes("banana"));
// Test whether an item is not in an array
console.log("Test 13: Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits1.includes("grape"));
const alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
// Create an array of usernames
const usernames = ["admin", "Eric", "Alice", "Bob", "Jane"];
// Loop through the array and print greetings
for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three city-country pairs and print the values
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the message: ${message}`);
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("medium");
// Create a small shirt with a custom message
make_shirt("small", "Hello, World!");

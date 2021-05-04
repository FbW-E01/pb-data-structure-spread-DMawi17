// # Spread the Word

// #### 1. Combining Arrays
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
const euroCountries = ["Italy", "France", "Germany", "UK"];
const asianCountries = ["China", "Japan", "India"];
euroCountries.push(...asianCountries);

// * Once again create two arrays. Save all elements of both arrays to another variable.
const euroCountries2 = ["Italy", "France", "Germany", "UK"];
const asianCountries2 = ["China", "Japan", "India"];
const euroAsianCountries = [...euroCountries2, ...asianCountries2];


// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable.
const primes = [2, 3, 5, 7];
const copy = [...primes];


// #### 3. Find the Largest...
// Create a function to find the largest number in an array.
const findLargest = (num) => {
    console.log(Math.max(...num));
};
findLargest(primes);


// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
const findSmallest = (num) => {
    console.log(Math.min(...num));
};
findSmallest(primes);


// #### 5. Clone and Merge
// Given two objects:
const person = { name: "John" };
const job = { role: "Teacher" };

// * 5.1 Clone the person object.
const clonedPerson = { ...person };

// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = { ...person, ...job };

// * 5.3 Then change the values of the properties in the employee object.
employee.name = "Dmawi";
employee.role = "Student";

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
const isWhole = (...n) => {
    let sum = 0;
    for (let i of n) {
        sum += i;
    }
    return (sum / n.length) % 1 === 0;
};

console.log(isWhole(2, 2, 2, 2)); // true
console.log(isWhole(1, 2, 3, 4)); // false
console.log(isWhole(9, 2, 2, 5)); // false

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

console.log(isWhole([2, 2, 2, 2]));
console.log(isWhole([1, 2, 3, 4]));
console.log(isWhole([9, 2, 2, 5]));

// I have to remove the spread operator for this to work. Otherwise it doesn't output the correct result.

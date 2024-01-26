// In the example above:

//    * person is an object with various properties, including firstName, lastName, age, isDeveloper, skills, and address.
//    * Properties can be accessed using dot notation (person.firstName) or bracket notation (person['firstName']).
//    * Nested objects (like address) can be accessed through chained dot notation.


// Object Declaration 
let person = {
    firstName : "Fazal",
    LastName : "Ul Rehman",
    isAge : 20,
    isDeveloper : true,
    skills: ['HTML','CSS','JS'],
    address : {
        city : "Lahore",
        Country : "Pakistan",
    },

}

// Adding a new property - only new unique key name.
person.gender = "Male";

// Modifying an existing property
person.isAge = 20.5;

// console.log(person.firstName + " " + person.LastName);
// console.log(person.isAge);

// console.log(person.gender);

// console.log(person.isDeveloper);
// console.log(person.skills[0] + "," + person.skills[1]+ "," + person.skills[2] + ".");
// console.log(person.address.city + "," + person.address.Country); // person is object , so object in object in not worked bracket notation , Try to use overall dot notation.



// ================================================================================ 

// Arrays: 


// Array Declaration
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Adding a new element at the end
fruits.push ("Grapes"); //push move to the last elem

// Modifying an existing element
fruits[0] = "Cherry";
fruits[1] = fruits[3];

// Accessing Array Elements
console.log(fruits[0]);   // Output: Apple
console.log(fruits[4]);   // Output: Orange
console.log(fruits.length);  // Output: 4 (length property returns the number of elements)
console.log(fruits);  // Output: 4 (length property returns the number of elements)








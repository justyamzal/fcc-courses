//--- STARTED ---//
// console.log("Hello World!!");

// * let : defines data and can be changed and reassign later
// let message = "Hello";
// message = "World";
// console.log(message);

// * const : defines data and cannot be changed 
// const christmast_2025 = '12.25.2025';
// christmast_2025 = '12.26.2026';
// console.log(chrismast_2025);

 

//--- PRIMITIVE DATA TYPES ---// 
/* refers to fundamental value, that can only contain single thing (type whether only string or number,etc). */

// * String
let favoriteFruit = "Strawberries";
let favoriteIceCream = "Chocolate";
let favoriteProgrammingLanguange = "Javascript";
// console.log(favoriteFruit,favoriteIceCream,favoriteProgrammingLanguange);

// * Number
let numberOfDonuts = 12;
let pi = 3.14;
// console.log(numberOfDonuts,pi);


// * Big Int 
let veryLargeNumber = 5354555657585960n;

// console.log(veryLargeNumber);

// * Boolean
let lovesCoding = true;
// console.log(lovesCoding);


// * Undefined
let favoriteColor;
// console.log(favoriteColor);

// * Null : explicity clear the value of variable
favoriteFruit = null;
// console.log(favoriteFruit);

// * Symbol : create unique identifiers and object
const uniqueKey = Symbol();
// console.log(uniqueKey);


// --- REFERENCE DATA TYPE / OBJECT DATA  --- / 
/* can have a more complex structure and they hold key value pairs, this enables us to store more than one variable all in one */


// * Object

// let course = {
//     name : "Javascript for Beginners",
//     hours : 3 
// };

// console.log(course);


/* note : you can know the type of data from variable by using/or type "typeof" at terminal with 'node' commands
ex: typeof 'taco', typeof 0, typeof undefined, etc */


// --- Dynamic Typing 
/* javascript is a languange that allows you to initialize a variable an assign it to a different or any other data type as know as dynamicly type
*/
let firstName = "Steven";
// console.log(typeof firstName);

firstName = 100;
// console.log(typeof firstName);

firstName = true;
// console.log(typeof firstName);
 
// ! this potentially cause bugs, so you need to be careful 

// --- OBJECT (OBJECT DATA/REFERENCE DATA TYPE )  --- //
/* Object is a fundamental data type in javascript that allows you to store key value pairs */

// * Object
let course = {
    name : "Javascript for Beginners",
    hours : 3 
};

// console.log(course); 

// ! we can access the name value throught 2 notation, dot notation and bracket notation

// * dot notation 
// console.log(course.name);

// course.name = "Javascript Fundamentals";
// console.log(course.name);
// ! we can override or changed the value as well

// * bracket notation
// console.log(course['name']);
    
course['name'] = 'Javascript 101';
// console.log(course['name']);

//! associated value for the key of ours 
let property = "hours"
// console.log(course[property]);


// --- ARRAYS --- //
/* array or arrays are a data structure in javascript that allows you to store list of data */ 

let productColors = ['blue', 'green'];

// console.log(productColors);

// * accessing first element of an array by counting it from the zero
// console.log(productColors[0]);

// * change the first index with some new index
// productColors[0] = 42;

// * looking what type of data productColors is
// console.log(typeof productColors);

// * the property, that allows u to find or counting the lenght of the variable is
// console.log(productColors.length);

// --- FUNCTION --- //
/* 
- Function are the building blocks of our applications, it allows you to  group of statement to perform a task or calculate the value.
- function is a name piece of code, we use by call it and allow you to efficiently execute those statements without having duplicate our code
*/

// * normal variable
// function sayHi() {
//     console.log("Hi!");
// }
// sayHi();

// * using param(parameter) variable, when defining our functions we specify a param list within the parantheses(kurung) when calling our function we can pass in values and that will allow us to custommize the execution of our function

function sayHi(name) {
    console.log("Hi! "+ name);
}
// sayHi('Yamzal');

// --- TYPE OF FUNCTIONS
function multiply(num1, num2) {
    return num1 * num2;
    // const product = num1 * num2;
}

// console.log (multiply(2,2));

//* 1. Function Declaration (Deklarasi Fungsi) 
/* Fungsi ini dideklarasikan dengan kata kunci function dan memiliki nama. Dapat dipanggil sebelum dideklarasikan karena mengalami hoisting.*/

// function greet() {
//     console.log("Hello, World!");
// }
// greet(); 

//* 2. Function Expression (Ekspresi Fungsi)
/* Fungsi ini disimpan dalam variabel dan tidak mengalami hoisting. */

// const greet = function() {
//     console.log("Hello, World!");
// };
// greet(); 

// * 3. Arrow Function (Fungsi Panah - ES6)
/* Fungsi lebih ringkas menggunakan tanda panah =>, cocok untuk callback atau fungsi sederhana.*/

// const greet = () => console.log("Hello, World!");
// greet(); 

// * 4. Immediately Invoked Function Expression (IIFE)
/* Fungsi yang langsung dieksekusi setelah dideklarasikan. Digunakan untuk membuat ruang lingkup terpisah agar variabel tidak bocor ke global scope.*/

// (function() {
//     console.log("Hello, IIFE!");
// })(); 

// * 5. Higher-Order Function (Fungsi Tingkat Tinggi)
/* Fungsi yang menerima fungsi lain sebagai argumen atau mengembalikan fungsi lain. */

// function operate(num, func) {
//     return func(num);
// }

// const double = x => x * 2;

// console.log(operate(5, double));
 
// * 6. Callback Function
/* Fungsi yang dikirim sebagai argumen ke fungsi lain dan dipanggil setelah fungsi utama selesai. */

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched!");
//         callback();
//     }, 2000);
// }

// function processData() {
//     console.log("Processing data...");
// }

// fetchData(processData);
// Output setelah 2 detik: "Data fetched!" kemudian "Processing data..."


// * 7. Generator Function
/* Fungsi yang dapat menghentikan eksekusi sementara dan melanjutkannya kembali menggunakan yield. */
// function* numberGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator = numberGenerator();
// console.log(generator.next().value); 
// console.log(generator.next().value); 
// console.log(generator.next().value); 



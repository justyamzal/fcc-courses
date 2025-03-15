// ----- FUNCTION ----- //
/* 
- Function are the building blocks of our applications, it allows you to  group of statement to perform a task or calculate the value.
- function is a name piece of code, we use by call it and allow you to efficiently execute those statements without having duplicate our code
*/

// * normal variable
function sayHi() {
    // console.log("Hi!");
}
sayHi();

// * using param(parameter) variable, when defining our functions we specify a param list within the parantheses(kurung) when calling our function we can pass in values and that will allow us to custommize the execution of our function

function sayHi(name) {
    // console.log("Hi! "+ name);
}
sayHi('Yamzal');

// --- TYPE OF FUNCTIONS
function multiply(num1, num2) {
    return num1 * num2;
    // const product = num1 * num2;
}

// console.log (multiply(2,2));

//* 1. Function Declaration (Deklarasi Fungsi) 
/* Fungsi ini dideklarasikan dengan kata kunci function dan memiliki nama. Dapat dipanggil sebelum dideklarasikan karena mengalami hoisting.*/

function greet() {
    // console.log("Hello, World!");
}
greet(); 

//* 2. Function Expression (Ekspresi Fungsi)
/* Fungsi ini disimpan dalam variabel dan tidak mengalami hoisting. */

const greet_ = function() {
    // console.log("Hello, World!");
};
greet_(); 

// * 3. Arrow Function (Fungsi Panah - ES6)
/* Fungsi lebih ringkas menggunakan tanda panah =>, cocok untuk callback atau fungsi sederhana.*/

const greeting = () => console.log("Hello, World!");
// greeting(); 

// * 4. Immediately Invoked Function Expression (IIFE)
/* Fungsi yang langsung dieksekusi setelah dideklarasikan. Digunakan untuk membuat ruang lingkup terpisah agar variabel tidak bocor ke global scope.*/

(function() {
    // console.log("Hello, IIFE!");
})(); 

// * 5. Higher-Order Function (Fungsi Tingkat Tinggi)
/* Fungsi yang menerima fungsi lain sebagai argumen atau mengembalikan fungsi lain. */

function operate(num, func) {
    return func(num);
}

const double = x => x * 2;

// console.log(operate(5, double));
 
// * 6. Callback Function
/* Fungsi yang dikirim sebagai argumen ke fungsi lain dan dipanggil setelah fungsi utama selesai. */

function fetchData(callback) {
    setTimeout(() => {
        // console.log("Data fetched!");
        callback();
    }, 2000);
}

function processData() {
    // console.log("Processing data...");
}

fetchData(processData);
// Output setelah 2 detik: "Data fetched!" kemudian "Processing data..."


// * 7. Generator Function
/* Fungsi yang dapat menghentikan eksekusi sementara dan melanjutkannya kembali menggunakan yield. */
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();
// console.log(generator.next().value); 
// console.log(generator.next().value); 
// console.log(generator.next().value); 



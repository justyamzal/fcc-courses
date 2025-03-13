//---------- IF ELSE STATEMENS ---------- //

//* Ex 1: Buying Chocolate
let priceOfChocolate = 1.99;
let hasAmountInCash = 5;

const canBuyChocolate = hasAmountInCash >= priceOfChocolate;

if (canBuyChocolate) {
    // console.log("Enjoy your purchases");
} else {
    // console.log("Sorry you do not have enough money!");
}

//* Ex 2: Restaurant Schedule 
let hour = 15;

if (hour >= 6 && hour <= 12) {
    // console.log('Serving Breakingfast');
} else if (hour > 12 && hour <= 14) {
    // console.log("Serving Lunch");
} else {
    // console.log("Serving Dinner");
}

//! This called code block, makes code more readable and looks clean
let restaurantTime = 15;

// if (restaurantTime >= 6.00 && restaurantTime <= 12.00 )
    // console.log('Serving Breakfast');
// else if (restaurantTime > 12.00 && restaurantTime <= 14.00)
    // console.log('Serving lunch');
// else 
    // console.log('Serving Dinner');



//---------- SWITCH-CASE STATEMENS ---------- //
// ! Switch case is only used for equality comparisons, switch case also provide clean syntax in the case when you're using variable and performing comparison equality. when using switch case you also want remember to supply default value

let job = "Cloud Engineer";

if (job === 'Software Developer') {
    // console.log('Writes code');
} else if (job === 'Designer') {
    // console.log('Make user interface documents');
} else if (job === 'Cloud Engineer') {
    // console.log('Manages and deploys cloud resources');
} else {
    // console.log('Works directly with customer');
}

//---------- FOR LOOPS ---------- //
//! for loops is use in order to execute a code block repeatedly, rather than repeat that code manually which will lead to code duplication

let numbers = [1,2,3,4,5,6,7,8,9,10];
let idx = 0;
let lengthOfArray = numbers.length;

// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);

for (let idx = 0; idx < numbers.length; idx++) {
    // console.log(numbers[idx]);

}

 
// n: this example more clean, but i think it is need to define the amount of index first. it is not getting from index of array. 
for (let num = 0; num <= 10; num++ ) {
    // console.log(num); 
}
// --------------------------------------------------


//---------- WHILE LOOPS ---------- //


// when do in for loop
let numbers1 = [1,2,3,4,5,6,8,9,10];
for (let idx = 0; idx < numbers.length; idx++) {        //the formula : initialization, condition, step condition/iteration/incre ment
    // console.log(numbers[idx]);
}


let idx2 = 0;
while (idx2 < numbers1.length) {
    // console.log(numbers[idx2]);
    idx2++;
}

let sum = 0;
while(true) {
    // console.log('Loop');
    sum++;

    if (sum === 10) 
        break;
}

// ! the similiarities between for loop and while loop is they both execute a block of code repeadted while a condition is true, 
// ! the difference is that for loop use for typically iterating over an array, while loop use in order to execute the same block of code while condition is true
  

//---------- DO WHILE LOOPS ---------- //

// ! while loop will check the condition first and if it is true than execute the code, 
//! do while loop it will execute the code first specify within curly braces and then check the condition it's true


let i = 0;

do {
    // console.log(i);
    i++;
} while (i < 10);




//---------- INFINITE LOOPS ---------- //
// for (let num = 0; num <= 100; num--) {
//     // console.log(num);
// }

// ! dangerous code, will make you pc crash


//---------- FOR-IN LOOPS ---------- //
const course = {
    name: 'Javascript for Beginners',
    duration: 3,
    sections: 7
};
//  console.log(course.name);
//  console.log(course['duration']);
//  console.log(course.sections);


// accessing all of the array 
for (const key in course) {
    // console.log(course[key]);
}

// ! For in loop is used to iterate through the keys of javascript object

//---------- FOR-OF LOOPS ---------- //

let number = [1,2,3,4,5,6,7,8,9,10];
for (let idx = 0; idx < numbers.length; idx++ ) {
    // consol e.log(numbers[idx]);
}

for (let element of numbers) {
    // console.log(element);
}

// ! for of loops is special syntax in js, that allows us to easily iterate over an array for each iteration we get access to element,u would use the four of loop over the traditional for loop in the case when you dont need to use index that you currently iterating


//---------- BREAK AND CONTINUE ---------- //
//! means to breakout of the loops execution and we would use this to terminate the execution of the loop, this can be use for all different loop

//! continue keyword can be use for within loops, for loops, while loops. it will skip the current iteration of that loops or index or skip on to the next iteration


// * Break Statement

// For loops
for(let i3 = 0; i3 < 10; i3++ ) {
    if (i3 === 5) {
        break; // exits the loop when i is 5
    }
    // console.log(i3);
}

// While
let i4 = 0;
while (i4 < 10) {
    if(i4 === 5) {
        break;  // exits the loop when i is 5
    } 
    // console.log(i4);
    i4++;
}

//Do while 
let i5 = 0;
do {
    if (i5 === 5) {
        break;
    }
    // console.log(i5);
    i5++;
} while (i5 < 10);


//For-in loop
const obj = {a:1, b:2, c:3, d:4, e:5 };
    for(let key in obj) {
        if(key === 'b') {
            break;
        }
        // console.log( obj[key] ); //output : 1 which is index 2, bcs index start couting from '0'
    }

//For-of loop
const arr = [1,2,3,4,5,6,7,8,9,10];

for(let element of arr) {
    if(element === 5) {
        break;
    }
    // console.log(element);
}


//* Continue Statement
 
//For loop
for (let i6 = 0; i6 < 10; i6++) {
    if (i6 % 2 === 0) {
        continue; //skipping for the even number
    }
    // console.log(i6);
}

//While 
let i7 = 0; 
while  (i7 < 10) {
    i7++;
    if (i7 % 2 === 0) {
        continue; //skipping for the even number
    }
    // console.log(i7);
}

//Do While
let i8 = 0;
do {
    i8++;
    if (i8 % 2 === 0) {
        continue;  //skipping for the even number
    } 
    // console.log(i8);
} while (i8 < 10);


//For-in Loop
const obj2 = { a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10} ; 
for (let key in obj2) {
    if (obj2[key] % 2 === 0) {
        continue; //skipping for the even number
    }
    // console.log( obj2[key] );
}

const arr2 = [1,2,3,4,5,6,7,8,9,10];
for(let element of arr2) {
    if (element % 2 === 0) {
        continue;
    }
    // console.log(element);
}


//---------- EXERCISE : MAX OF TWO NUMBERS ---------- //

//! implement a function to accept two numbers and returns the maximum number

function maxNum1(numb1,numb2) {
    if (numb1 > numb2) {
        return numb1;
    } else {
        return numb2;
    }
}   
// console.log(maxNum1(1,1));

function maxNum(num1,num2) {
    return num1 >= num2 ? num1 : num2; // kondisi ? nilai_jika_true : nilai_jika_false;
}

// console.log(maxNum(2,4));


//* Versi dengan Validasi Input:
function getMax(num1, num2) {
    // Validasi tipe data
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Kedua input harus berupa angka');
    }

    return num1 > num2 ? num1 : num2; // kondisi ? nilai_jika_true : nilai_jika_false;
    
/*
- Jika a > b benar (true) → maka hasilnya adalah a (nilai setelah ?).
- Jika a > b salah (false) → maka hasilnya adalah b (nilai setelah :).
*/

  }

//   console.log(getMax(5, 10));    // Output: 10
//   console.log(getMax(-3, 0));    // Output: 0
//   console.log(getMax(7, 7));     // Output: 7

//! implement a function to accept three numbers and returns the maximum number

//* 1️⃣ Menentukan Angka Terbesar
function maxNum3 (a, b, c) {
                        // I                // II
    return a > b ? (a > c ? a : c) : (b > c ? b : c )
}
// console.log(maxNum3(5, 12, 9));    // Output: 12
// console.log(maxNum3(-3, 0, 2));    // Output: 2
// console.log(maxNum3(7, 7, 1));     // Output: 7


/*
- Pertama, cek apakah a > b. Jika ya, bandingkan a dengan c. 
- Jika a lebih besar, kembalikan a, jika tidak, kembalikan c. 
- Jika a tidak lebih besar dari b, maka cek apakah b > c. Jika ya, kembalikan b, jika tidak, kembalikan c.
*/

//* 2️⃣ Menentukan Bilangan Positif, Negatif, atau Nol

function checkNumber(num) {
    return num > 0 ? "Positif": num < 0 ? "Negatif" : "Nol";
}
// console.log(checkNumber(10)); // Output: "Positif"
// console.log(checkNumber(-5)); // Output: "Negatif"
// console.log(checkNumber(0)); // Output: "Nol"

/*
- Jika num > 0, hasilnya "Positif".
- Jika num < 0, hasilnya "Negatif".
- Jika tidak keduanya (berarti num === 0), hasilnya "Nol".
*/

//* 3️⃣ Menentukan Apakah Angka Genap atau Ganjil 

function checkEvenOdd(num) {
    return num % 2 === 0 ? "Genap/Even" : "Ganjil/Odd"; // bilangan genap jika dibagi 0 tidak menyisakan hasil
}

// console.log(checkEvenOdd(9)); // Output: "Ganjil"
// console.log(checkEvenOdd(5)); // Output: "Ganjil"
// console.log(checkEvenOdd(24)); // Output: "Genap"

/*
Penjelasan:
- Jika num % 2 === 0 (bisa dibagi 2 tanpa sisa), maka "Genap".  
- Jika tidak, maka "Ganjil".
*/

//* 4️⃣ Mengecek Apakah Suhu Panas atau Dingin
function checkTemperature(temp) {
    return temp >= 30 ? "Panas" : temp <= 15 ? "Dingin" : "Sejuk";
}

// console.log(checkTemperature(35));  // Output: "Panas"
// console.log(checkTemperature(5));   // Output: "Dingin"
// console.log(checkTemperature(20));  // Output: "Sejuk"

//* 5️⃣ Menentukan Harga Setelah Diskon
 function getPriceWithDiscount(price) {
    return price > 100 ? price * 0.9 : price; }

// console.log(getPriceWithDiscount(150)); // Output: 135 (dapat diskon 10%)
// console.log(getPriceWithDiscount(80));  // Output: 80 (tidak dapat diskon)

//* 6️⃣ Menentukan Status Siswa (Lulus atau Tidak)
function checkPassGrade(score) {
    return score >= 60 ? 'Lulus' : "Tidak Lulus";
}
// console.log(checkPassGrade(75)); //Lulus
// console.log(checkPassGrade(50)); //Tidak Lulus


//---------- EXERCISE : FIZZBUZZ ---------- //
// * Implement a function to accept a number. the return "Fizzbuzz" if divisible by 3 and 5 or return "Fizz" if only divisible by 3 or return "Buzz" if only divisible by 5 or return the original number if not divisible by 3 or 5

// For Loop
for (let n = 1; n <= 15; n++) {  
    let output = "";                      // Variabel output dideklarasikan sebagai string kosong "" , Tujuan: Menyimpan hasil "Fizz", "Buzz", atau "FizzBuzz".
    if (n % 3 === 0) output += 'Fizz';    
    if (n % 5 === 0) output += 'Buzz';
    // console.log(output || n);
}

/*

!> for (let num3 = 1; num3 <= 100; num3++) {
- Loop for: Melakukan perulangan dari 1 sampai 100.  
- Variabel n dimulai dari 1 dan akan bertambah (n++) setiap iterasi hingga mencapai 100.

!> let output = "";
- Variabel output dideklarasikan sebagai string kosong "".
- Tujuan: Menyimpan hasil "Fizz", "Buzz", atau "FizzBuzz".

!> if (n % 3 === 0) output += 'Fizz';
- Cek apakah num3 habis dibagi 3 (n % 3 === 0)
- Jika iya, tambahkan "Fizz" ke dalam output.
🔹 Contoh:
n = 3, output = "Fizz"
n = 6, output = "Fizz"
n = 9, output = "Fizz"

!> if (n % 5 === 0) output += 'Buzz';
-Cek apakah num3 habis dibagi 5 (n % 5 === 0)
-Jika iya, tambahkan "Buzz" ke dalam output.
🔹 Contoh:
n = 5, output = "Buzz"
n = 10, output = "Buzz"
n = 15, output = "FizzBuzz" (karena 15 habis dibagi 3 dan 5)

!> console.log(output || n);
- Gunakan output || num3 untuk mencetak hasil:
- Jika output tidak kosong ("Fizz", "Buzz", atau "FizzBuzz"), maka cetak output.
- Jika output kosong (berarti n tidak habis dibagi 3 atau 5), maka cetak angka num3 itu sendiri.

*/


for (let f = 1; f <= 15; f++) {
    let output2 = "";
    if (f % 3 === 0) output2 = "Fizz";
    if (f % 5 === 0) output2 += "Buzz";
    // console.log(output2 || f);
}

/*
 1. Menggunakan output untuk menyimpan hasil sementara.
 2. Menggunakan += untuk menambahkan "Buzz" jika angka habis dibagi 5.
 3.Menggunakan console.log(output || i) untuk mencetak output jika ada, atau mencetak angka i jika tidak ada.

*/

// Ver. Ternary
for (let f1 = 1; f1 <= 100; f1++) {
    // console.log((f1 % 3 === 0 ? "Fizz" : "") + (f1 % 5 === 0 ? "Buzz" : "") || f1);
}


// If Else Function
function Fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "Fizzbuzz";
    } else if (number % 3 === 0 ) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}
// console.log(Fizzbuzz(1));

/*
📌 Perhitungan Manual FizzBuzz untuk Bilangan 1 - 10
Bilangan	    num % 3	         num % 5	       Hasil
-------------------------------------------------------
    1	        1 % 3 = 1 ❌	    1 % 5 = 1 ❌	    1
    2	        2 % 3 = 2 ❌	    2 % 5 = 2 ❌	    2
    3	        3 % 3 = 0 ✅	    3 % 5 = 3 ❌	    Fizz
    4	        4 % 3 = 1 ❌	    4 % 5 = 4 ❌	    4
    5	        5 % 3 = 2 ❌	    5 % 5 = 0 ✅	    Buzz
    6	        6 % 3 = 0 ✅	    6 % 5 = 1 ❌	    Fizz
    7	        7 % 3 = 1 ❌	    7 % 5 = 2 ❌	    7
    8	        8 % 3 = 2 ❌	    8 % 5 = 3 ❌    	8
    9	        9 % 3 = 0 ✅	    9 % 5 = 4 ❌	    Fizz
    10	        10 % 3 = 1 ❌	10 % 5 = 0 ✅	Buzz
    dst..
*/


//---------- EXERCISE :EVEN AND ODD NUMBERS ---------- //

//* Implement two functions : 
//! for the first function, have it accept an array as a parameter which contains a list of numbers. then console log the even numbers in the array

function printEvenNumbers(numbers_) {
    for(let num_ of numbers_) {
        if (num_ % 2 === 0) {
            // console.log(num_);
        }
    }
}

function testEvenNumbers() {
    const myArray = [10, 13, 15, 22, 33, 40, 55, 60, 73, 86, 87, 89];
    console.log("Even numbers in the array are...");
    printEvenNumbers(myArray);
}
// testEvenNumbers();


//! for the second function, have it accept an array and log the odd number
function printOddNumbers(numbers_) {
    for(let num_ of numbers_) {
        if(num_ % 2 !== 0) {
            // console.log(num_);
        }
    }                                         
}

function testOddNumbers (){
    const myArray2 = [10, 13, 15, 22, 33, 40, 55, 60, 73, 86, 87, 89]; 
    console.log("Odd numbers in the array are...");
    // printOddNumbers(myArray2);
}
// testOddNumbers();


//* Other Version Code...
function printEvenNumbers_(numbers_) {
    for(let num_ of numbers_) {
        if(num_ % 2 !== 0) {
            console.log(num_);
        }
    }
}
function printOddNumbers_(numbers_) {
    for(let num_ of numbers_){
        if(num_ % 2 === 0 ) {
            console.log(num_);
        }
    }
}
function testNumbers(){
    const thisArray = [1,2,3,10,11,12,23,24,25,36,37,38,45,47,49];
    
    console.log("Even Numbers in the array:")
    printEvenNumbers_(thisArray);

    console.log("Odd Numbers in the array:")
    printOddNumbers_(thisArray);
}
// testNumbers();

//* Kesimpulan
/*
* Control flow adalah fondasi logika pemrograman untuk mengatur alur eksekusi kode.

! Pilih struktur yang tepat:

- >if-else untuk kondisi kompleks.

-> switch-case untuk equality check yang banyak.

-> for untuk iterasi dengan jumlah pasti.

-> while untuk iterasi dengan kondisi dinamis.

! Hindari infinite loop dengan memastikan kondisi berakhir.

! Break & Continue untuk kontrol loop lebih fleksibel.


*/
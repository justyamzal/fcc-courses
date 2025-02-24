// --- ARITHMETHIC OPERATOR/OPERATION --- //
//* | * (multiplication) , - (subtraction) , + (addition), / (division) , % (modulo/modulus operator) |

//* Arithmetic Operations in JavaScript
const a = 15;
const b = 4;

//* Addition
const addition = a + b;  
// 15 + 4 = 19
// console.log('Addition:', addition);

//* Subtraction
const subtraction = a - b;  
// 15 - 4 = 11
// console.log('Subtraction:', subtraction);

//* Multiplication
const multiplication = a * b; 
// 15 × 4 = 60
// console.log('Multiplication:', multiplication);

//* Modulus (Remainder)
const modulus = a % b;  
// 15 ÷ 4 = 3 remainder 3
// console.log('Modulus:', modulus);

//* Bonus: Division
const division = a / b;  
// 15 ÷ 4 = 3.75
// console.log('Division:', division);

// --- INCREMENTS
console.log("--- INCREMENT ---");

let num = 1;
console.log("if num = 1");
//* Method 1 : Using (+) Operator
num = num + 1;
console.log("+1 -> ", num); 
//Output 2


//* Method 2: Using (+=) Operator
//! Reset Num
num = 1;

num += 1;
console.log("+=1 ->", num);

// * Method 3 : Using (+-) Operator



//* Method 4 : Using (num++) Post-Increment
// ! Reset Num
num = 1;

console.log("Num++ ->", num++); 
// Output: 1 (returns value BEFORE increment)
console.log("After post-increment ->", num); 
// Output: 2


//* Method 5 :  Using (++num) Pre-Increment  
// ! Reset Num
num = 1;

console.log("++Num ->",++num);
console.log("After pre-increment ->", num); 
//Output 2

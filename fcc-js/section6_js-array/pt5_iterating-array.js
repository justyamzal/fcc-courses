// -----  ITERATING AN ARRAY ----- //



//* For-of loop
/*🔹 Contoh Implementasi */
const numbers = [1,2,3,4,5];

// for (let number of numbers) 
    // console.log(number); //! 1; 2; 3; 4; 5;

for (let number of numbers) {
    // console.log(number);  //! 1; 2; 3; 4; 5;
}

//! Menggunakan forEach */

// numbers.forEach(number => console.log(number)); //! 1; 2; 3; 4; 5;

numbers.forEach((number, index) => console.log(`At index, ${index}: ${number}`));





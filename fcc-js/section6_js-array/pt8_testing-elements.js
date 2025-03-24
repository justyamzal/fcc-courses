 // -----  TESTING THE ELEMENTS OF AN ARRAY ----- //
/*
* every() → Semua elemen harus memenuhi kondisi.
* some() → Setidaknya satu elemen memenuhi kondisi.
*/

const _bilangan = [10, 20, 30];
// console.log(_bilangan.every(bil => bil > 5)); // true
// console.log(_bilangan.some(bil => bil > 25)); // true

//* Every(), the every() method is a built-in method in the array data structure and test whether every single men in array satiesfies a specied condition
const numbers = [2, 4, 6, 8, 10];
const areAllEven = numbers.every(number => number % 2 === 0);
/*
const areAllEven = numbers.every(number => {
    return number % 2 === 0;
});
*/

// console.log(`areAllEven: ${areAllEven}`); //! Output:  areAllEven: true


//* Some(), built-in method in the array data structure and it return true if at least one of the elements in the array passes a particular condition and false otherwise
const numbers_ = [1, 3, 5, 7, 8, 9];
const hasOneEvenNumber = numbers_.some(number => number % 2 === 0 );

console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`); //! Output : hasOneEvenNumber: true
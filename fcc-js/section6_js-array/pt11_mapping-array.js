// -----  MAPPING AN ARRAY ----- //
/*
* .Map() , Mengubah setiap elemen dalam array.

* Map() Method dalam JavaScript adalah salah satu metode array yang digunakan untuk mengubah (transformasi) setiap elemen dalam array menjadi bentuk baru, lalu mengembalikan array hasil transformasi tersebut.

* Apa itu "mapping"?
Mapping adalah proses mengonversi setiap elemen array ke dalam bentuk lain (misalnya: mengubah tipe data, memodifikasi nilai, atau mengekstrak properti) tanpa mengubah array asli .

🔹 Contoh Implementasi :
*/

const theNumbers = [1,2,3];
const doubled = theNumbers.map(num => num * 2);
// console.log(doubled); //[ 2, 4, 6 ]

const numbers = [2, 4, 6, 8, 10];
const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); //! [ 4, 16, 36, 64, 100 ]

const characters = ['a', 'b', 'c', 'd'];
const upperCaseCharacters = characters.map(char => char.toUpperCase());
// console.log(upperCaseCharacters); //[ 'A', 'B', 'C', 'D' ]


// working with the objects 
const employees = [
    {id:1, name:'Alice', email:'AliCe@gmail.com'},
    {id:2, name:'Steven', email:'STeVen@gmail.com'},
    {id:3, name:'Joe', email:'Joe@gmail.com'}
];

const updatedEmployees = employees.map(employee => ({
    ...employee,
    email: employee.email.toLowerCase()
}));

//console.log(updatedEmployees);

/*
! Output : 
[
  { id: 1, name: 'Alice', email: 'alice@gmail.com' },
  { id: 2, name: 'Steven', email: 'steven@gmail.com' },
  { id: 3, name: 'Joe', email: 'joe@gmail.com' }
]
*/

/*
? How would you transform/map over each element of an array?
you can use built-in map() method, with that method you would specify a callback function where you operate on each element and transform it in som way this would result in creating a new array consisting of those updated value
*/
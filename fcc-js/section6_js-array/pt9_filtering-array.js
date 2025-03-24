 // -----  FILTERING AN ARRAY ----- //

/* 🔹 Contoh Implementasi */
const _bilangan_ = [10, 15, 20, 25];
const filtered = _bilangan_.filter(bil => bil > 15);
// console.log(filtered);  // [20, 25]

const employees = [
    {id:1, name:'Alice', role:'Developer'},
    {id:2, name:'Bob', role:'Designer'},
    {id:3, name:'Charlie', role:'Developer'},
    {id:4, name:'Danielle', role:'Manager'}
];

const Developer = employees.filter(employee => employee.role === 'Developer');
// console.log(Developer);
/*
!Output: 
[
  { id: 1, name: 'Alice', role: 'Developer' },
  { id: 3, name: 'Charlie', role: 'Developer' }
]
*/

/*
How would you filter the elements of an array?
- you would use the built in filter method and specify callback function you would specify what condition you want to be true in order for that element to be included in the array to return
*/
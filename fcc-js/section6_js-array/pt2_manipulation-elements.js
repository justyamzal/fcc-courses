//---------- (MANIPULATION ELEMENT) ----------//

// - Adding Elements
//----- ADDING ELEMENTS, 
/*
📌 Adding Elements to an Array dalam JavaScript
🔍 Apa Itu Adding Elements to an Array?
Menambahkan elemen ke dalam array dalam JavaScript berarti memasukkan nilai baru ke dalam array yang sudah ada. JavaScript menyediakan beberapa metode untuk menambah elemen di awal, akhir, atau posisi tertentu dalam array.
*/


/*
* --- 📌 Mengakses dan Memanipulasi Array ---
1️⃣ Mengakses Elemen dengan Indeks */

let cars = ["Toyota", "Honda", "Ford"];
// console.log(cars[1]); //! Output: Honda

//n: ➡ Indeks dimulai dari 0 (cars[0] adalah "Toyota", cars[1] adalah "Honda").


/*
* 2️⃣ Mengubah Elemen dalam Array */
let pets = ["Dog","Cat","Bird"];
pets[1] = "Rabbit"; // Mengubah "Cat" menjadi "Rabbit"
// console.log(pets); // Output: ["Dog", "Rabbit", "Bird"]

//n: ➡ Array bersifat mutable, artinya kita bisa mengubah isinya.

/*
* 3️⃣ Mengetahui Panjang (Length) Array */
let languages = ["javascript", "Python", "C++", "PHP"];
// console.log(languages.length);  // Output: 4

/*
* --- 📌 OPERASI ARRAY (Methods) ---
--------------------------------------

*1️⃣ Menambahkan dan Menghapus Elemen
---------------------------------------------------------------------------------------
Method	    Deskripsi	                                    Contoh
---------------------------------------------------------------------------------------
.push()	    Menambahkan elemen di akhir	                    arr.push("item")
.pop()	    Menghapus elemen terakhir	                    arr.pop()
.unshift()	Menambahkan elemen di awal	                    arr.unshift("item")
.shift()	Menghapus elemen pertama	                    arr.shift()
Contoh:
*/

//* Contoh: 

let _fruits = ["Apple", "Banana"];

//*  ----- Menambahkan elemen di akhir (PUSH) -----
_fruits.push("Cherry","Durian"); //[ 'Apple', 'Banana', 'Cherry', 'Durian']

//* ----- Menghapus elemen terakhir (POP) -----
_fruits.pop(); //[ 'Apple', 'Banana', 'Cherry']

//* ----- Menambahkan elemen di awal (UNSHIFT) -----
_fruits.unshift("Avocado"); //[ 'Avocado', 'Apple', 'Banana', 'Cherry']
_fruits.unshift("Avocado","Apricot"); //[ 'Avocado', 'Apple', 'Banana', 'Cherry']


//* ----- Menghapus elemen pertama (SHIFT) -----
_fruits.shift(); //[ 'Apple', 'Banana', 'Cherry']

//* ----- Menambahkan elemen ditengah array ( .SPLICE() ) -----


// console.log(_fruits);

/*
➡ Menggunakan .push() dan .pop() untuk bekerja dengan elemen di akhir array.
➡ Menggunakan .unshift() dan .shift() untuk bekerja dengan elemen di awal array.*/

/*
* 2️⃣ Menggabungkan dan Memotong Array (Concat, Slice)

----------------------------------------------------------
Method	    Deskripsi	        Contoh
----------------------------------------------------------
.concat()	Menggabungkan       array	arr1.concat(arr2)
.slice()	Memotong bagian     array	arr.slice(1, 3)
Contoh:
*/

let arry1 = [1,2,3];
let arry2 = [4,5,6];

let combined = arry1.concat(arry2);  // Output: [1, 2, 3, 4, 5, 6]

let sliced = combined.slice(2, 5);  // Output: [3, 4, 5]
// console.log(sliced);

/*
➡ concat() menggabungkan array tanpa mengubah aslinya.
➡ slice(start, end) mengambil elemen dari indeks start sampai sebelum end.
*/

/*
* 3️⃣ Mengubah Array /Menambahkan elemen ditengah array ( .Splice() ) 
_______________________________________________________________________________
Method	      || Deskripsi	                                || Contoh
-------------------------------------------------------------------------------
.splice()	  || Menambah, menghapus, atau mengganti elemen || arr.splice(start, deleteCount, item1, item2, ...)

*/

let values = [10, 20, 30, 40, 50];
values.splice(2, 1, 25, 26); //! Menghapus 1 elemen dari indeks 2 dan menambahkan 25, 26

let values2 = [10, 20, 30, 40, 50];

values2.splice(1, 0, 25, 26); //! tidak mau menghapus 1 element pun maka


// console.log(values); //! Output: [10, 20, 25, 26, 40, 50]

// console.log(values2); //! Output: [10, 25, 26, 20, 30, 40, 50]

//n: ➡ Menghapus angka 30 di indeks 2 lalu menggantinya dengan 25, 26.

// -----  ITERATING AN ARRAY ----- //

/*
* --- 📌 Looping dalam Array (For Loop, For Each) ---
---------------------------------------------------------

* ----- 1️⃣ Menggunakan for Loop -----
*/

let theFruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < theFruits.length; i++) {
    // console.log(theFruits[i]); //! Apple; Banana; Cherry
}

/*
* ----- 2️⃣ Menggunakan forEach() -----
*/

theFruits.forEach((theFruits) => {
    // console.log(theFruits);  //! Apple; Banana; Cherry
});

//n: ➡ Lebih sederhana dibanding for loop.

/*
* --- 📌 Array Multidimensi ---
Array juga bisa memiliki array di dalamnya (nested array).
*/

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// console.log(matrix[1][2]); //! Output: 6

//n: ➡ matrix[1][2] mengakses baris ke-2 dan kolom ke-3 (6)., perhitungan dimulai dari 0 karena index array

/*
✅ Array adalah struktur data yang bisa menyimpan banyak nilai dalam satu variabel.
✅ Indeks array dimulai dari 0 dan bisa diakses dengan array[index].
✅ JavaScript menyediakan banyak metode bawaan (push, pop, splice, dll.) untuk memanipulasi array.
✅ Array bisa memiliki banyak tipe data berbeda dan bersifat dinamis.
✅ Looping (for, forEach) sering digunakan untuk mengolah array.
*/

// -----  SPREAD OPERATOR (...) ----- // 
/*
* --- 📌 Menambahkan Elemen dengan Operator Spread (...) ----
---------------------------------------------------------------
Selain metode di atas, kita juga bisa menggunakan spread operator (...) untuk menambahkan elemen baru.

* 1️⃣ Menambahkan Elemen di Akhir
*/
let animals = ["Dog","Cat"];
animals = [...animals, "Rabbit"];
// console.log(animals); //! Output: [ 'Dog', 'Cat', 'Rabbit' ]


/*
* 2️⃣ Menambahkan Elemen di Awal
*/

let theValues = [2, 3, 4];
theValues = [1, ...theValues];
// console.log(theValues); //! Output: [1, 2, 3, 4]

/*
* 3️⃣ Menambahkan Elemen di Posisi Tertentu
*/

let letters = ["A","C","D"];
letters = [...letters.slice(0, 1), "B", ...letters.slice(1)];
// console.log(letters); // Output: ["A", "B", "C", "D"]

//! ➡ Menggunakan slice() untuk membagi array, lalu menyusun ulang dengan spread operator.


/*
* --- 📌 Contoh Implementasi dalam Kasus Nyata ---
*1️⃣ Menambahkan Produk ke Keranjang Belanja
*/
let cart = ["Laptop","Mouse"];
cart.push("Keyboard") // Menambahkan "Keyboard" ke dalam keranjang
// console.log(cart); //! Output : [ 'Laptop', 'Mouse', 'Keyboard' ]

/*
* 2️⃣ Menyisipkan Nama ke Daftar Peserta
*/
let participants = ["Alice","Charlie"];
participants.splice(1, 0, "Bob");  //! Menambahkan "Bob" setelah "Alice" (start fr index 1, delete count 0)
// console.log(participants); // Output: ["Alice", "Bob", "Charlie"]


/*
* 3️⃣ Menambahkan Pesan Chat Terbaru ke Awal
*/
let chatMessages = ["Hello","How are you?"];
chatMessages.unshift("Hey!");  // Pesan terbaru ada di awal

// console.log(chatMessages); // Output: ["Hey!", "Hello", "How are you?"]

/*
* 📌 Kesimpulan
✅ Menambahkan elemen ke array bisa dilakukan dengan beberapa metode (push(), unshift(), splice(), spread operator).
✅ push() menambah di akhir, unshift() menambah di awal, splice() menambah di posisi tertentu.
✅ Spread operator (...) bisa digunakan untuk menambahkan elemen tanpa mengubah array asli.
✅ Pahami kapan harus menggunakan metode yang sesuai untuk meningkatkan efisiensi program.
*/

// - Removing Elements
// ----- REMOVING ELEMENTS ----- //

//n: lebih lengkap bisa kembali ke sisi atas, ADDING ELEMENTS (MANIPULATION ELEMENT)

/*
* --- Metode untuk menghapus elemen dari array: --- 

?- Akhir (pop())
?- Awal (shift())
?- Tengah (splice())

🔹 Contoh Implementasi :
*/
const Fruits = ["Avocado", "Banana","Cherry","Durian","Eggplant"];

//! Menghapus elemen terakhir
Fruits.pop();
// console.log(Fruits); //! Output: [ 'Avocado', 'Banana', 'Cherry', 'Durian' ]

//! Menghapus elemen pertama
Fruits.shift();
// console.log(Fruits); //!  Output: [ 'Banana', 'Cherry', 'Durian' ]

//! Menghapus elemen di tengah (index 1)
Fruits.splice(1,1);
// console.log(Fruits); //!  Output: [ 'Banana', 'Durian' ]


// - Emptying Elements
// -----  EMPTYING AN ARRAY -----//

/*
* Contoh Implementasi
*/
let numbers = [10, 20, 30, 40];

//! Cara 1: Mengosongkan dengan panjang 0
numbers.length = 0;
// console.log(numbers);

//! Cara 2: Menggunakan splice()
let numbers_ = [10, 20, 30, 40];
numbers_.splice(0, numbers_.length);
// console.log(numbers_);

// - Combining and Slicing Arrays
// ----- COMBINING AND SLICING ARRAYS ----- //

/* Kita bisa menggabungkan (concat()) dan memotong (slice()) array. */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

//* Menggabungkan array (CONCAT Method)
const combined_ = array1.concat(array2);
// console.log(combined_); // [ 1, 2, 3, 4, 5, 6 ]
 
//* Memotong array (SLICE Method)
const sliced_ = combined_.slice(2, 4);
// console.log(sliced_); //! [3, 4]

const secondSlice = combined_.slice(0);
// console.log(secondSlice); //! [ 1, 2, 3, 4, 5, 6 ]
const firstSlice = combined_.slice(0, 4);
// console.log(firstSlice); //! from 0 -> until 4,  Output: [ 1, 2, 3, 4 ]


/*
*🔍 Bagaimana slice(2, 4) menghasilkan [3, 4]?
Fungsi slice(start, end) bekerja sebagai berikut:

! start (2) → Index awal dari elemen yang akan diambil.
! end (4) → Index akhir (tidak termasuk) elemen yang akan diambil.
! Array combined setelah concat() adalah:

Index:  0   1   2   3   4   5
--------------------------------
Array: [1,  2,  3,  4,  5,  6]

➡️ slice(2, 4) mengambil elemen dari index ke-2 hingga sebelum index ke-4:

Index 2 → 3 ✅
Index 3 → 4 ✅
Index 4 → 5 (Tidak diambil) ❌
🔹 Outputnya:
console.log(sliced); // [3, 4]

⚡ Kesimpulan:
Metode slice(start, end) mengambil elemen dari index start hingga sebelum end, tetapi tidak termasuk elemen pada index end
*/


// - Spread Operator
// -----  SPREAD OPERATOR (...) ----- //
/*  using three dots in order to copy over an object, this is more common use to 
! Alternatif untuk .concat() */
 
const _combined = [ ...array1, ...array2 ];
// console.log(_combined); //! [ 1, 2, 3, 4, 5, 6 ]

let a = [1, 2];
let b = [...a];
// console.log(b); //[ 1, 2 ]


// - Joining Arrays
// ----- JOINING ARRAYS ----- //

/*
Mengubah array menjadi string.
🔹 Contoh Implementasi
*/
const words = ["Hello", "World"];
// console.log(words.join(" ")); //!Hello World

const theNumbers = [1, 2, 3, 4, 5];
const joinedNumbers = theNumbers.join(', ');
// console.log(joinedNumbers);

const courseName = 'Javascript for Beginners';
const parts = courseName.split(' '); //! [ 'Javascript', 'for', 'Beginners' ]
// console.log(parts);

const urlSlug = parts.join('-');
// console.log(urlSlug); //! Javascript-for-Beginners

const lowercaseCourseName = courseName.toLocaleLowerCase();
// console.log(lowercaseCourseName);


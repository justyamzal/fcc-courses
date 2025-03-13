// ----- INTRODUCTION TO ARRAYS -----//

const { slice } = require("lodash");

/*
* ---🔍 Apa Itu Array? ---
Array adalah struktur data dalam JavaScript yang digunakan untuk menyimpan banyak nilai dalam satu variabel.

Ciri-ciri utama array dalam JavaScript:
✅ Dapat menyimpan berbagai jenis data (number, string, object, function, dll.).
✅ Memiliki indeks (dimulai dari 0).
✅ Dapat diubah ukurannya (bersifat dinamis).
✅ Merupakan tipe data objek di JavaScript.

Contoh Sederhana:
*/
let fruits_ = ["Apple","Banana", "Cherry"];
// console.log(fruits_[0]);


/*
➡ fruits adalah array yang menyimpan 3 string.
➡ Akses elemen menggunakan indeks (fruits[0] untuk "Apple").*/

/*
* --- 📌 Cara Membuat Array ---
1️⃣ Menggunakan Notasi Bracket ([]) – Cara Paling Umum
*/

//-- Array Numbers
let value_ = [10,20,30,40,50];
// console.log(value_);

//-- Mixed Array
const mixedArray = ["Hello",25,true,{name:"john"}];

// console.log(value_); //! [10,20,30,40]
// console.log(mixedArray); //! ["Hello", 25, true, { name: "John" }]

//n: ✅ Array bisa berisi tipe data berbeda seperti string, angka, boolean, dan objek.
//n: 📌 Array dibuat dengan tanda [ ], dan elemen dipisahkan dengan koma ,.


/*
2️⃣ Menggunakan new Array() – Kurang Direkomendasikan
*/
let colors = new Array("Red", "Green", "Blue");
// console.log(colors); // Output: ["Red", "Green", "Blue"]

//n: ➡ Metode ini jarang digunakan karena dapat menyebabkan kebingungan jika hanya 1 angka dimasukkan (new Array(5) akan membuat array kosong dengan panjang 5, bukan berisi angka 5).




//---------- (MANIPULATION ELEMENT) ----------//

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

//! Menambahkan elemen di akhir	 
_fruits.push("Cherry","Durian"); //[ 'Apple', 'Banana', 'Cherry', 'Durian']

//! Menghapus elemen terakhir
_fruits.pop(); //[ 'Apple', 'Banana', 'Cherry']

//! Menambahkan elemen di awal	
_fruits.unshift("Avocado"); //[ 'Avocado', 'Apple', 'Banana', 'Cherry']

//! Menghapus elemen pertama
_fruits.shift(); //[ 'Apple', 'Banana', 'Cherry']

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
* 3️⃣ Mengubah Array (Splice) 
_______________________________________________________________________________
Method	      || Deskripsi	                                || Contoh
-------------------------------------------------------------------------------
.splice()	  || Menambah, menghapus, atau mengganti elemen || arr.splice(start, deleteCount, item1, item2, ...)

*/

let values = [10, 20, 30, 40, 50];
values.splice(2, 1, 25, 26); //! Menghapus 1 elemen dari indeks 2 dan menambahkan 25, 26

// console.log(values); //! Output: [10, 20, 25, 26, 40, 50]

// ➡ Menghapus angka 30 di indeks 2 lalu menggantinya dengan 25, 26.

/*
* --- 📌 Looping dalam Array (For Loop, For Each) ---
---------------------------------------------------------

* 1️⃣ Menggunakan for Loop
*/

let theFruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < theFruits.length; i++) {
    // console.log(theFruits[i]);
}

/*
* 2️⃣ Menggunakan forEach()
*/

theFruits.forEach((theFruits) => {
    // console.log(theFruits);
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

// ----- REMOVING ELEMENTS ----- //

//n: lebih lengkap bisa kembali ke sisi atas, ADDING ELEMENTS (MANIPULATION ELEMENT)

/*
* Metode untuk menghapus elemen dari array:

- Akhir (pop())
- Awal (shift())
- Tengah (splice())
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

// ----- COMBINING AND SLICING ARRAYS ----- //

/* Kita bisa menggabungkan (concat()) dan memotong (slice()) array. */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Menggabungkan array
const combined_ = array1.concat(array2);
// console.log(combined_); // [ 1, 2, 3, 4, 5, 6 ]

// Memotong array
const sliced_ = combined_.slice(2, 4);
// console.log(sliced_);

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


// -----  SPREAD OPERATOR (...) ----- //
/* Alternatif untuk .concat() */
const _combined = [ ...array1, ...array2 ];
// console.log(_combined);

// -----  ITERATING AN ARRAY ----- //

/*🔹 Contoh Implementasi */
const bilangan = [1,2,3];

/* Menggunakan forEach */
// bilangan.forEach(bil => console.log(bil));


// -----  JOINING ARRAYS ----- //

/*
Mengubah array menjadi string.
🔹 Contoh Implementasi
*/
const words = ["Hello", "World"];
// console.log(words.join(" ")); //Hello World


// -----  SORTING ARRAYS ----- //
/* 🔹 Contoh Implementasi */

const bilangan_ = [40,10,30,20];
bilangan.sort((a,b) => a - b);
// console.log(bilangan_);


// -----  TESTING THE ELEMENTS OF AN ARRAY ----- //
/*
every() → Semua elemen harus memenuhi kondisi.
some() → Setidaknya satu elemen memenuhi kondisi.
*/

const _bilangan = [10, 20, 30];
// console.log(_bilangan.every(bil => bil > 5)); // true
// console.log(_bilangan.some(bil => bil > 25)); // true


// -----  FILTERING AN ARRAY ----- //

/* 🔹 Contoh Implementasi */
const _bilangan_ = [10, 15, 20, 25];
const filtered = _bilangan_.filter(bil => bil > 15);
// console.log(filtered);  // [20, 25]



// -----  MAPPING AN ARRAY ----- //
/*
* Mengubah setiap elemen dalam array.
🔹 Contoh Implementasi :
*/

const theNumbers = [1,2,3];
const doubled = theNumbers.map(num => num * 2);
// console.log(doubled); //[ 2, 4, 6 ]



// -----  REDUCING AN ARRAY ----- //
/* 
* Menghitung total nilai dalam array. 
*/
const theNumbers_ = [1, 2, 3, 4];
const sum = theNumbers_.reduce((acc, curr) => acc + curr, 0); //! acc = Accumulator ( Menyimpan hasil akumulasi dari operasi sebelumnya),  curr = Current value ( Menyimpan hasil akumulasi dari operasi sebelumnya)
// console.log(sum);



//----- Finding Elements (Primitives) - JavaScript -----//
 
/*
🔍 Apa Itu Finding Elements (Primitives)?
Dalam JavaScript, Finding Elements (Primitives) berarti mencari elemen dalam array yang berisi nilai primitif (seperti number, string, atau boolean).

➡ JavaScript menyediakan beberapa metode untuk mencari elemen dalam array primitif, yaitu:
1️⃣ indexOf()
2️⃣ lastIndexOf()
3️⃣ includes()
4️⃣ find()
5️⃣ findIndex()
*/

/*
* 📌 1️⃣ indexOf() → Mencari Indeks Elemen Pertama yang Cocok
Metode indexOf() mencari nilai dalam array dan mengembalikan indeks pertama di mana elemen tersebut ditemukan. Jika tidak ditemukan, mengembalikan -1.

Contoh:
*/
let score = [10, 20, 30, 40, 50];

// console.log(score.indexOf(30));
// console.log(score.indexOf(100));

//! ➡ 30 ditemukan di indeks 2.
//! ➡ Jika elemen tidak ditemukan, indexOf() mengembalikan -1.
//! 📌 Gunakan indexOf(value) saat ingin mengetahui di mana posisi elemen dalam array.

/*
*📌 2️⃣ lastIndexOf() → Mencari Indeks Elemen Terakhir yang Cocok
Mirip dengan indexOf(), tetapi mencari dari belakang.

Contoh:
*/

let values_ = [10, 20, 30, 40, 50];
// console.log(values_.lastIndexOf(30));  // output : 2, menghitung index dari belakang


/*

* 📌 3️⃣ includes() → Mengecek Apakah Elemen Ada di Array
Metode includes() mengecek apakah array memiliki elemen tertentu dan mengembalikan true atau false.

Contoh:
*/

let juices = ["avocado","banana","cherry"];
// console.log(juices.includes("banana"));
// console.log(juices.includes("mango"));


/*
➡ Jika elemen ditemukan, includes() mengembalikan true.
➡ Jika tidak ditemukan, includes() mengembalikan false.
📌 Gunakan includes(value) saat hanya ingin tahu apakah suatu elemen ada di dalam array atau tidak.
*/

/*
* 📌 4️⃣ find() → Mencari Elemen Pertama yang Memenuhi Kondisi
Metode find() digunakan untuk mencari elemen pertama yang sesuai dengan kondisi yang diberikan dalam sebuah fungsi callback.

Contoh:
*/
let _Values = [10,20,30,40,50];
let theResult = _Values.find(val => val > 25);
// console.log(theResult); //! Output: 30 (karena 30 adalah angka pertama yang lebih dari 25)


/*
➡ find() mengembalikan nilai pertama yang cocok dengan kondisi (num > 25).
➡ Jika tidak ada elemen yang cocok, hasilnya undefined.
📌 Gunakan find(callback) saat mencari elemen pertama yang memenuhi kondisi tertentu.
*/


/*
* 📌 5️⃣ findIndex() → Mencari Indeks Elemen Pertama yang Memenuhi Kondisi
Metode findIndex() sama seperti find(), tetapi mengembalikan indeks dari elemen yang ditemukan, bukan nilainya.

Contoh:
*/
let _values = [10, 20, 30, 40, 50];
let _index = _values.findIndex(val => val > 25);
// console.log(_index); //! Output: 2 (karena 30 ada di indeks ke-2)

/*
➡ findIndex() mengembalikan indeks dari elemen pertama yang memenuhi kondisi (num > 25).
➡ Jika tidak ada yang cocok, hasilnya -1.
📌 Gunakan findIndex(callback) jika ingin mengetahui posisi elemen dalam array berdasarkan kondisi.
*/

/*
* 📌 Perbandingan Metode dalam Tabel
------------------------------------------------------------------------------------------------------------------------------
Metode	                Fungsi	                                    Return Jika Ditemukan	        Return Jika Tidak Ditemukan
-------------------------------------------------------------------------------------------------------------------------------
indexOf(value)	      Mencari indeks pertama dari nilai	        Indeks pertama ditemukan	            -1
lastIndexOf(value)	  Mencari indeks terakhir dari nilai	    Indeks terakhir ditemukan	            -1
includes(value)	      Mengecek apakah nilai ada dalam array	    true	                                false
find(callback)	      Mencari elemen pertama yang cocok	        Nilai elemen	                       undefined
findIndex(callback)	  Mencari indeks elemen pertama yang cocok	Indeks elemen	                          -1

*/


/*
📌 Contoh Implementasi dalam Kasus Nyata
1️⃣ Mengecek Apakah Produk Tersedia di Stok
*/
let products = ["laptop","mouse","keyboard","monitor","printer"];

if (products.includes("mouse")) {
    // console.log("Produk tersedia!");
} else {
    // console.log("Produk tidak tersedia!");
    
}
//! Output : tersedia!
/* ➡ Menggunakan includes() untuk mengecek apakah produk ada dalam stok. */

/*
2️⃣ Mencari Posisi Siswa dalam Daftar
*/
let students_ =["Alice","Bob","Charlie","David","Elias"];

let position = students_.indexOf("Charlie");
// console.log(`Charlie is on position ${position + 1 } of the list`);


/*
3️⃣ Menemukan Karyawan dengan Gaji Tertentu
*/

let employees = [
    {name: "John",salary:3000},
    {name: "Jane",salary:3500},
    {name: "Smith",salary:4000},
    {name: "Marteen",salary:4500},
    {name: "Shayne",salary:3300}
];

let highEarner = employees.find(emp => emp.salary > 3500);
// console.log(highEarner); //! Output: { name: "Smith", salary: 4000 }

/* ➡ Menggunakan find() untuk mencari karyawan dengan gaji di atas 3500. */

/*
* 📌 Kesimpulan
! ✅ Metode indexOf(), lastIndexOf(), includes() digunakan untuk mencari nilai langsung dalam array primitif.
! ✅ Metode find() dan findIndex() digunakan untuk mencari berdasarkan kondisi yang lebih kompleks.
! ✅ Gunakan metode yang sesuai tergantung pada apakah kita butuh nilai, indeks, atau hanya ingin tahu apakah elemen ada.
! ✅ Memahami cara menemukan elemen dalam array sangat penting dalam manipulasi data dalam JavaScript.
*/

//----- Finding Elements (Reference Types)  -----//
/*
* 🔍 Apa Itu Finding Elements (Reference Types) dalam javascript?
Dalam JavaScript, Finding Elements (Reference Types) berarti mencari elemen dalam array yang berisi referensi objek.

➡ Perbedaan dengan mencari elemen primitif:

! - Elemen primitif (number, string, boolean) dapat dicari dengan indexOf() atau includes().
! - Elemen referensi (object, array, function) harus dicari menggunakan find() atau findIndex(), karena indexOf() dan includes() hanya bekerja dengan nilai yang identik dalam memori.
*/
/*
* 📌 Cara Mencari Elemen dalam Array Referensi
Karena objek dalam JavaScript disimpan berdasarkan referensi, kita tidak bisa mencarinya langsung dengan indexOf() atau includes(). Kita harus menggunakan:

1️⃣ find() → Mengembalikan objek pertama yang cocok
2️⃣ findIndex() → Mengembalikan indeks objek pertama yang cocok
3️⃣ some() → Mengecek apakah ada elemen yang cocok
4️⃣ filter() → Mengembalikan semua elemen yang cocok
*/
/*
* ---📌 1️⃣ find() → Mencari Objek Pertama yang Cocok ---
Metode find() mencari elemen pertama yang memenuhi kondisi dalam fungsi callback dan mengembalikan objek tersebut.

Contoh:
*/

let users = [
    {id: 1, name:"Alice"},
    {id: 2, name:"Bob"},
    {id: 3, name:"Charlie"},
    {id: 4, name:"Dannie"}

];

let theUser = users.find( theUser => theUser.id === 3 );
// console.log(theUser); //! { id: 3, name: 'Charlie' }

/*
➡ Mencari objek dengan id === 2 dan mengembalikan objek tersebut.
➡ Jika tidak ditemukan, hasilnya undefined.
📌 Gunakan find() saat hanya ingin mendapatkan satu objek pertama yang cocok.
*/

/*
* ---📌 2️⃣ findIndex() → Mencari Indeks Objek Pertama yang Cocok ---
Metode findIndex() sama seperti find(), tetapi mengembalikan indeks dari objek pertama yang memenuhi kondisi.
*/

let products_ = [
    {id:101, name: "laptop"},
    {id:102, name: "mouse"},
    {id:103, name: "keyboard"},
    {id:104, name: "desktop"},
    {id:105, name: "cpu"},
    {id:106, name: "printer"},
    {id:107, name: "handphone"},
    {id:108, name: "headset"}
];

let index = products_.findIndex(product => product.name === "mouse");
// console.log(index); //! Output: 1
/*
➡ Mencari objek dengan name === "Mouse" dan mengembalikan indeksnya (1).
➡ Jika tidak ditemukan, hasilnya -1.
📌 Gunakan findIndex() saat butuh posisi objek dalam array.
*/

/*
* --- 📌 3️⃣ some() → Mengecek Apakah Ada Objek yang Cocok ---
Metode some() mengembalikan true jika ada setidaknya satu objek dalam array yang memenuhi kondisi.

Contoh:*/

let orders = [
    {id: 201, status: "Pending"},
    {id: 202, status: "Shipped"},
    {id: 203, status: "Delivered"},
    {id: 204, status: "Not Available"}
];

let hasPendingOrder = orders.some(order => order.status === "Pending"); // check apakah elemen order dari array orders ada yang memiliki stauts pending
// console.log(hasPendingOrder); //! Output: true
/*
➡ Mengecek apakah ada pesanan dengan status "Pending"
➡ Jika ditemukan, hasilnya true. Jika tidak ada, hasilnya false.
📌 Gunakan some() saat hanya ingin tahu apakah ada elemen yang cocok tanpa perlu mendapatkan objeknya. */

/*
* --- 📌 4️⃣ filter() → Mengembalikan Semua Objek yang Cocok ---
Metode filter() mengembalikan array baru yang berisi semua elemen yang memenuhi kondisi.

Contoh:
*/
let _students = [
    {name: "Alice", score: 85},
    {name: "Bob", score: 70},
    {name: "Charlie", score: 90},
    {name: "Dannie", score: 75}
];

let highScorers = _students.filter (_student => _student.score >= 80);
// console.log(highScorers); //! Output: [ { name: 'Alice', score: 85 }, { name: 'Charlie', score: 90 } ]

/*
➡ Mencari semua siswa dengan skor lebih dari atau sama dengan 80 dan mengembalikan array baru.
📌 Gunakan filter() saat ingin mendapatkan lebih dari satu hasil yang cocok.
*/


/*

* 📌 Perbandingan Metode dalam Tabel
----------------------------------------------------------------------------------------------------------------------------------
Metode	           | Fungsi	                                    | Return Jika Ditemukan	             | Return Jika Tidak Ditemukan
---------------------------------------------------------------------------------------------------------------------------------
find(callback)	   | Mencari objek pertama yang cocok	        | Objek pertama	                     |   undefined
findIndex(callback)| Mencari indeks objek pertama yang cocok    | Indeks pertama	                 |    -1
some(callback)	   | Mengecek apakah ada objek yang cocok	    | true	                             |   false
filter(callback)   | Mengembalikan semua objek yang cocok	    | Array baru dengan hasil yang cocok |	 [] (array kosong)

*/

/*
* --- 📌 Contoh Implementasi dalam Kasus Nyata ---
1️⃣ Mencari Data Karyawan dengan find()
*/

let employees_ = [
    {id:1, name:"John", departement: "HR"},
    {id:2, name:"Jane", departement: "IT"},
    {id:3, name:"Mike", departement: "Finance"},
    {id:4, name:"Derrick", departement: "Marketing"}
];

let theEmployee = employees_.find(theEmp => theEmp.departement === "IT");
// console.log(theEmployee); //! Output: { id: 2, name: 'Jane', departement: 'IT' }
/*
➡ Mencari karyawan di departemen "IT" dan mengembalikan datanya.
*/

/*
* --- 2️⃣ Mengecek Apakah Ada Produk yang Tersedia dengan some() ---
*/
let _products = [
    {name:"Laptop", stock:0},
    {name:"Mouse", stock:5},
    {name:"Keyboard", stock:5},
    {name:"Desktop", stock:3},
    {name:"Headset", stock:12}
];

let isAvailable = _products.some(product => product.stock > 0);
// console.log(isAvailable); //! Output: true
//! ➡ Mengecek apakah ada produk dengan stok lebih dari 0.

/*
* --- 3️⃣ Menemukan Semua Pesanan yang Belum Dikirim dengan filter() ---
*/
let orders_ = [
    {id:101, status:"Shipped"},
    {id:102, status:"Pending"},
    {id:103, status:"Pending"},
    {id:104, status:"Shiped"},
    {id:105, status:"Delivered"}
];

let pendingOrders = orders_.filter(order => order.status === "Pending");
// console.log(pendingOrders); //! Output: [ { id: 102, status: 'Pending' }, { id: 103, status: 'Pending' } ]
/* ➡ Mengambil semua pesanan dengan status "Pending" dalam array baru. */


/*
n: 📌 Kesimpulan
!✅ Metode find(), findIndex(), some(), dan filter() digunakan untuk mencari elemen referensi dalam array.
!✅ Karena objek disimpan berdasarkan referensi, indexOf() dan includes() tidak bisa digunakan untuk mencarinya.
!✅ Gunakan metode yang sesuai berdasarkan kebutuhan:

Gunakan find() jika ingin mendapatkan satu objek pertama yang cocok.
Gunakan findIndex() jika butuh mengetahui indeks objek dalam array.
Gunakan some() jika hanya ingin tahu apakah ada elemen yang cocok.
Gunakan filter() jika ingin mendapatkan semua objek yang cocok.
*/

// ----- ARROW FUNCTIONS ----- //

/*
📌 Arrow Functions dalam JavaScript
🔍 Apa Itu Arrow Function?
Arrow function (=>) adalah cara singkat untuk menulis function di JavaScript yang diperkenalkan dalam ES6 (ECMAScript 2015).

🚀 Ciri utama dari arrow function:
✅ Lebih ringkas dibanding function biasa.
✅ Tidak memiliki this, arguments, super, atau new.target.
✅ Cocok untuk callback dan function sederhana.
*/

/*
* --- 📌 1️⃣ Sintaks Arrow Function ---
🔹 Bentuk Dasar:
*/

const namaFunction = (parameter) => ekspresi;

/* 
n: Jika hanya satu parameter, tanda kurung ( ) bisa dihilangkan.
n: Jika hanya satu pernyataan dalam body function, {} bisa dihilangkan. */

//📌 Contoh:

// Function biasa
function tambah(a,b) {
    return a + b;
}

//Arrow Function
const tambah_ = (a,b)  => a + b;

// console.log(tambah(5,3));
// console.log(tambah_(5,3));

//✅ return tidak perlu ditulis jika hanya ada satu ekspresi.

/*
* --- 📌 2️⃣ Arrow Function Tanpa Parameter ---
Jika function tidak memiliki parameter, tetap gunakan ().

Contoh:
*/
const _sayHello = () => "Hello, World!";
// console.log(_sayHello());  //! Output: Hello, World!

/*✅ Sangat berguna untuk function sederhana seperti callback */

/*
* ---📌 3️⃣ Arrow Function dengan Satu Parameter ---
Jika hanya satu parameter, tanda kurung bisa dihilangkan.

Contoh:
*/

const square = x => x * x;
// console.log(square(4)); //! Output: 16

/* ✅ Lebih ringkas daripada function(x) { return x * x; }.  */


/*
* ---📌 4️⃣ Arrow Function dengan return dan {} ---
Jika function memiliki lebih dari satu baris kode, gunakan {} dan return.

Contoh:
*/

const multiply = (a,b) => {
    let hasil = a * b;
    return hasil;
}

// console.log(multiply(4,5));
//n: ✅ Gunakan {} jika ada lebih dari satu pernyataan dalam function body.

/*
* --- 📌 5️⃣ Arrow Function dengan this ---
📌 Arrow function tidak memiliki this sendiri → Menggunakan this dari konteks terdekat.

➡ Masalah pada function biasa:
*/

function Person6_(name) {
    this.name = name;
    this.sayHello6 = function() {
        setTimeout(function() {
            console.log("Hello, " + this.name);
        }, 1000);
    };
}

const person6 = new Person6_("Alice");
// person6.sayHello6(); // Output: "Hello, undefined"


/* 
Kenapa?
➡ Karena function biasa dalam setTimeout() membuat this merujuk ke window atau undefined di strict mode.
➡ Solusi dengan arrow function:
*/

function Person7_(name) {
    this.name = name;
    this.sayHello7 = function() {
        setTimeout(() => {
            console.log("Hello, " + this.name);
        }, 1000);
    };
}

const person7 = new Person7_("Alice");
// person7.sayHello7(); // Output: "Hello, Alice"


/*
* ---📌 6️⃣ Arrow Function dalam Array dan Object ---
✅ Digunakan untuk manipulasi array
*/
const _numbers = [1,2,3,4,5,6];
const squared_ = _numbers.map(num => num * num);
// console.log(squared_);
/*
n: ➡ map() mengubah setiap angka dalam array menjadi kuadratnya.

✅ Menggunakan arrow function dalam objek :
*/

const people_ = {
    name: "John",
    sayHi: () => console.log("Hello, " + people_.name)
};

// people_.sayHi();

/*
n: ➡ Perhatikan bahwa this dalam arrow function tidak merujuk ke objek person, tetapi ke lingkup luar.
*/

/*
* --- 📌 7️⃣ Arrow Function vs Function Biasa ---
---------------------------------------------------------------------------------------------
Perbedaan	                    Function Biasa	                    Arrow Function
---------------------------------------------------------------------------------------------
1. Sintaks	                    1.function myFunc() { }	        1.const myFunc = () => { }
2. Menggunakan this	            2.Memiliki this sendiri	        2.Menggunakan this dari konteks luar
3. Cocok untuk	                3.Object method, constructor	3.Callback, function sederhana
4. Menggunakan arguments	    4.Bisa mengakses arguments	    4.Tidak memiliki arguments
5. Return implisit	            5.Tidak ada	                    5.Jika hanya satu baris, otomatis return
*/

/*
* ---📌 8️⃣ Contoh Implementasi Arrow Function dalam Kasus Nyata ---
* 1️⃣ Callback dalam setTimeout()
*/

// setTimeout(() => console.log("Waktu Habis! "),2000);

/*
* 2️⃣ Menyaring Data dengan filter()
*/

const ages = [10, 21, 18, 25, 16];
const adults = ages.filter(age => age >= 18);
// console.log(adults);  // Output: [21, 18, 25]
//n: ➡ Menggunakan arrow function untuk memfilter usia >= 18. 

/*
* 3️⃣ Menggunakan reduce() untuk Menjumlahkan Nilai
*/
const the_values = [1,2,3,4]; 
const total = the_values.reduce((sum,val) => sum + val, 0);
// console.log(total); //! ➡ Menjumlahkan semua angka dalam array.


/*
n: --- 📌 Kesimpulan ---
!✅ Arrow function adalah cara ringkas untuk menulis function di JavaScript.
!✅ Tidak memiliki this sendiri, cocok untuk callback dan function sederhana.
!✅ Gunakan {} dan return jika function memiliki lebih dari satu baris kode.
!✅ Gunakan arrow function untuk array method seperti map(), filter(), dan reduce().
! ✅ Hati-hati saat menggunakan arrow function dalam objek (this tidak merujuk ke objeknya sendiri).
*/

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

! Gunakan find() jika ingin mendapatkan satu objek pertama yang cocok.
! Gunakan findIndex() jika butuh mengetahui indeks objek dalam array.
! Gunakan some() jika hanya ingin tahu apakah ada elemen yang cocok.
! Gunakan filter() jika ingin mendapatkan semua objek yang cocok.
*/

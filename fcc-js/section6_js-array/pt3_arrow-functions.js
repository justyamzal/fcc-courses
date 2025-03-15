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

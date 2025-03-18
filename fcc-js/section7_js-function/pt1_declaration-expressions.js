//----- FUNCTION DECLARATIONS vs EXPRESSIONS -----//
/*
JavaScript memiliki dua cara utama untuk mendefinisikan fungsi:

- Function Declaration
- Function Expression
Kedua metode ini memiliki perbedaan penting dalam cara kerja dan perilaku mereka, terutama terkait dengan hoisting.
*/

/*
* 1. Function Declaration
Function Declaration adalah cara standar mendefinisikan fungsi dengan menggunakan kata kunci function. Fungsi ini memiliki nama dan dapat dipanggil dari mana saja dalam cakupan (scope) di mana fungsi tersebut berada.

* Ciri-ciri Function Declaration:
✅ Bisa di-hoist (dapat digunakan sebelum deklarasinya dalam kode).
✅ Bisa dipanggil berulang kali.
✅ Dapat digunakan dalam rekursi (recursive function).
*/


/* Contoh Function Declaration: */
function sayHello(name) {
    return `Hello, ${name}!`;
}
// console.log(sayHello("Alice")); //Output: Hello, Alice!


// console.log(greet("Bob"));
function greet(name) {
    return `Hello, ${name}!`;
    
}
/* Karena Function Declaration diangkat (hoisted) ke bagian atas oleh JavaScript, kita bisa memanggilnya sebelum dideklarasikan: */

/*
* 2. Function Expression
Function Expression adalah fungsi yang didefinisikan sebagai ekspresi (bisa berupa variabel atau bagian dari ekspresi lain). Fungsi ini bisa memiliki nama (named function expression) atau tidak (anonymous function expression).

* Ciri-ciri Function Expression:
❌ Tidak di-hoist → Tidak bisa dipanggil sebelum dideklarasikan.
✅ Bisa digunakan sebagai callback function.
✅ Bisa digunakan dalam ekspresi lain, seperti objek atau array.
Contoh Function Expression:
*/

const sayHello_ = function(name) {
    return `Hello, ${name}!`;
}

// console.log(sayHello_("Alice"));

//Jika kita mencoba memanggilnya sebelum deklarasi, akan terjadi error:

// console.log(greet_("Bob")); //! Error: Cannot access 'greet' before initialization

const greet_ = function(name) {
    return `Hello, ${name}!`;
};

/*
* 3. Perbedaan Utama
Perbedaan	    Function Declaration	                Function Expression
-----------------------------------------------------------------------------------------
Hoisting	  || Ya (bisa dipanggil sebelum deklarasi)	Tidak (harus dideklarasikan dulu)
Cara Penulisan ||	function namaFungsi() {}	         const namaFungsi = function() {};
Nama Fungsi	    ||        Wajib ada	                            Bisa anonim
Digunakan di Callback? ||	Bisa	                        Lebih sering digunakan
*/

/*
* 4. Contoh Implementasi dalam Berbagai Case
Case 1: Menggunakan Function Expression untuk Callback
Function Expression sering digunakan dalam metode array seperti .map(), .filter(), atau .forEach(), serta dalam event listener.
*/

const numbers = [1,2,3,4,5];
// Function Expression digunakan dalam .map()
const squadNumbers = numbers.map(function(num){
    return num * num;
});

// console.log(squadNumbers); //! [ 1, 4, 9, 16, 25 ]

/*
* Case 2: Menggunakan Named Function Expression untuk Debugging
Jika menggunakan function expression tanpa nama, error akan lebih sulit dilacak. Menggunakan Named Function Expression dapat membantu debugging.
*/
const factorial = function fact(n) {
    if (n<=1) return 1;
    return n * fact(n-1); //5 * 4 * 3 * 2 * 1

};
// console.log(factorial(5)); //!Output: 120

/*
* Case 3: Function Declaration dalam Rekursi
Function Declaration lebih umum digunakan untuk rekursi karena lebih fleksibel.
*/
function factorial_(n) {
    if (n<=1) return 1;
    return n * factorial(n - 1);
}

// console.log(factorial_(5));  //! Output: 120

/*
* Case 4: Menggunakan Function Expression untuk Modularisasi
Function Expression bisa digunakan untuk membuat fungsi yang hanya dipanggil jika diperlukan.
*/
const isEven = function(num) {
    return num % 2 === 0;
};

// console.log(isEven(10)); //! true
// console.log(isEven(7)); //! false

/*
* Case 5: Function Expression dalam IIFE (Immediately Invoked Function Expression)
IIFE digunakan untuk membuat fungsi yang langsung dipanggil setelah dideklarasikan.
*/
 (function(){
    // console.log("fungsi ini langsung berjalan!");
 })();  //! Output: Fungsi ini langsung berjalan!

/*
* KESIMPULAN
---------------------------------------------------------------------------------
Kapan digunakan?            Function Declaration	        Function Expression
---------------------------------------------------------------------------------
Butuh hoisting? 	            ✅ Ya	                        ❌ Tidak
Digunakan sebagai callback?	    🚫 Jarang	                     ✅ Sering
Digunakan untuk rekursi?	    ✅ Ya                           	✅ Bisa
Dijalankan langsung (IIFE)?	    🚫 Tidak bisa	                 ✅ Bisa
---------------------------------------------------------------------------
Jika butuh fungsi global yang mudah diakses, gunakan Function Declaration.
Jika butuh callback, modularisasi, atau fungsi anonim, gunakan Function Expression.
*/





/*
* ----------- Apa Itu Hoisting di JavaScript? ----------
Hoisting adalah mekanisme di JavaScript di mana deklarasi variabel dan fungsi "diangkat" ke bagian atas dari cakupan (scope) sebelum kode dieksekusi. Dengan kata lain, JavaScript memproses deklarasi terlebih dahulu sebelum menjalankan kode.

Hoisting terjadi pada:
✅ Function Declaration
✅ var Variables
❌ Tidak terjadi pada let dan const
❌ Tidak terjadi pada Function Expression
*/


/*
* 1. Hoisting pada Function Declaration
Function Declaration dapat dipanggil sebelum deklarasinya dalam kode karena hoisting.
Contoh: Function Declaration yang di-hoist
*/

// console.log(_greet("Alice"));
function _greet(name) {
    return `Hello, my name ${name}`;
}
/* Mengapa ini berhasil?
Karena deklarasi function greet(name) {} diangkat ke atas oleh JavaScript sebelum kode dieksekusi.
*/

/*
2. Hoisting pada var Variables
Variabel yang dideklarasikan dengan var juga di-hoist, tetapi hanya deklarasinya yang diangkat, bukan nilainya.
Contoh: Hoisting pada var
*/
// console.log(a); //! Output: undefined
// var a = 10; //! Nilai diberikan
// console.log(a); //! Output: 10

/*
Apa yang terjadi di belakang layar?
Kode di atas sebenarnya ditafsirkan oleh JavaScript seperti ini:
    var a; // Hoisting: deklarasi diangkat ke atas
    console.log(a); // undefined (karena nilai belum diberikan)
    a = 10; // Nilai diberikan
    console.log(a); // 10
*/

/*
* 3. Hoisting pada let dan const (Tidak Terjadi)
Variabel yang dideklarasikan dengan let dan const tidak di-hoist seperti var. Jika dicoba digunakan sebelum deklarasi, akan menghasilkan ReferenceError.
*/

//n: Contoh: let Tidak Di-hoist
// console.log(b); //! ReferenceError: Cannot access 'b' before initialization
// let b = 20;

//n: Contoh: const Tidak Di-hoist
// console.log(c); //! ReferenceError: Cannot access 'c' before initialization
// const c = 30;

/* Mengapa terjadi error?
Karena let dan const berada dalam "temporal dead zone" (TDZ), yaitu rentang waktu antara awal eksekusi hingga deklarasi variabel. */

/*
* 4. Hoisting pada Function Expression (Tidak Terjadi)
Function Expression tidak di-hoist, karena fungsi tersebut hanya tersedia setelah deklarasi.

Contoh: Function Expression Tidak Di-hoist
*/

// console.log(greeting); //! undefined
// console.log(greeting("Alice")); //! TypeError: greet is not a function

var greeting = function(name) {
    return `Hello, ${name}!`;
};
/*
- Mengapa terjadi error?
Karena greeting dideklarasikan dengan var, sehingga awalnya hanya memiliki nilai undefined, bukan fungsi.
- Jika menggunakan let atau const, akan terjadi ReferenceError:
*/
// console.log(greetings("Dannie"));
let greetings = function(name) {
    return `Hello, ${name}!`;
};



/*
Kesimpulan: Bagaimana Hoisting Bekerja?
------------------------------------------------------------------------------------
Jenis Deklarasi          ||	Di-Hoist?	||          Bisa Dipanggil Sebelum Deklarasi?
------------------------------------------------------------------------------------
Function Declaration	✅ Ya	                            ✅ Bisa
-----------------------------------------------------------------------------------
Function Expression	    ❌ Tidak	                            ❌ Tidak bisa
----------------------------------------------------------------------------------------
var	                    ✅ Ya (tapi nilainya undefined)	    ❌ Tidak bisa digunakan sebelum diberi nilai
---------------------------------------------------------------------------------------------
let	                    ❌ Tidak	                            ❌ Tidak bisa
------------------------------------------------------------------------------------------
const	                ❌   Tidak	                        ❌ Tidak bisa
-------------------------------------------------------------------------------------------
Tips:

Gunakan let dan const untuk menghindari masalah hoisting dengan var.
Gunakan Function Declaration jika ingin hoisting bekerja dengan baik.
Gunakan Function Expression untuk lebih mengontrol kapan fungsi tersedia.
*/

// * Extra: Apa Itu Rekursi dan Callback dalam JavaScript? //

// *-----Rekursi (Recursion) -----//
/*
* 1. Rekursi (Recursion)
Rekursi adalah teknik dalam pemrograman di mana suatu fungsi memanggil dirinya sendiri untuk menyelesaikan masalah yang lebih kecil dari masalah utama.

Rekursi biasanya digunakan untuk masalah yang dapat dipecah menjadi sub-masalah yang lebih kecil, seperti perhitungan faktorial, deret Fibonacci, atau traversal struktur data seperti pohon (tree).

* Contoh Rekursi: Faktorial
Faktorial dari suatu angka n didefinisikan sebagai:

                n!=n×(n−1)!, dengan 
1! = 1
*/

function _factorial(n) {
    if (n === 1) return 1; // Base case (kondisi berhenti)
    return n * _factorial(n-1);  // Recursive case
}

// console.log(_factorial(5)); //! output:120

/*
Bagaimana cara kerja rekursi ini?

factorial(5) → memanggil factorial(4)
factorial(4) → memanggil factorial(3)
factorial(3) → memanggil factorial(2)
factorial(2) → memanggil factorial(1)
factorial(1) → mengembalikan 1 (base case)
Nilai dikembalikan ke atas hingga mendapatkan hasil akhir.
*/
/*
* Contoh Rekursi: Fibonacci
deret fibonnaci : F (n) = F(n−1) + F (n−2) dengan F(0) = 0 dan 𝐹(1) = 1
*/
function fibonacci(n) {
    if(n <= 1) return; // Base case
    return fibonacci(n-1) + fibonacci(n-2); // Recursive case
}

// console.log(fibonacci(6)); // Output: 8

/*
* Kapan Menggunakan Rekursi?
✅ Struktur data seperti pohon (tree traversal).
✅ Perhitungan matematika seperti faktorial dan Fibonacci.
✅ Penyelesaian masalah divide and conquer (misalnya Merge Sort, Quick Sort).

🚨 Hati-hati dengan Infinite Recursion!
Rekursi tanpa base case akan menyebabkan stack overflow.
*/

function InfiniteRecursion() {
    console.log("Hello");
    InfiniteRecursion(); // Tidak ada base case, akan menyebabkan error!
}
// InfiniteRecursion();



// *-----Callback Function -----//
/*
Callback adalah fungsi yang dikirim sebagai argumen ke fungsi lain dan dipanggil setelah tugas tertentu selesai. Callback digunakan untuk menangani asynchronous operations, seperti membaca file, mengambil data dari API, atau menangani event di browser.
*/
//! Contoh Callback dalam setTimeout

function greeting_(name) {
    // console.log(`Hello, this is ${name}`);
}
setTimeout(greeting_, 2000, "Jackson");  // Output setelah 2 detik: Hello, this is Jackson


/* 
! Contoh Callback dalam Array Methods (forEach, map, filter)
Callback banyak digunakan dalam metode array.

* Callback dalam .forEach() */
const numbers_ = [1,2,3];

numbers_.forEach(function(number) {
    // console.log(number * 2);  
});
// Output: 2, 4, 6

/*
* Callback dalam .map()
*/

const squared = numbers_.map(function(num){
    return num * num;
});

// console.log(squared); // Output: [1, 4, 9]

/*
* Callback dalam .filter()
*/

const evenNumbers = numbers_.filter(function(num){
    return num % 2 === 0;
});
// console.log(evenNumbers);  //! Output: [2] (tersisa 2, krn 2/1 atau 2/3 hasil sisa bagi bukan 0)

/* Contoh Callback dalam Function */
function processData(input, callback){
    // console.log("Memproses data...");
    callback(input);
}

processData("Hello",function(data){
    // console.log(`Data yang di proses: ${data}`);
});
// Output:
// Memproses data...
// Data yang diproses: Hello

/*
Callback vs Rekursi
----------------------------------------------------------------------------------------
Perbedaan	        Rekursi	                                Callback
-----------------------------------------------------------------------------------------
Definisi	        Fungsi yang memanggil dirinya sendiri	    Fungsi yang dikirim sebagai argumen ke fungsi lain

Digunakan untuk	    Masalah yang dapat dipecah menjadi bagian lebih kecil	Asynchronous operations dan event handling

Contoh	        Faktorial, Fibonacci, Tree Traversal	setTimeout, event listener, fetch API

*/

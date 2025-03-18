//---------- HOISTING ----------//
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

console.log(_greet("Alice"));
function _greet(name) {
    return `Hello, my name ${name}`;
}
/* 
n: Mengapa ini berhasil?
Karena deklarasi function greet(name) {} diangkat ke atas oleh JavaScript sebelum kode dieksekusi.
*/

/*
* 2. Hoisting pada var Variables
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
* KESIMPULAN: Bagaimana Hoisting Bekerja?
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

//----------  LET VS VAR ----------//
/*
Dalam JavaScript, terdapat beberapa cara untuk mendeklarasikan variabel, yaitu menggunakan var, let, dan const.
Pada materi ini, kita akan fokus pada perbedaan antara var dan let serta kapan sebaiknya menggunakan masing-masing.
*/

/*

* 🎯 1. Perbedaan Utama let vs var
----------------------------------------------------------------------------------------------------------------------------
Fitur	            var	                                                let
--------------------------------------------------------------------------------------------------------------------------
- Scope	        - Function Scope	                                    - Block Scope
- Hoisting	    - Diangkat ke atas, tetapi tidak undefined	            - Diangkat ke atas, tapi tidak bisa digunakan sebelum deklarasi
- Redeclaration	- Bisa dideklarasikan ulang dalam scope yang sama	    - ❌ Tidak bisa dideklarasikan ulang dalam scope yang sama
- Reassignment	- Bisa diubah nilainya	                                - Bisa diubah nilainya

*/

/*


* 🎯 2. Perbedaan dari Segi Scope (Cakupan)
-------------------------------------------------
Scope adalah di mana sebuah variabel bisa diakses dalam kode.

* -----📌 var memiliki Function Scope */

function testVar() {
    if (true) {
        var angka = 10;
    }
    // console.log(angka); // ✅ Bisa diakses (karena function scope)
}

testVar();
// 📌 var bisa diakses dari luar blok {} karena hanya melihat cakupan fungsi.


/*
* -----📌 let memiliki Block Scope
*/

function testLet() {
    if(true) {
        let angka = 15;
        //console.log(angka); //Complete
    }
    // console.log(angka); //! Error: angka is not defined
}
testLet();

//n:📌 let hanya bisa diakses dalam {} tempat dia dideklarasikan, sehingga lebih aman.

/*
* 🎯 3. Perbedaan dalam Hoisting
---------------------------------
📌 Hoisting adalah mekanisme di mana deklarasi variabel diangkat ke atas oleh JavaScript sebelum kode dijalankan.

* ----- 📌 var Mengalami Hoisting dengan undefined
*/
// console.log(angka); // ✅ Output: undefined (karena hoisting)
var angka = 20;
// console.log(angka); // ✅ Output: 20

//n:📌 var diangkat ke atas dan diisi dengan undefined, sehingga tidak error.

/*
* ----- 📌 let Mengalami Hoisting tetapi Tidak Bisa Digunakan Sebelum Deklarasi
*/
// console.log(angka_); // ❌ ReferenceError: Cannot access 'angka' before initialization
let angka_ = 30;
// console.log(angka_);

//n: 📌 let juga diangkat (hoisted), tetapi tidak diinisialisasi sehingga tidak bisa digunakan sebelum dideklarasikan.


/*
* 🎯 4. Perbedaan dalam Redeclaration (Deklarasi Ulang)
-------------------------------------------------------
n: 📌 var bisa dideklarasikan ulang dalam scope yang sama, tetapi let tidak bisa.

* -----📌 var Bisa Dideklarasikan Ulang
*/
var nama = "Andi";
var nama = "Budi";
// console.log(nama);
/*
n: 📌 Ini mencegah bug akibat variabel yang tidak sengaja tertimpa.
*/

/*
* 🎯 5. Perbedaan dalam Reassignment (Mengubah Nilai)
-------------------------------------------------------
n: 📌 Keduanya (var dan let) bisa diubah nilainya setelah dideklarasikan.
*/

var _angka = 35;
_angka = 36;
// console.log(_angka);

let nilai = 50;
nilai = 100;
// console.log(nilai);

/*
n: 📌 Jika ingin variabel yang tidak bisa diubah nilainya, gunakan const.
*/

/*
* 🎯 6. Studi Kasus: Menghindari Bug dengan let
-------------------------------------------------
Misalkan kita ingin mencetak angka dari 1 sampai 5 dengan setTimeout.

* -----❌ Menggunakan var (Bug: Semua angka akan bernilai 6)
*/

for(var i = 1; i <=5;  i++) {
    setTimeout(() => {
        // console.log(i); // ❌ Output: 6 6 6 6 6
    }, 1000);
}

/*
* -----✅ Menggunakan let (Solusi yang Benar)
*/
for(let i = 1; i <= 5; i++) {
    setTimeout(() => {
        // console.log(i);  //!✅ Output: 1 2 3 4 5
    }, 1000); 
}

//n: 📌 let memiliki block scope, sehingga setiap iterasi memiliki nilai i yang berbeda.

/*
* 🚀 KESIMPULAN
---------------------------------------------------------------------------------------
Perbedaan	        ||       var	                          ||  let
--------------------------------------------------------------------------------------
- Scope	                - Function Scope	                      - Block Scope
- Hoisting	            - Diangkat ke atas dengan undefined	      - Diangkat ke atas, tetapi tidak bisa digunakan sebelum deklarasi
- Redeclaration	        - Bisa dideklarasikan ulang	              - ❌ Tidak bisa dideklarasikan ulang
-  Reassignment	        - Bisa diubah	                          - Bisa diubah
--------------------------------------------------------------------------------------------
Rekomendasi Penggunaan: ✔ Gunakan let jika variabel bisa berubah.
✔ Gunakan const jika variabel tidak boleh berubah.
✔ Jangan gunakan var, kecuali dalam kode lama atau jika benar-benar diperlukan.
*/

/*
*/


/*
*/


/*
*/


/*
*/

/*
*/

/*
*/

/*
*/

/*
*/

/*
*/

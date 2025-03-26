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
poin-poin penting dari ringkasan di atas tentang penggunaan let dan var:

* 1. Perbedaan Utama: Scope
> var: Function-scoped
- Variabel yang dideklarasikan dengan var hanya dibatasi pada fungsi tempat ia didefinisikan.
- Jika dideklarasikan di luar fungsi, variabel tersebut menjadi global dan dapat diakses di mana saja dalam skrip.
- Tidak memiliki block scope , sehingga bisa diakses di luar blok seperti loop (for, if, dll.).

> let: Block-scoped
- Variabel yang dideklarasikan dengan let hanya tersedia dalam blok tempat ia didefinisikan (misalnya, di dalam {} seperti loop atau kondisional).
- Menghindari akses tidak sengaja ke variabel di luar blok, karena akan memunculkan ReferenceError jika diakses di luar cakupannya.

* 2. Masalah dengan var
> Global Scope Pollution :
    - Variabel var sering kali menambahkan entri ke cakupan global, yang dapat menyebabkan konflik dengan skrip lain atau library pihak ketiga.
> Perilaku Tidak Terduga :
    - Karena var tidak memiliki block scope, variabel dapat diakses di luar blok seperti loop, yang dapat menyebabkan bug atau kesalahan logika dalam kode.
> Contoh Masalah :
    - Jika Anda mendeklarasikan var di dalam loop for, variabel tersebut tetap dapat diakses setelah loop selesai, yang mungkin tidak diinginkan.

* 3. Keunggulan let
> Block Scope :
 - Variabel let hanya ada di dalam blok tempat ia dideklarasikan, sehingga mengurangi risiko penimpaan atau penggunaan variabel secara tidak sengaja di luar blok.

> Lebih Aman dan Terstruktur :
 - Dengan let, Anda dapat yakin bahwa variabel hanya digunakan di area yang dimaksudkan, membuat kode lebih mudah dipahami dan dirawat.
> Mengurangi Kesalahan :
 - Block scoping membantu menghindari kesalahan seperti penggunaan ulang variabel yang tidak disengaja atau modifikasi nilai variabel di luar konteksnya.

* 4. Rekomendasi Modern
> Gunakan let dan const :
    - Dalam JavaScript modern (ES6 ke atas), let dan const lebih direkomendasikan daripada var.
    - let digunakan untuk variabel yang nilainya dapat berubah, sedangkan const digunakan untuk variabel yang nilainya tetap (tidak dapat diubah).
> Hindari var :
    - Karena var memiliki perilaku yang kurang intuitif dan rentan terhadap bug, sebaiknya hindari penggunaannya dalam kode baru.
* 5. Contoh Praktis
*/

//Contoh Penggunaan var:
function example() {
  for (var i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
  }
  console.log(i); // Output: 5 (masih bisa diakses di luar loop)
}

//- Variabel i masih dapat diakses di luar loop karena var bersifat function-scoped.

//Contoh Penggunaan let:
function example() {
  for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
  }
  console.log(i); // ReferenceError: i is not defined
}

//- Variabel i hanya ada di dalam blok loop karena let bersifat block-scoped.

/*
* 
Kesimpulan Penting
1.var : Function-scoped, dapat menyebabkan polusi global dan perilaku tidak terduga.
2. let : Block-scoped, lebih aman, mengurangi kesalahan, dan meningkatkan keterbacaan kode.
3. Rekomendasi : Gunakan let (dan const) untuk deklarasi variabel dalam JavaScript modern, dan hindari var untuk kode yang lebih bersih dan andal.
Dengan memahami perbedaan ini, Anda dapat menulis kode JavaScript yang lebih efisien, terstruktur, dan bebas dari bug
*/



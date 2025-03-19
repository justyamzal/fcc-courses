//---------- LOCAL SCOPE VS GLOBAL SCOPE ----------//

/*
* 📌 Local vs Global Scope dalam JavaScript
Dalam JavaScript, scope (cakupan) menentukan di mana variabel dapat diakses dalam kode. Scope dibagi menjadi dua jenis utama:

1️⃣ Global Scope → Variabel yang dapat diakses dari mana saja dalam program.
2️⃣ Local Scope → Variabel yang hanya dapat diakses dalam fungsi atau blok tertentu.
*/

/*
* ---🎯 1. Global Scope (Cakupan Global) ---
📌 Variabel global adalah variabel yang dideklarasikan di luar fungsi atau blok. Variabel ini bisa digunakan di mana saja dalam program.

Contoh Global Scope
*/
let globalVar = "Saya variable global";

function showGlobal() {
    // console.log(globalVar); //! ✅ Bisa diakses dalam fungsi
}

showGlobal();
// console.log(globalVar); //! ✅ Bisa diakses di luar fungsi juga

/*
- ✔ Variabel globalVar bisa diakses di dalam maupun di luar fungsi.
- ⚠ Tapi hati-hati!
Variabel global mudah diubah dari bagian mana pun dalam kode, yang bisa menyebabkan bug.
*/

//❌ Contoh Masalah dengan Variabel Global // 

let counter = 1;
function increment(){
    counter++; //! Mengubah variabel global
}

increment();
// console.log(counter);  //! ✅ Output: 2 (nilai counter berubah)

/*
* ---🎯 2. Local Scope (Cakupan Lokal) ---
📌 Variabel lokal adalah variabel yang hanya bisa diakses di dalam fungsi atau blok tertentu. Variabel ini tidak bisa diakses dari luar fungsi.

Contoh Local Scope
*/

function localExample() {
    let localVar = "Saya variabel lokal";
    // console.log(localVar);  //! ✅ Bisa diakses di dalam fungsi
}

localExample();
// console.log(localVar); //! ❌ Error: localVar is not defined
// 📌 Variabel localVar hanya bisa digunakan di dalam localExample(), tapi tidak bisa diakses dari luar.


/*
* --- 🎯 3. Function Scope vs Block Scope ---
Dalam JavaScript, ada dua tipe local scope utama:

! Function Scope → Berlaku untuk variabel var.
! Block Scope → Berlaku untuk variabel let dan const.
*/

/*
* 📌 Function Scope (Cakupan Fungsi)
📌 Variabel var hanya memiliki function scope, bukan block scope.
*/
function testFunctionScope(){
    if(true) {
        var message = "Saya hanya tersedia didalam fungsi ini";
    }
    // console.log(message); //! ✅ Bisa diakses di dalam fungsi
}

testFunctionScope();
// console.log(message); // ❌ Error: message is not defined
//n: 📌 message bisa diakses di dalam fungsi, tapi tidak di luar fungsi.

/*
* 📌 Block Scope (Cakupan Blok)
📌 Variabel let dan const memiliki block scope. Ini berarti mereka hanya bisa diakses di dalam {} tempat mereka dideklarasikan.
*/
function testBlockScope() {
    if(true){
        let blockVar = "Saya hanya tersedia di dalam block ini";
        const blockConst = "Saya juga hanya tersedia di dalam block ini";
        // console.log(blockVar); //! ✅ Bisa diakses
        // console.log(blockConst);  //! ✅ Bisa diakses
    }

    // console.log(blockVar);   //! ❌ Error: blockVar is not defined
    // console.log(blockConst); //! ❌ Error: blockConst is not defined

}
testBlockScope();

//n: 📌 Variabel blockVar dan blockConst tidak bisa diakses di luar blok {}.



/*
* --- 🎯 4. Lexical Scope (Cakupan Turunan) ---
📌 Lexical Scope berarti fungsi di dalam fungsi bisa mengakses variabel dari fungsi induknya (scope yang lebih tinggi).

Contoh Lexical Scope
*/

function outerFunction() {
    let outerVar = "Saya dari OuterFunction";

    function innerFunction() {
        // console.log(outerVar); // ✅ Bisa mengakses outerVar
    }

    innerFunction();
}

outerFunction();
//📌 Fungsi innerFunction() bisa mengakses outerVar, karena lexical scope memungkinkan akses ke variabel dari fungsi induknya.

/*
* --- 🎯 5. Studi Kasus: Variabel Global vs Lokal dalam Aplikasi ---
Misalkan kita membuat aplikasi penghitung klik tombol, dengan cara benar (menggunakan local scope) dan salah (menggunakan global scope).

❌ Contoh Buruk: Menggunakan Variabel Global
*/

let count = 0; // Variabel global

function increment() {
    // count++;
    // console.log("Klik ke:", count);
}
increment(); // ✅ Klik ke: 1
increment(); // ✅ Klik ke: 2
//n:📌 Masalahnya: Jika ada fungsi lain yang mengubah count, bisa menyebabkan error.

/*
✅ Contoh Baik: Menggunakan Local Scope
*/
function createCounter() {
    let counts = 0;

    return function() {
        counts++;
        // console.log("Klik ke:",counts)
    }
}

const counting = createCounter();
counting(); // ✅ Klik ke: 1
counting(); // ✅ Klik ke: 2
//📌 Dengan local scope, variabel count hanya bisa diakses dalam createCounter(), sehingga lebih aman.


/*

* 🚀 KESIMPULAN
Tipe Scope	        Dideklarasikan di	        Bisa diakses di
---------------------------------------------------------------------------
Global Scope	    Di luar fungsi/blok	        Di seluruh program
Local Scope	        Di dalam fungsi/blok	    Hanya di dalam fungsi/blok
Function Scope	    Dalam fungsi (var)	        Dalam fungsi yang sama
Block Scope	        Dalam {} (let, const)	    Hanya dalam {} yang sama
Lexical Scope	    Dalam fungsi dalam fungsi	Bisa akses variabel dari fungsi induknya
-----------------------------------------------------------------------------------------
✔ Gunakan variabel lokal (let, const) untuk menghindari konflik global.
✔ Hindari variabel global jika tidak perlu, karena bisa menyebabkan bug.
✔ Manfaatkan lexical scope untuk menjaga struktur kode tetap bersih.
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
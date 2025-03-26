//---------- DEFAULT PARAMETER ----------//

/*
* Apa Itu Default Parameter?
Default parameters allow function to have a predefine values that are used if no argument is passed to the function

Default parameter dalam JavaScript memungkinkan kita memberikan nilai default pada parameter fungsi jika tidak ada argumen yang diberikan saat fungsi dipanggil.
*/

//* Sebelum ES6 (Tanpa Default Parameter)
function hello(name) {
    if (!name) {
        name = "Guest";
    }
    console.log(`Hello, ${name}!`);

}

// hello(); //! Hello, Guest!
// hello("Anthony"); //! Hello, Anthony!

//📌 Masalah: Harus mengecek apakah name ada atau tidak, lalu menetapkan nilai default secara manual.

/*
* Default Parameter di ES6
Dengan ES6, kita bisa langsung menetapkan nilai default di dalam parameter fungsi.
*/
function hello2(name = "Guest2"){
    console.log(`Hello, ${name}!`);
}
// hello2(); //! Hello, Guest2!
// hello2("Anthony Mackie") //! Hello, Anthony Mackie!

/*
📌 Penjelasan:
Jika name diberikan, maka nilai name akan digunakan.
Jika name tidak diberikan atau bernilai undefined, maka "Guest" akan digunakan sebagai default.
*/

function writeCode(languange = "Javascript") { //default parameters
    console.log(`Write code in ${languange}`);
}


// writeCode('PHP');
// writeCode('C#');
// writeCode(); //without default parameters it's gonna be undefined

function codeDetails(languange = 'Javascript', tool = 'VS Code') {
    // console.log(`Writing code in ${languange} using ${tool}`);
}

// codeDetails(); //Writing code in Javascript using VS Code
// codeDetails("Python"); //Writing code in Pythong using VS Code
// codeDetails("C#","Visual Studio"); //Writing code in C# using Visual Studio

function createUser(name,role ='guest', status ='active') {
    // console.log(`User: ${name}, Role: ${role}, Status:${status}`);
}

// createUser('Steven');
// createUser('Alice','admin','active');




/*
* 1. Contoh Default Parameter dalam Fungsi
Menghitung Luas Persegi dengan Default Parameter
*/


/*
* 2. Menggunakan Ekspresi sebagai Default Parameter
Kita bisa menggunakan ekspresi atau fungsi lain sebagai nilai default.
*/


/*
* 3. Default Parameter dengan Rest Operator
Kita bisa menggabungkan default parameter dengan rest parameter (...args).
*/


/*
* 4. Perbedaan Default Parameter dengan undefined dan null
Default parameter hanya digunakan jika argumen tidak diberikan atau bernilai undefined.
*/


/*
* 5. Contoh Implementasi dalam Kasus Nyata
Membuat Fungsi untuk Menampilkan Informasi Produk
*/


/*
* KESIMPULAN
Fitur	                                    || Default Parameter
----------------------------------------------------------------------------------------------------------
Kapan Digunakan?	                        || Jika tidak ada nilai diberikan, gunakan default.
Apakah Bisa Menggunakan Fungsi?	            || ✅ Ya, bisa menggunakan fungsi atau ekspresi.
Apakah null Menggunakan Default?	        || ❌ Tidak, hanya undefined yang memicu default.
Bisa Dikombinasikan dengan Rest Parameter?	|| ✅ Ya.
*/

/*

*/

/**/

/**/


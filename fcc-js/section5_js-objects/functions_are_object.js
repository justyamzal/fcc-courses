// ----- FUNCTION ARE OBJECT ----- //

/* 
*🔍 "Functions are Objects" dalam JavaScript
Dalam JavaScript, fungsi (function) adalah objek. Ini berarti fungsi dapat:
✅ Disimpan dalam variabel
✅ Dikirim sebagai argumen ke fungsi lain
✅ Memiliki properti dan method seperti objek biasa

Statement "Functions are Objects" berarti bahwa fungsi dalam JavaScript juga memiliki sifat yang sama seperti objek lainnya.

*📌 1. Fungsi Bisa Disimpan dalam Variabel
Karena fungsi adalah objek, kita bisa menyimpannya dalam variabel seperti menyimpan nilai lainnya.
*/

const greetings = function() {
    return "Hello, World!";
};

// console.log(greetings());  //! Output: "Hello, World!"

/*✅ Penjelasan:
greet adalah variabel yang menyimpan fungsi.
Kita bisa memanggilnya dengan greet().
*/

/*
*📌 2. Fungsi Bisa Memiliki Properti Seperti Objek
Karena fungsi adalah objek, kita bisa menambahkan properti ke dalamnya.
*/

function sayHello() {
    return "Hello!";
}

//! Menambahkan properti ke fungsi
sayHello.language = "English";

// console.log(sayHello());  // Output: "Hello!"
// console.log(sayHello.language);  // Output: "English"

/*✅ Penjelasan:
Kita menambahkan properti language ke dalam fungsi sayHello.
Properti ini bisa diakses seperti objek biasa.
*/

/*
*📌 3. Fungsi Bisa Dikirim Sebagai Argumen
Karena fungsi adalah objek, kita bisa menggunakannya sebagai argumen untuk fungsi lain.
*/
function executeFunction(fn) {
    // console.log(fn());  // Memanggil fungsi yang dikirim sebagai argumen
}

function sayHi() {
    return "Hi!";
}

executeFunction(sayHi);  
// Output: "Hi!"

/*✅ Penjelasan:
sayHi dikirim sebagai argumen ke executeFunction.
executeFunction(fn) memanggil fn() yang merupakan sayHi().
*/

/*
*📌 4. Fungsi Bisa Mengembalikan Fungsi Lain
Fungsi bisa mengembalikan fungsi lain karena fungsi juga adalah objek.
*/

function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplyBy(2);  
// console.log(double(5));  //! Output: 10

const triple = multiplyBy(3);  
// console.log(triple(5));  //! Output: 15

/*✅ Penjelasan:
multiplyBy(2) mengembalikan fungsi yang mengalikan angka dengan 2.
double(5) = 5 * 2 = 10.
triple(5) = 5 * 3 = 15.
*/

/*
*📌 5. Fungsi Memiliki Properti name dan length
Karena fungsi adalah objek, mereka memiliki properti bawaan seperti name dan length.
*/
function exampleFunction(a, b, c) {}

// console.log(exampleFunction.name);  // Output: "exampleFunction"
// console.log(exampleFunction.length);  // Output: 3 (jumlah parameter)

/*✅ Penjelasan:
- name menyimpan nama fungsi.
- length menyimpan jumlah parameter fungsi.*/


/* 
*📌 6. Fungsi Bisa Ditambahkan ke Objek (Method)
Karena fungsi adalah objek, kita bisa menyimpannya dalam objek seperti method biasa.
*/
const person = {
    name: "Alice",
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

// console.log(person.greet());  
//! Output: "Hello, my name is Alice"

/*✅ Penjelasan:
greet adalah fungsi yang disimpan dalam objek person.
Karena fungsi bisa diperlakukan sebagai properti objek, ia bisa menjadi method.
*/

/*
*📌 7. Fungsi Bisa Dibuat Secara Dinamis
Karena fungsi adalah objek, kita bisa membuatnya menggunakan new Function().
*/
const sum = new Function("a", "b", "return a + b");
// console.log(sum(3, 4));  //! Output: 7

/*✅ Penjelasan:
new Function() memungkinkan kita membuat fungsi secara dinamis.
sum(3, 4) = 3 + 4 = 7.

🎯 Kesimpulan
1️⃣ Di JavaScript, fungsi adalah objek, sehingga bisa diperlakukan seperti objek biasa.
2️⃣ Fungsi bisa memiliki properti, disimpan dalam variabel, dikirim sebagai argumen, dan dikembalikan dari fungsi lain.
3️⃣ Fungsi memiliki properti bawaan seperti .name, .length, dan bisa dibuat secara dinamis.
*/

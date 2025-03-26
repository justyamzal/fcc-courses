//---------- THE REST OPERATOR (...) ----------// 
/*
* REST Operator (...) dalam JavaScript
Apa Itu REST Operator (...)?
Rest Operator (...) adalah fitur di JavaScript yang memungkinkan kita cloning, menggabungkan sejumlah argumen menjadi satu array. Rest Operator sangat berguna ketika kita tidak tahu jumlah argumen yang akan diterima oleh fungsi.
Cara Penulisan:
*/

function myFunction(...rest) {
    // console.log(rest);  // Rest Operator mengumpulkan semua argumen ke dalam array
}
/*
...rest akan mengumpulkan semua sisa argumen yang diberikan ke fungsi.
Rest Operator selalu berada di parameter terakhir dalam daftar parameter.
*/

/*
* 1. Rest Operator dalam Fungsi dengan Banyak Argumen
Rest Operator berguna ketika kita tidak tahu berapa banyak argumen yang akan diterima.
Contoh Tanpa Rest Operator (Menggunakan arguments)
*/

function Sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// console.log(Sum(1,2,3,4)); //! Output: 10

//🔹 Masalah: arguments bukan array asli, sehingga tidak bisa langsung menggunakan array method seperti .map() atau .reduce().

//Contoh dengan Rest Operator:
function theSum(...Numbers) {
    // return Numbers.reduce((total,num) => total + num);

}
// console.log(theSum(1,2,3,4,));

/*
📌 Penjelasan:
...numbers mengumpulkan semua argumen sebagai array.
.reduce() digunakan untuk menjumlahkan angka dengan lebih mudah.
*/


/*
* 2. Rest Operator dengan Parameter Lain
Rest Operator bisa digunakan bersama parameter lain, tetapi harus menjadi parameter terakhir.
✅ Contoh yang Benar
*/

function sayHi(firstName, lastName, ...hobbies) {
    // console.log(`Hello, ${firstName} ${lastName}!`);
    // console.log("Hobbies:", hobbies);
}
sayHi("Alice", "Smith", "Reading", "Coding","Gaming");

/*
! 📌 Penjelasan:
firstName menerima argumen pertama.
lastName menerima argumen kedua.
...hobbies mengumpulkan semua sisa argumen sebagai array.
*/


/*
❌ Contoh yang Salah (Rest Operator Bukan di Posisi Terakhir)

function invalidExample(...values, last) { // ❌ Error
    console.log(values, last);
}
🔴 Error: Rest Operator harus menjadi parameter terakhir.
*/



/*
* 3. Rest Operator dalam Destructuring
Rest Operator bisa digunakan saat destructuring array atau object untuk mengambil elemen sisa.

* - Destructuring Array
*/
const value_ = [10, 20, 30, 40, 50];
const [first, second, ...restValue_] = value_;

// console.log(first);  //! Output: 10
// console.log(second); //! Output: 20
// console.log(restValue_); //! Output: [30, 40, 50]


/*
* - Destructuring Object
*/
const user = {
    name: "Alice",
    age: 25,
    country:"USA",
    job: "Developer"
};

const {name, ...restData} = user;

// console.log(name);      //! Output: Alice
// console.log(restData);  //! Output: { age: 25, country: "USA", job: "Developer" }

/*
📌 Penjelasan:
name mengambil nilai properti name.
...restData menyimpan sisa properti dalam objek baru.
*/


/*
* 4. Rest Operator dalam Membuat Function Flexible
Rest Operator sangat berguna untuk membuat fungsi yang dapat menangani banyak format argumen.

Contoh: Menggabungkan Nama dengan Flexible Parameters
*/

function getFullName(firstName, ...otherNames) {
    return `${firstName} ${otherNames.join(" ")}`;
}

// console.log(getFullName("John", "Doe")); // Output: John Doe
// console.log(getFullName("Alice", "Marie", "Smith"));  // Output: Alice Marie Smith


/*
* 5. Perbedaan REST Operator (...) vs SPREAD Operator (...)
🔹 REST Operator digunakan dalam parameter fungsi untuk menggabungkan banyak argumen menjadi array.
🔹 SPREAD Operator digunakan untuk menyebarkan elemen array atau object ke dalam fungsi atau array baru.

Contoh Perbedaan
*/

//! REST : Menggabungkan beberapa nilai menjadi satu array
function restExample(...numbers) {
    // console.log(numbers); //Output: [1,2,3,4]
}
restExample(1,2,3,4);

//! SPREAD: Menyebarkan array menjadi elemen individual
const theNumbers = [1,2,3,4];
// console.log(...theNumbers);  //Output: 1 2 3 4

/*
📌 Kesimpulan:
Rest mengumpulkan data dalam array.
Spread menyebarkan elemen dari array atau object.
*/

function multiply_(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier)
}

// console.log(multiply_ (2, 1, 2, 3, 4)); //Output :  [ 2, 4, 6, 8 ]


/*
* KESIMPULAN
Fitur	                                REST Operator (...)
----------------------------------------------------------------------------
Posisi Penggunaan	                        Parameter fungsi atau Destructuring
Tujuan	                                    Mengumpulkan banyak argumen menjadi satu array
Tipe Data                                   Hasil	Array
Bisa Digunakan dalam Destructuring?	        ✅ Ya
Bisa Digunakan dalam Function Expression?	✅ Ya
--------------------------------------------------------------------
🚀 Tips Penggunaan:
✔ Gunakan Rest Operator dalam fungsi jika jumlah argumen tidak pasti.
✔ Gunakan Rest Operator dalam destructuring untuk menangkap sisa elemen array atau properti object.
✔ Jangan gunakan Rest Operator di awal atau tengah parameter fungsi (harus di akhir).
*/


/*
? what is the rest operator? the rest operator allows you to identify number of arguments as an array this is useful when working with functions that can accept a variable number of arguments
*/


/**/
/**/
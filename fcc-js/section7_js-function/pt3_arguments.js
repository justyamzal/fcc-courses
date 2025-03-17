//----------  ARGUMENTS  ----------//
/*
* Apa Itu arguments?
arguments adalah objek bawaan di dalam fungsi JavaScript yang menyimpan semua argumen yang dikirim ke fungsi.

arguments hanya tersedia dalam function declaration dan function expression, tetapi tidak dalam arrow function.
arguments bersifat array-like object (mirip array, tetapi bukan array).
Bisa digunakan untuk menangani jumlah parameter yang tidak diketahui.
*/

/* 
* 1. Contoh Dasar arguments dalam Function
*/
function showArguments () {
    // console.log(arguments);
}
showArguments(1, "Hello", true);
//! Output: Arguments(3) [1, "hello", true]


/*📌 Penjelasan:
Fungsi showArguments dipanggil dengan tiga argumen.
arguments berisi semua nilai yang diberikan ke fungsi, dalam bentuk array-like object.*/


/*
* 2. Mengakses Elemen arguments Secara Individu
Kita bisa mengakses arguments seperti array menggunakan indeks [ ].
*/
function sum() {
    // console.log(arguments[0]); //10
    // console.log(arguments[1]); //20
    // console.log(arguments[2]); //30
}

// sum(10,20,30);

/*
* 3. Menggunakan arguments dalam Perulangan
Karena arguments mirip dengan array, kita bisa menggunakannya dalam loop untuk menjumlahkan semua argumen.
*/
function sumAll() {
    let total = 0;
    for(let i = 0; i < arguments.length;i++) {
        total += arguments[i];
    }
    return total;
}
// console.log(sumAll(5, 10, 15, 20)); // Output: 50

/*
📌 Penjelasan:
arguments.length digunakan untuk mengetahui jumlah argumen yang dikirim.
Loop for digunakan untuk menjumlahkan semua angka.
*/

/*
* 4. arguments Tidak Tersedia di Arrow Function
Arrow function tidak memiliki arguments. Jika kita mencoba menggunakannya, akan muncul ReferenceError.
*/
const showArgs = () => {
    // console.log(arguments);
};
showArgs(1,2,3); // ❌ ReferenceError: arguments is not defined

//✅ Solusi: Gunakan Rest Parameter (...args) sebagai pengganti arguments.

const showArgsFixed = (...args) => {
    // console.log(args);
};
showArgsFixed(1,2,3); // Output: [1, 2, 3]

/*
* 5. Penerapan arguments dalam Function Overloading
JavaScript tidak mendukung function overloading seperti bahasa lain, tetapi kita bisa menggunakan arguments untuk menangani berbagai kasus.
*/

function getFullName() {
    if (arguments.length === 1) {
        return `Nama: ${arguments[0]}`;
    } else if (arguments.length === 2) {
        return `Nama Lengkap: ${arguments[0]} ${arguments[1]}`;
    } else {
        return "Format nama tidak dikenal!";
    }
}

// console.log(getFullName("Alice"));  // Output: Nama: Alice
// console.log(getFullName("Alice", "Smith"));  // Output: Nama Lengkap: Alice Smith
// console.log(getFullName());                      // Output: Format nama tidak dikenal!

/*
📌 Penjelasan:
Fungsi ini dapat menerima satu atau dua argumen dan berperilaku berbeda tergantung jumlahnya.
arguments.length digunakan untuk mendeteksi jumlah argumen yang diberikan.
*/

/*
*Kesimpulan
---------------------------------------------------------------------------------------
Fitur	                                                arguments
---------------------------------------------------------------------------------------
Tersedia di function biasa?	                               ✅ Ya
Tersedia di arrow function?	                               ❌ Tidak
Array atau bukan?	                                🔹 Bukan array, tetapi mirip array
Bisa di-loop?	                                            ✅ Ya
Alternatif modern?	                              Rest parameter (...args)
---------------------------------------------------------------
🚀 Tips:
✅ Gunakan arguments jika masih menggunakan function declaration atau function expression.
✅ Gunakan ...args (rest parameter) sebagai pengganti modern di arrow function.
✅ Gunakan arguments.length untuk menangani jumlah argumen dinamis.
*/

/*
*--- Apa Itu Function Overloading? ---
Function Overloading adalah konsep dalam pemrograman di mana beberapa fungsi dengan nama yang sama tetapi parameter yang berbeda dapat didefinisikan dalam satu program. Function Overloading banyak digunakan dalam bahasa seperti Java, C++, dan Python, tetapi tidak secara langsung didukung di JavaScript.

* Function Overloading di Bahasa Lain (Contoh: Java)
Di bahasa yang mendukung function overloading, kita bisa membuat beberapa fungsi dengan nama yang sama tetapi jumlah atau tipe parameternya berbeda.

Javascript
-----------------------------
class Example {
    / Overload 1: Satu parameter
    void show(int a) {
        System.out.println("Integer: " + a);
    }

    / Overload 2: Dua parameter
    void show(String s) {
        System.out.println("String: " + s);
    }
}

public class Main {
    public static void main(String[] args) {
        Example obj = new Example();
        obj.show(10);       // Output: Integer: 10
        obj.show("Hello");  // Output: String: Hello
    }
}

📌 Penjelasan:

! show(int a) hanya menerima integer.
! show(String s) hanya menerima string.
! Java bisa membedakan fungsi berdasarkan jumlah dan tipe parameter.

* Apakah Function Overloading Bisa Dilakukan di JavaScript?
❌ Tidak secara langsung.
JavaScript tidak mendukung function overloading seperti Java atau C++, karena dalam JavaScript:

Fungsi hanya diidentifikasi berdasarkan nama (bukan tipe dan jumlah parameternya).
Jika mendeklarasikan fungsi dengan nama yang sama, fungsi terakhir akan menimpa fungsi sebelumnya.

* Bagaimana Mengatasi Keterbatasan Function Overloading di JavaScript?
Karena JavaScript tidak mendukung function overloading secara bawaan, kita bisa meniru perilakunya menggunakan arguments, default parameters, atau rest parameter (...args).
*/

/* 
* 1. Function Overloading dengan arguments.length
Kita bisa mengecek jumlah parameter menggunakan arguments.length.
*/

function show () {
    if (arguments.length === 1) {
        // console.log("One arguments:",arguments[0]);
    } else if (arguments.length === 2) {
        // console.log("Two arguments:", arguments[0], arguments[1]);
    } else {
        // console.log("Invalid number of argument!");
    }
}

show(10);  // Output: One argument: 10
show(10,20); // Output: Two arguments: 10 20
show(); // Output: Invalid number of arguments!

/*
📌 Penjelasan:
Menggunakan arguments.length untuk mengetahui jumlah argumen.
Menyesuaikan perilaku fungsi berdasarkan jumlah argumen yang diberikan.
*/

/*
* 2. Function Overloading dengan typeof (Membedakan Tipe Data)
Jika ingin membedakan fungsi berdasarkan jenis parameter, kita bisa menggunakan typeof.
*/
function display(value) {
    if (typeof value === "number") {
        // console.log("Number:", value);
    } else if (typeof value === "string") {
        // console.log("String:",value);
    } else {
        // console.log("Uknown type");
    }
}

display(100);
display("Hello");
display(true);

/*
📌 Penjelasan:
Menggunakan typeof untuk mendeteksi tipe data.
Menjalankan logika berbeda tergantung tipe data yang diberikan.
*/

/*
* 3. Function Overloading dengan Default Parameter
Kita bisa memberikan nilai default untuk parameter agar bisa dipanggil dengan berbagai cara.
*/

function greetings(name = "guest") {
    // console.log(`Hello, ${name}`);
}
greetings("Anna"); //Hello, Anna
greetings(); //Hello, guest
/*
📌 Penjelasan:
Jika tidak ada argumen, name akan bernilai "Guest".
*/

/*
* 4. Function Overloading dengan Rest Parameter (...args)
Jika jumlah parameter bervariasi, kita bisa menggunakan rest parameter.
*/
function sum(..._numbers) {
    return _numbers.reduce((total, num) => total + num, 0);
}

// console.log(sum(1, 2, 3,));          //Output: 6
// console.log(sum(10, 20, 30, 40));    //Output: 100
// console.log(sum());                  //Output: 0


/*
📌 Penjelasan:
...numbers menangkap semua argumen dalam array.
Menggunakan .reduce() untuk menjumlahkan semua angka.
*/

/*
* Kesimpulan
-----------------------------------------------------------------------
Metode	                 ||    Cocok Digunakan Ketika
-----------------------------------------------------------------------
arguments.length	     ||   Jumlah parameter bisa berbeda
typeof	                 ||   Fungsi harus menangani tipe data yang berbeda
Default Parameter	     ||   Fungsi harus tetap bekerja jika parameter tidak diberikan
Rest Parameter (...args) ||	  Jika ingin menangani banyak parameter fleksibel
---------------------------------------------------------------------------------
🚀 Tips:
✔ Jika jumlah parameter tidak tetap → Gunakan rest parameter (...args).
✔ Jika tipe parameter bisa berbeda → Gunakan typeof untuk pengecekan.
✔ Jika ingin nilai default → Gunakan default parameters.
*/
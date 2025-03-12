// ----- THE CONSTRUCTOR PROPERTY  ----- //
/* 
n: constructor property adalah referensi ke fungsi konstruktor yang digunakan untuk membuat sebuah objek. Setiap objek yang dibuat melalui constructor function atau class di JavaScript akan memiliki property bawaan bernama constructor yang menunjuk ke fungsi yang membuatnya.

* 🔎 Cara Kerja Constructor Property

1️⃣ Saat sebuah objek dibuat menggunakan new, properti constructor akan secara otomatis menunjuk ke fungsi konstruktornya.
2️⃣ Property ini berguna untuk mengetahui jenis objek atau mengecek dari mana objek itu dibuat.
3️⃣ Bisa digunakan untuk membuat objek baru dari tipe yang sama.
*/

//* 📌 Contoh Implementasi | 1. Constructor Function dan Properti constructor

function Person_(name, age) {
    this.name = name;
    this.age = age;
}

const person1_ = new Person_("Alice", 25);

// console.log(person1_.constructor);  //! Output: [Function: Person]

// console.log(person1_.constructor === Person_);  //! Output: true


/*
✅ Penjelasan:
person1.constructor mengembalikan fungsi Person, karena objek dibuat dari Person.
person1.constructor === Person akan true karena person1 dibuat dari Person.
*/


//* 🔹 2. Constructor Property pada Built-in Object
const arr = [1, 2, 3];
// console.log(arr.constructor);  //! Output: [Function: Array]

const text = "Hello";
// console.log(text.constructor);  //! Output: [Function: String]

const obj = {};
// console.log(obj.constructor);  //! Output: [Function: Object]

/*
✅ Penjelasan:
arr.constructor mengembalikan Array karena arr adalah array.
text.constructor mengembalikan String karena text adalah string.
obj.constructor mengembalikan Object karena obj adalah objek bawaan JavaScript.
*/


//* 🔹 3. Menggunakan constructor untuk Membuat Objek Baru
//💡 Kita bisa menggunakan constructor untuk membuat objek baru dari tipe yang sama.

const person2_ = new person1_.constructor("Bob", 30);
// console.log(person2_);                   //! Output: Person { name: 'Bob', age: 30 }

// console.log(person2_ instanceof Person_);  //! Output: true

/*
✅ Penjelasan:
person1.constructor("Bob", 30) sama seperti new Person("Bob", 30), karena constructor menunjuk ke fungsi Person.

*/


//* 🔹 4. Masalah dengan constructor Saat Mengubah Prototype (Inheritance)

// Jika kita mengganti prototype secara langsung, properti constructor bisa hilang!

function Animal(name) {
    this.name = name;
}

Animal.prototype = {
    speak: function() {
        console.log(`${this.name} speaks`);
    }
};

const dog = new Animal("Buddy");
// console.log(dog.constructor);  //! Output: [Function: Object] (bukan Animal!)

/*
📌 Kenapa constructor berubah?
Karena kita mengganti seluruh prototype, referensi ke constructor juga hilang.
✅ Solusi: Menetapkan constructor Secara Manual
*/

Animal.prototype.constructor = Animal;  // Menetapkan kembali constructor
// console.log(dog.constructor);        //! Output: [Function: Animal]
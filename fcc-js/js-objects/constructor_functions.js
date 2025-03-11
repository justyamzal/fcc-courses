// ----- CONSTRUCTOR FUNCTION ----- //
/*
* 1️⃣ Apa Itu Constructor Function?
🔹 Definisi:
Constructor Function adalah fungsi khusus di JavaScript yang digunakan untuk membuat objek baru. Fungsinya mirip dengan Factory Function, tetapi memiliki beberapa perbedaan, seperti penggunaan kata kunci this dan new.

🔹 Ciri-ciri Constructor Function:
✅ Menggunakan huruf kapital di awal nama fungsi (konvensi).
✅ Digunakan dengan keyword new saat dipanggil.
✅ Menggunakan this untuk menetapkan properti ke objek baru.
✅ Secara otomatis mengembalikan objek baru (tanpa perlu return).
*/

//* 2️⃣ Contoh Dasar Constructor Function 

function User(name,role) {
    this.name = name;
    this.role = role;
    this.greet = function() {
        console.log(`Halo,saya ${this.name} dan saya seorang ${this.role}.`);
    };
}

//Membuat objek menggunakan constructor
const user1_ = new User('Alice', 'Admin');
const user2_ = new User('Bob', 'User');

// user1_.greet(); // Halo, saya Alice dan saya seorang Admin.
// user2_.greet(); // Halo, saya Bob dan saya seorang User.

/*
📌 Penjelasan:
1️⃣ User(name, role) adalah Constructor Function.
2️⃣ this.name = name; → Menyimpan nilai ke dalam objek yang dibuat.
3️⃣ this.greet = function() {...} → Menambahkan metode untuk menyapa.
4️⃣ const user1 = new User("Alice", "Admin"); → Membuat objek baru dengan new.
5️⃣ Saat dipanggil dengan new, this merujuk ke objek baru.
*/

//* CASE 1 :  Constructor Function Sederhana (CAR)
function Car(brand,model,year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const car1_ = new Car("Toyota", "Corolla",2022);
// console.log(car1_.brand);

//* CASE 2 :  Constructor dengan Metode

//! menambahkan metode getCarInfo() untuk menampilkan informasi mobil

function theCar(brand,model,year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        return `${this.brand} ${this.model}, Tahun ${this.year}`;
    };
}

const car2_ = new theCar("Honda","Civic", 2021);
// console.log(car2_.getCarInfo());

//* CASE 3 : Constructor dengan Prototype (Optimasi Memory)
// Menggunakan prototype agar metode tidak duplikasi di setiap objek.

function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Menambahkan metode ke prototype
Person.prototype.greet = function() {
    // console.log(`Halo, nama ${this.name} dan saa berumur ${this.age} tahun.`);
};

const person1 = new Person("Diana", 25);
const person2 = new Person("John", 30);

// person1.greet();
// person2.greet();

//📌 Keuntungan Prototype: greet() hanya dibuat sekali di prototype, sehingga lebih hemat memori.


//* CASE 4 : Constructor dengan Private Variable (Closure)
//💡 Menggunakan closure untuk membuat properti private.
function BankAccount (owner, _balance) {
    // let _balance = balance //private variable

    this.owner = owner;
    this.deposite = function(amount) {
        _balance += amount;
        // console.log(`Deposit berhasil! Saldo ${_balance}`);
    }

    this.getBalance = function() {
        return _balance;
    };
}

const myAccount = new BankAccount('Alice',1000);
// myAccount.deposite(500);
// console.log(myAccount.getBalance());
// console.log(myAccount._balance); // undefined (tidak bisa diakses)

//📌 Keuntungan:
// ✔ balance tidak bisa diakses langsung (_balance tetap private).

//* CASE 5 :  Constructor Function dengan Inheritance (Pewarisan)
// Membuat constructor Employee yang mewarisi dari Person.

function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log(`Hal, saya ${this.name}.`);
};

//pewarisan constructor function
function Employee(name,age,job) {
    Person.call(this,name,age) // Memanggil Parent Constructor
    this.job = job;
}

// Mewarisi metode dari Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const emp1 = new Employee("David",28,"Programmer");
// emp1.greet();    // Halo, saya David.
// console.log(emp1.job);  // Programmer

//* Example 2 : 
function Car(brand,year) {
    this.brand = brand;
    this.year = year;
}

// Menambahkan method ke prototype
Car.prototype.getAge = function(){
    const currentYear = new Date().getFullYear(); 
    return currentYear - this.year;         // menghitung selisih umur mobil dari saat ini dengan thn rilis mobil
};

const myCar = new Car("Toyota",2015);
// console.log(myCar.getAge(),"Years Old"); 

//* Example 3 : 

function Pet(name) {
    this.name = name;
}

//! Menambahkan method ke prototype
// Pet.prototype.species = "Unknown";

const theDogs = new Pet("Buddy");
// console.log(theDogs.species); // Output: "Unknown"

theDogs.species = "Dog";
// console.log(theDogs.species);

const theCat = new Pet("Kitty");
// theCat.species = "Cat";
// console.log(theCat.species);


/* 
* Other Example :

🔹 Contoh 3: Inheritance (Pewarisan) dengan prototype
💡 Menggunakan prototype untuk membuat pewarisan antar objek.

javascript
---------------------------------------------
*/

function Person(name) {
    this.name = name;
}

// Menambahkan method ke prototype
Person.prototype.sayHello = function() {
    return `Hello, my name is ${this.name}`;
};

// Subclass: Developer mewarisi dari Person
function Developer(name, language) {
    Person.call(this, name);  // Memanggil constructor Person
    this.language = language;
}

// Pewarisan prototype
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;  // Mengembalikan constructor

// Menambahkan method baru khusus Developer
Developer.prototype.code = function() {
    return `${this.name} is coding in ${this.language}`;
};

const dev1 = new Developer("Alice", "JavaScript");
// console.log(dev1.sayHello());  // Output: "Hello, my name is Alice"
// console.log(dev1.code());      // Output: "Alice is coding in JavaScript"

/*
------------------------------------------------------------------------------------
✅ Kenapa pakai prototype?

Memungkinkan pewarisan method tanpa menduplikasi kode.
Objek Developer bisa menggunakan method dari Person karena prototype diwariskan.


🔹 Contoh 4: Menambahkan Method ke Array.prototype
💡 Kita bisa menambahkan method baru ke Array.prototype agar bisa digunakan oleh semua array.

javascript
---------------------------------------------------
*/

Array.prototype.last = function() {
    return this[this.length - 1];
};

const numbers = [10, 20, 30];
// console.log(numbers.last());  // Output: 30

/*  
-------------------------------------------------------
✅ Kenapa ini keren?
Kita bisa membuat method kustom untuk semua array tanpa mengubah implementasi dasarnya.
Tapi hati-hati! Jangan terlalu sering mengubah Array.prototype, karena bisa menyebabkan konflik dengan update JavaScript di masa depan.



🔹 Contoh 5: Factory Function + Prototype untuk Hemat Memori
💡 Factory function dengan prototype untuk menghindari duplikasi method di setiap objek.

javascript
-----------------------------------------------------------------
*/

function theCreateUser(name, role) {
    let user = Object.create(userMethods);
    user.name = name;
    user.role = role;
    return user;
}

const userMethods = {
    greet: function() {
        return `Hi, I am ${this.name} and I am a ${this.role}`;
    }
};

const _user = theCreateUser("Bob", "Admin");
// console.log(_user.greet());      // Output: "Hi, I am Bob and I am a Admin"

/* 
---------------------------------------------------------------------------
✅ Kenapa pakai prototype dengan Object.create()?

Menghindari duplikasi method dalam setiap objek yang dibuat dari factory function.
Memisahkan data (objek) dan method (di prototype) agar lebih optimal.
🎯 Kesimpulan
1️⃣ Prototype adalah cara JavaScript berbagi method antar objek tanpa menduplikasi kode.
2️⃣ Memodifikasi prototype bisa menghemat memori karena method hanya disimpan sekali.
3️⃣ Digunakan untuk pewarisan antar objek dan pembuatan method kustom untuk built-in objek.
4️⃣ Tapi harus hati-hati, terutama saat mengganti prototype secara langsung agar tidak kehilangan constructor.
*/



/*
* Kesimpulan

✔ Kelebihan Constructor Function
✅ Kode lebih terstruktur dan mirip Object-Oriented Programming (OOP).
✅ Bisa membuat banyak objek dengan pola yang sama.
✅ Memungkinkan penggunaan prototype untuk optimasi memori.
✅ Bisa menggunakan konsep inheritance (pewarisan).

❌ Kapan Tidak Menggunakan Constructor Function?
❌ Jika hanya butuh objek sederhana, lebih baik pakai object literal ({}).
❌ Jika tidak ingin menggunakan new, lebih baik gunakan Factory Function.
*/



/*
📝 Contoh Implementasi Perbedaan
* 🔹 1. Function Biasa
💡 Hanya melakukan tugas tertentu, tanpa membuat objek baru.

javascript
----------------
*/

function greet_(name) {
    return `Halo, ${name}!`;
}

// console.log(greet_("Alice")); // "Halo, Alice!"

//! 📌 Fungsi ini hanya mengembalikan string, tidak membuat objek.

/*
*🔹 2. Factory Function
💡 Mengembalikan objek secara eksplisit.

javascript
-----------------------
*/
function createUser_(name, role) {
    return {
        name: name,
        role: role,
        greet() {
            return `Halo, saya ${this.name} dan saya seorang ${this.role}.`;
        }
    };
}

const thisUser1 = createUser_("Alice", "Admin");
// console.log(thisUser1.greet()); // "Halo, saya Alice dan saya seorang Admin."

//!📌 Tidak perlu new, cukup panggil createUser().


/*
* 🔹 3. Constructor Function
💡 Menggunakan new untuk membuat objek baru.

javascript
----------------------------------------
*/
function User(name, role) {
    this.name = name;
    this.role = role;
    this.greet = function() {
        return `Halo, saya ${this.name} dan saya seorang ${this.role}.`;
    };
}

const thisUser2 = new User("Bob", "User");
// console.log(thisUser2.greet()); // "Halo, saya Bob dan saya seorang User."

//!📌 Menggunakan new, otomatis mengembalikan objek.

/*
* ----- Tabel Perbedaan Function, Factory Function, dan Constructor Function -----


* Perbedaan :
- Definisi :
    - //! Function (Biasa) : Fungsi yang digunakan untuk menjalankan tugas tertentu dan bisa mengembalikan nilai.
    - //! Factory Function : Fungsi yang mengembalikan objek baru secara eksplisit.
    - //! Constructor Function : Fungsi yang digunakan untuk membuat objek baru dengan "new".

    - Cara Panggil : 
    - //! Function (Biasa) : myFunction();
    - //! Factory Function : createUser("Alice");
    - //! //! Constructor Function : new User("Alice");

    - Return : 
    - //! Function (Biasa) : Opsional (return value;)
    - //! Factory Function : Harus return {} agar menghasilkan objek.
    - //! Constructor Function : Tidak perlu return, karena otomatis mengembalikan objek baru.''

    - Menggunakan new :
    - //! Function (Biasa) : Tidak
    - //! Factory Function  : Tidak
    - //! Constructor Function : Ya, wajib menggunakan new.

    - Keuntungan :
    - //! Function (Biasa) : Lebih fleksibel, cocok untuk tugas kecil.
    - //! Factory Function  :  Fleksibel, tidak perlu new, lebih mudah dibuat ulang.
    - //! Constructor Function : Lebih sesuai dengan OOP, mendukung prototype, dan pewarisan.


    - Kekurangan :
    - //! Function (Biasa) : Tidak bisa membuat banyak objek dengan format yang sama.
    - //! Factory Function  :  Kurang optimal dalam penggunaan memori jika metode tidak dipisah ke prototype.
    - //! Constructor Function : Harus menggunakan new, kurang fleksibel dibanding factory function.


    - Cocok untuk :
    - //! Function (Biasa) : Fungsi biasa yang melakukan tugas spesifik, seperti menghitung angka, mengolah data, dll.
    - //! Factory Function  : Membuat banyak objek tanpa 'new', lebih fleksibel untuk konfigurasi.
    - //! Constructor Function : Membuat banyak objek dengan struktur yang sama dalam paradigma OOP.

*/

/*
* ----- Perbedaan Function, dan Method dalam JAVASCRIPT -----

Dalam JavaScript, function dan method sering digunakan secara bergantian, tetapi ada perbedaan utama di antara keduanya.
__________________________________________________________________________________________________________________________________________
Perbedaan	                Function	                                                                Method
-------------------------------------------------------------------------------------------------------------------------------------------
- Definisi	                - Fungsi yang berdiri sendiri dan tidak terkait dengan objek tertentu.	    - Fungsi yang merupakan properti dari sebuah objek.
- Cara Pemanggilan	        - Dipanggil langsung dengan namanya.	                                    - Dipanggil melalui objek yang memilikinya.
- Contoh Pemanggilan	    - greet();	                                                                - person.sayHello();
- Konteks this	            - Nilai this tergantung pada mode pemanggilan (global atau strict).	        - this mengacu pada objek yang memiliki method.
- Penggunaan	            - Cocok untuk operasi umum yang tidak bergantung pada objek.	            - Cocok untuk operasi yang berkaitan dengan suatu objek.
____________________________________________________________________________________________________________________________________________


* ---📌 Contoh Function (Fungsi Biasa) ---
💡 Function adalah blok kode yang dapat dipanggil kapan saja dan tidak terkait dengan objek tertentu.
-----------------------------------------------------------------------------------------------------
*/ 

function _greet() {
    return "Hello, World!";
}

// console.log(_greet());  //! Output: "Hello, World!"


/* ----------------------------------------------------------------------
✅ Penjelasan:
greet() adalah function yang berdiri sendiri dan bisa dipanggil langsung.
Tidak bergantung pada objek tertentu.
*/


/*
* ---📌 Contoh Method (Function dalam Objek) ---
💡 Method adalah function yang menjadi bagian dari sebuah objek.
-----------------------------------------------------------------------------------------------------
*/
const person3 = {
    name: "Alice",
    sayHello: function() {
        return `Hello, my name is ${this.name}`;
    }
};


// console.log(person3.sayHello());  
//! Output: "Hello, my name is Alice"

// ✅ Penjelasan: sayHello adalah method karena berada di dalam objek person.


/* 
* ---📌 Perbedaan dalam Konteks this ---
Karena function dan method berbeda dalam cara mengakses this, ini bisa mempengaruhi bagaimana kode berperilaku.

❌ Masalah this pada Function
-------------------------------------------------------------------------------------------------------
*/

function showName() {
    // console.log(this.name);
}

const person4_ = {
    name: "Bob",
    display: showName
};

showName();          // Output: undefined (karena `this` mengacu ke global)
person4_.display();    // Output: "Bob" (karena `this` mengacu ke `person`)

/*
✅ Penjelasan:
Ketika showName() dipanggil sendiri, this mengacu ke objek global (window di browser, undefined di strict mode).
Tetapi saat showName dipanggil sebagai person.display(), this mengacu ke objek person. 
*/ 

/*
* ---📌 Contoh Method dengan Arrow Function ---
⚠ Arrow function tidak memiliki this sendiri, sehingga dalam method harus hati-hati.
*/

const person5_ = {
    name: "Eve",
    sayHello: () => {
        return `Hello, my name is ${this.name}`;
    }
};

// console.log(person5_.sayHello());  //! Output: "Hello, my name is undefined"
/*
n: ✅ Penjelasan:
Arrow function tidak memiliki this sendiri, sehingga this.name mengacu ke window.name (yang undefined).
Solusi? Gunakan function biasa di dalam method.
🎯 Kesimpulan
1️⃣ Function adalah fungsi yang berdiri sendiri, sedangkan method adalah fungsi dalam objek.
2️⃣ Method bisa menggunakan this untuk merujuk ke objek tempatnya berada.
3️⃣ Arrow function tidak memiliki this sendiri, jadi bisa menyebabkan hasil yang tidak diinginkan saat digunakan sebagai method.
*/



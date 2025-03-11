  // ----- OBJECT LITERALS ----- //
  /* 
  
  //* #1 Definisi Object Literals : 
  Object Literals adalah cara paling sederhana untuk membuat objek di JavaScript. Objek adalah kumpulan properti (key-value pairs) yang dapat menyimpan data (nilai) dan fungsi (method). Objek literal dibuat menggunakan sintaks {} (kurung kurawal).
  */

const { time, log } = require("console");
const { create } = require("domain");
const { start } = require("repl");
const { json } = require("stream/consumers");

 //* #2 Sintaks Object Literals :
/*
const obj = {
    key1: value1, // Properti dengan nilai
    key2: value2,
    method() {    // Method (fungsi/function dalam objek)
      ! Kode fungsi
    }
  };
*/

/*
- Key: Nama properti (bisa berupa string atau identifier).
- Value: Nilai properti (bisa berupa tipe data apa pun: string, number, boolean, array, objek lain, atau bahkan fungsi).
- Method: Fungsi yang didefinisikan di dalam objek.
*/

//* #3 Contoh Dasar Object Literals :

const mahasiswa = {
    nama: "Budi",
    umur: 20,
    jurusan: "Teknik Infomartika",
    sapa(){
        // console.log(`Halo, nama saya ${this.nama}.` );
    }
}

// mahasiswa.sapa();

/*
- nama, umur, dan jurusan adalah properti dengan nilai.
- sapa() adalah method yang mencetak pesan ke konsol.
- this merujuk ke objek saat ini (mahasiswa).
*/

//* #4 Fitur Lanjutan Object Literals :

// Nested Objects

const mahasiswa2 = {
    nama: "Budi",
    detail: {
        alamat: "jakarta",
        telepon: "08123456789"
    }
};

// console.log(mahasiswa2.detail.alamat);
   

// Dynamic Property Names

const key = 'jurusan';
const students = {
    nama: 'Budi',
    [key]: 'Teknik Informatika'
};

// console.log(mahasiswa.jurusan);

//Shorthand 
const nama = "Budi";
const umur = 20;

const mahasiswa3 = {nama, umur};
// console.log(mahasiswa3);

//Computed Method Names

const methodName = 'sapa';
const mahasiswa_ = {
    [methodName]() {
        // console.log("Halo!");
    }
}

mahasiswa.sapa();

//* #5 Studi Kasus: Manajemen Toko Buku
/* Studi Kasus: Manajemen Toko Buku 
    Anda diminta untuk membuat sistem manajemen toko buku sederhana menggunakan objek literal. Sistem ini harus dapat menyimpan informasi buku, menambahkan buku baru, dan menampilkan daftar buku.
*/ 
 
const tokoBuku = {
    buku: [],
    tambahBuku(judul, penulis, harga) {
        const bukuBaru = {judul, penulis, harga};
        this.buku.push(bukuBaru);
        // console.log(`Buku "${judul}" berhasil ditambahkan`);

    },
    tampilkanBuku() {
        // console.log("Daftar Buku:");
        this.buku.forEach((buku, index) => {
            // console.log(`${index + 1}. ${buku.judul} oleh ${buku.penulis} - Rp${buku.harga}`);
        });
    },
    cariBuku(judul) {
        const bukuDitemukan = this.buku.find(buku => buku.judul === judul);
        if (bukuDitemukan) {
            // console.log(`Detail Buku: ${bukuDitemukan.judul} oleh ${bukuDitemukan.penulis} - Rp${bukuDitemukan.harga}`);
        } else {
            // console.log(`Buku "${judul}" tidak ditemukan.`);
        }
    }
    
};

//! Menambahkan buku
tokoBuku.tambahBuku("Javascript for beginners", "John Doe", 150000);
tokoBuku.tambahBuku("Advanced Javascript", "Jane Smith",200000);

//! Menampilkan daftar buku
tokoBuku.tampilkanBuku();

//! Mencari buku
tokoBuku.cariBuku("Advanced Javascript");



//* #7. Kesimpulan
/*
- Object Literals adalah cara sederhana dan efektif untuk membuat objek di JavaScript.

- Objek dapat menyimpan data (properti) dan fungsi (method).

- Fitur lanjutan seperti nested objects, dynamic property names, dan computed method names membuat objek lebih fleksibel.

- Studi kasus dan tantangan membantu Anda memahami cara menggunakan objek literal dalam skenario nyata.

*/

// ----- FACTIORY FUNCTIONS ----- //

/*
Factory function adalah fungsi yang mengembalikan objek baru setiap kali dipanggil, tanpa harus menggunakan kata kunci new seperti dalam constructor function. Factory function memberikan fleksibilitas lebih dalam pembuatan objek dibandingkan dengan class atau constructor function.

* Keutungan Menggunakan Factory Function 

1. Tidak Bergantung pada new → Menghindari potensi kesalahan jika lupa menggunakan new pada constructor function.
2. Enkapsulasi Lebih Mudah → Factory function dapat menggunakan variabel lokal yang tidak terekspos ke luar.
3. Mendukung Closure → Bisa membuat properti atau metode privat dengan closure.
Lebih Fleksibel → Mudah untuk dikustomisasi berdasarkan kondisi tertentu.
*/
/*
* Penjelasan Sederhana tentang Factory Function
Bayangkan kamu punya pabrik mainan. Setiap kali ada pesanan, pabrik ini bisa membuat mainan baru dengan warna, bentuk, dan ukuran yang berbeda-beda. Daripada membuat mainan secara manual satu per satu, kamu cukup memberikan spesifikasi ke pabrik, lalu pabrik akan membuatnya secara otomatis.

Nah, Factory Function dalam JavaScript bekerja seperti pabrik tersebut!

- Kamu cukup memanggil fungsi dan memberikan data yang diperlukan.
- Fungsi akan mengembalikan objek baru setiap kali dipanggil.
- Tidak perlu menggunakan class atau new, jadi lebih sederhana dan fleksibel.
*/



//* Case 1 :  Membuat Profil Pengguna

function createUser(name, age, job) {
    return {
        name,
        age,
        job,
        greet() {
            console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old and I'm ${this.job}.`);
        }
    }
}

const user1 = createUser('Alice', 25, 'Accountant');
const user2 = createUser('Bob',30, 'Enterpreneur');
const user3 = createUser('Charlie',20, 'Student');
const user4 = createUser('Don',23, 'Programmer');

// user1.greet();
// user2.greet();
// user3.greet();
// user4.greet();



//* Case 2 : Counting Program with Private Variable (Closure)

function createCounter(){
    let count = 0; // private variable

    return{
        increment(){
            count++;
            console.log(`Count: ${count}`);
        },
        decrement(){
            count--;
            console.log(`Count: ${count}`);
        },
        getCount(){
            return count; // Mengembalikan nilai count tanpa mengeksposnya
        }
        
    }
} 

// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(counter.getCount());
// counter.decrement();

/*
! Penjelasan tentang Factory Function dengan Private Variable (Closure)
Bayangkan kamu ingin membuat penghitung angka (counter) dalam aplikasi, tetapi kamu tidak ingin orang lain bisa mengubah nilai hitungan secara langsung. Misalnya, kalau kita membuat objek seperti ini:
-----------------------------
const counter = {
    count: 0,
    increment() {
        this.count++;
    }
};
counter.count = 100; // Siapa pun bisa mengubahnya secara langsung!


❌ Masalahnya → Variabel count bisa diubah dari luar tanpa kontrol, sehingga bisa menyebabkan bug atau perilaku tak terduga.

! Solusinya? Gunakan Factory Function dengan Private Variable (Closure)!
Closure memungkinkan kita menyimpan data secara pribadi di dalam fungsi, sehingga hanya metode tertentu yang bisa mengakses atau mengubahnya.


! Mengapa getCount() Diperlukan?
Melihat Nilai Counter → Karena count bersifat private, kita tidak bisa mengaksesnya langsung dari luar. getCount() memberi cara aman untuk melihat nilainya.
Mencegah Perubahan Langsung → Tanpa fungsi ini, kita harus menjadikan count public, yang bisa menyebabkan bug jika nilainya diubah sembarangan.
Enkapsulasi Data → Dengan menggunakan getCount(), kita tetap bisa membaca nilai count tanpa mengeksposnya secara langsung.

! Fungsi getCount() dalam contoh Factory Function dengan Private Variable (Closure) berfungsi untuk mengembalikan nilai count tanpa memberi akses langsung ke variabel tersebut.

! Mengapa Ini Berguna?
✅ Keamanan Data → Nilai count tidak bisa diubah langsung dari luar.
✅ Enkapsulasi → Hanya fungsi tertentu yang bisa memodifikasi atau membaca data.
✅ Menghindari Bug → Tidak ada risiko nilai count diubah sembarangan.


*/

function createCounter() {
    let count_ = 0; // Private variable

    return {
        increment() {
            count_++;
            console.log(`Count: ${count_}`);
        },
        decrement() {
            count_--;
            console.log(`Count: ${count_}`);
        },
        getCount() {
            return count_; // Mengembalikan nilai count tanpa mengeksposnya
        }
    };
}

const counter_ = createCounter();

// counter_.increment(); // Output: Count: 1
// counter_.increment(); // Output: Count: 2

// console.log(counter_.getCount()); // ✅ Bisa melihat nilai count → Output: 2

// counter_.decrement(); // Output: Count: 1

// counter_.count_ = 100; ❌ //Tidak bisa mengubah langsung!
// console.log(counter_.getCount()); // Output: 1


//* Case 3 : Factory Function dengan Parameter Opsional & Default

function createCar(brand,model,year = new Date().getFullYear()) {
    return {
        brand,
        model,
        year,
        getInfo() {
            return `${this.brand} ${this.model}. Year: ${this.year}`
        }
    };
}

const car1 = createCar("Toyota", "Corolla", 2020);
const car2 =  createCar("Honda", "Civic");

// console.log(car1.getInfo());
// console.log(car2.getInfo());

//! Pada contoh ini, jika parameter year tidak diberikan, maka secara default akan menggunakan tahun saat ini.


//* Case 4 : Membuat To Do List 
//! Kasus: Kita ingin membuat daftar tugas (to-do list) yang bisa menambah dan menghapus tugas.
 
function createToDoList() {
    let todos=[];   //Private Array

    return {
        addToDo(task) {
            todos.push(task);                          //New elements to add to the array.
            console.log(`Task "${task}" ditambahkan.`)
        },
        removeToDo(task){
            todos = todos.filter(t => t !== task );
            console.log(`Task "${task}" dihapus.`)
        },
        getToDos() {
            return[...todos]; // Mengembalikan salinan agar tidak bisa diubah langsung
        }
    };
}

const myTodos = createToDoList();
// myTodos.addToDo("Belajar Javascript");
// myTodos.addToDo("Menegerjakan Project");
// console.log(myTodos.getToDos());
// myTodos.removeToDo("Belajar Javascript");
// console.log(myTodos.getToDos());

// n:  Keuntungan → Menggunakan closure untuk menyimpan daftar tugas secara privat.



//* Case 5 : Membuat Timer/Stopwatch

function createTimer() {
    let startTime = null;
    let endTime = null;

    return {
        start() {
            startTime = Date.now();
            console.log("Timer Dimulai");
        },
        stop() {
            if(!startTime) {
                console.log("Timer belum Dimulai");
            }
            endTime = Date.now();
            console.log(`Timer berhenti setelah ${(endTime - startTime) / 1000 } detik. `);
        },
        reset() {
            startTime = null;
            endTime = null;
            console.log("Timer direset");
        }

    };
}


const timer = createTimer();
// timer.start();
// setTimeout(() => timer.stop(),3000); // berhenti setelah tiga detik


//* Case 6 : Game - Membuat Karakter RPG

function createChar(name,level = 1) {
    return{
        name,
        level,
        attack() {
            console.log(`${this.name} menyerang dengan kekuatan level ${this.level}!`);
        },
        levelUp() {
            this.level++;
            console.log(`${this.name} naik level menjadi ${this.level}`);
        }
    };
}

const hero = createChar("Arthas");
// hero.attack(); //Arthas menyerang dengan kekuatan level 1!
// hero.levelUp(); // Arthas naik level menjadi 2!
// hero.attack(); // Arthas menyerang dengan kekuatan level 2!

// n: 📌 Keuntungan → Bisa membuat banyak karakter game tanpa duplikasi kode.


//* Case 7 : Membuat Sistem Logger (Logging System)

function createLogger(prefix) {
    return {
        info(message) {
            console.log(`[INFO] [${prefix}] ${message}`);
        },
        warn(message) {
            console.warn(`[WARN] [${prefix}] ${message}`);
        },
        error(message) {
            console.error(`[ERROR] [${prefix}] ${message}`);
        }
    };
}

const appLogger = createLogger("MyApp");
// appLogger.info("Aplikasi dimulai.");  // [INFO] [MyApp] Aplikasi dimulai.
// appLogger.warn("Memory hampir habis!"); // [WARN] [MyApp] Memori hampir habis!
// appLogger.error("Terjadi kesalahan!"); // [ERROR] [MyApp] Terjadi kesalahan!

//! 📌 Keuntungan → Dapat digunakan untuk debugging dengan kategori log yang berbeda.

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

 //---- VALUE VS REFERENCE TYPES -----//
/*
* 🔍 "Value vs Reference Types" dalam JavaScript
Dalam JavaScript, tipe data dapat dikategorikan menjadi dua jenis utama:
1️⃣ Value Types (Primitive Types) → Disimpan dan dikopi berdasarkan nilai.
2️⃣ Reference Types (Non-Primitive Types) → Disimpan dan dikopi berdasarkan referensi memori.
*/

/*
*📌 1. Perbedaan Utama "Value vs Reference Types"
________________________________________________________________________________________________________________________________________________________________________
Aspek	                    Value Types (Primitive)	                                        Reference Types (Non-Primitive)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Jenis Data	                - Number, String, Boolean, null, undefined, Symbol, BigInt	    - Object, Array, Function, Date, RegExp, Set, Map
Penyimpanan Data	        - Disimpan di stack (memori cepat).	                            - Disimpan di heap (memori besar).
Saat Dikirim atau Disalin	- Menggunakan salinan nilai (copy by value).	                - Menggunakan referensi ke lokasi memori (copy by reference).
Dampak Perubahan	        - Tidak mempengaruhi variabel asli setelah disalin.	            - Perubahan akan berdampak ke semua variabel 
                                                                                              yang memiliki referensi ke objek yang sama. 
*/

/*
*📌 2. Contoh Value Types (Copy by Value)
Setiap kali kita menyalin atau mengassign nilai primitif ke variabel lain, nilai aslinya tidak berubah.

javascript
------------------------------------------------
*/

let aa = 10;
let bb = aa;  // Nilai a disalin ke b

bb = 20;  // Mengubah b, tetapi nilai a tetap sama

// console.log(aa); //! Output: 10
// console.log(bb); //! Output: 20

/*✅ Penjelasan:
b = a membuat salinan nilai a, sehingga a tidak berubah saat b diubah.
Karena Number adalah value type, perubahan b tidak mempengaruhi a.*/


/*
*📌 3. Contoh Reference Types (Copy by Reference)
Jika kita menyalin objek ke variabel lain, kedua variabel akan menunjuk ke objek yang sama di memori.

javascript
-------------------------------------------------------
*/

let obj1 = { name: "Alice" };
let obj2 = obj1;  // obj2 mereferensikan obj1

obj2.name = "Bob";  // Mengubah obj2 juga mengubah obj1

// console.log(obj1.name); //! Output: "Bob"
// console.log(obj2.name); //! Output: "Bob"

/*
✅ Penjelasan:
obj2 = obj1 tidak membuat salinan, melainkan mengacu ke objek yang sama di memori.
Saat kita mengubah obj2.name, obj1.name juga ikut berubah karena mereka menunjuk ke tempat yang sama.
*/


/*
* 📌 4. Contoh Array (Reference Type)
✅ Penjelasan:
arr2 = arr1 membuat arr2 mereferensikan array yang sama di memori.
Mengubah arr2 juga mengubah arr1 karena referensi ke lokasi memori sama.
*/

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);  // Menambahkan elemen ke arr2

// console.log(arr1); //! Output: [1, 2, 3, 4] 
// console.log(arr2); //! Output: [1, 2, 3, 4]

/*
* 📌 5. Bagaimana Jika Ingin Membuat Salinan (Copy) Reference Type?
Jika kita ingin membuat salinan independen dari objek atau array, kita bisa menggunakan spread operator (...) atau Object.assign().
🔹 Cara Copy Object Agar Tidak Terhubung ke Referensi Lama
*/
let obj1_ = { name: "Alice" };
let obj2_ = { ...obj1_ };  // Salinan objek (shallow copy)

obj2_.name = "Bob";  // Mengubah obj2, tetapi tidak mengubah obj1

// console.log(obj1_.name);     //! Output: "Alice"
// console.log(obj2_.name);        //! Output: "Bob"


//✅ Kenapa menggunakan spread operator (...)? , obj2 = { ...obj1 } membuat salinan objek baru, jadi obj2 dan obj1 tidak lagi terhubung.

/*
* 📌 6. Deep Copy vs. Shallow Copy
Terkadang spread operator (...) hanya melakukan salinan satu tingkat (shallow copy). Jika ada objek bersarang (nested object), perubahan dalam objek dalamnya masih mempengaruhi yang asli.

Shallow Copy:
*/
let _obj1 = { name: "Alice", address: { city: "New York" } };
let _obj2 = { ..._obj1 };

_obj2.address.city = "Los Angeles";  

// console.log(_obj1.address.city); //! Output: "Los Angeles" (Ikut berubah!)

/* ✅ Kenapa?
Hanya properti tingkat pertama yang disalin.
obj2.address masih menunjuk ke obj1.address.
*/

//Deep Copy (Menggunakan structuredClone atau JSON.parse(JSON.stringify())):
let object1 = { name: "Alice", address: { city: "New York" } };
let object2 = JSON.parse(JSON.stringify(object1));

object2.address.city = "Los Angeles";

// console.log(object1.address.city); //! Output: "New York" (Tidak ikut berubah!)
// console.log(object2.address.city); //! Output: "Los Angeles"

/*
✅ Kenapa menggunakan JSON.parse(JSON.stringify())?
Ini melakukan deep copy dengan menyalin semua level objek ke objek baru.
*/

/*
*🎯 Kesimpulan
1️⃣ Value Types (Primitive) → Number, String, Boolean, dll. Disalin berdasarkan nilai (copy by value).
2️⃣ Reference Types (Non-Primitive) → Object, Array, Function, dll. Disalin berdasarkan referensi (copy by reference).
3️⃣ Reference Types berbagi lokasi memori yang sama, sehingga perubahan pada satu variabel bisa mempengaruhi yang lain.
4️⃣ Untuk menghindari masalah referensi, gunakan spread operator (...), Object.assign(), atau JSON.parse(JSON.stringify()) untuk deep copy

*/

// ----- CLONING AN OBJECT ----- //

/*
* 🔍 Cloning an Object dalam JavaScript
Cloning an Object dalam JavaScript berarti membuat salinan (copy) dari sebuah objek tanpa mengubah objek aslinya. Ini penting saat kita ingin memodifikasi data tanpa mempengaruhi referensi asli.
*/

/*
* 📌 Mengapa Perlu Cloning Object?
1️⃣ Menghindari Mutasi Data → Jika kita langsung mengubah referensi objek, data asli ikut berubah.
2️⃣ Menyalin Objek untuk Diproses Secara Terpisah → Berguna dalam pengolahan state dalam React, Redux, dll.
3️⃣ Menghindari Bug pada Struktur Data yang Sama → Memastikan objek yang berbeda tidak saling terpengaruh.
*/



/*
* 📌 1. Cloning dengan Spread Operator (...)
Cara paling sederhana untuk menyalin objek shallow copy (salinan satu tingkat pertama).
*/

const theObj1 = {name: "Alice", age:25};
const theObj2 = {...theObj1};

theObj2.age = 30; // Mengubah obj2 tanpa mempengaruhi obj1

// console.log(theObj1.age); // Output: 25 (tidak berubah)
// console.log(theObj2.age); // Output: 30

/*
✅ Kenapa menggunakan spread operator (...)?
Mudah digunakan & singkat.
Hanya bekerja untuk objek dengan properti primitif (shallow copy).
*/

/*
* 📌 2. Cloning dengan Object.assign() 
Metode lain untuk membuat shallow copy.
*/
const theObj1_ = { name: "Alice", age:25 };
const theObj2_ = Object.assign({}, theObj1_);

theObj2_.name = "Bob"; // Mengubah object2 tanpa mempengaruhi object1

// console.log(theObj1_.name); //! Output: "Alice" (tidak berubah)
// console.log(theObj2_.name); //! Output: "Bob"

/*✅ Perbedaan dengan Spread Operator (...)
Object.assign() memiliki efek yang sama dengan spread operator untuk objek satu tingkat.
Namun, tidak mendukung nested objects (objek bersarang) dengan baik.
*/

/*
* 📌 3. Masalah Shallow Copy (Referensi pada Nested Object)
Baik ... maupun Object.assign() hanya menyalin satu tingkat pertama objek, bukan objek dalamnya.
*/
const object1_ = {
    name: "Alice",
    address: {city: "New York", country: "USA"}
};

// Menyalin object1 ke object2
const object2_ = {...object1_};

object2_.address.city = "Los Angeles";

// console.log(object1_.address.city);  //! Output: "Los Angeles" (Ikut berubah!)
// console.log(object2_.address.city);  //! Output: "Los Angeles"

/*
✅ Kenapa bisa begitu?
address adalah reference type dan tetap menunjuk ke objek yang sama.
Solusi? Gunakan Deep Copy!
*/

/*
* 📌 4. Cloning dengan Deep Copy (JSON.parse(JSON.stringify()))
Metode sederhana untuk melakukan deep copy (menyalin semua level objek).
*/
 
const _object1 = {
    name: "Alice",
    address: {city: "New York", country: "USA"}
};

const _object2 = JSON.parse(JSON.stringify(_object1)); // Deep copy
 _object2.address.city = "Los Angeles";

//  console.log(_object1.address.city); //! Output: "New York" (Tidak berubah!)
//  console.log(_object2.address.city); //! Output: "Los Angeles"


/*✅ Kelebihan:
✔ Menyalin semua tingkat objek (nested object).
❌ Tidak bisa menyalin function, Symbol, atau Date dengan benar.
*/


/*
*📌 5. Cloning dengan structuredClone() (Metode Modern)
JavaScript modern menyediakan metode structuredClone() untuk deep copy tanpa batasan JSON.
*/
const thisObj1 = {
    name: "Alice",
    address: {city: "New York", country:"USA"},
    birthday: new Date(2000,5,15)
};

const thisObj2 = structuredClone(thisObj1); // Deep copy native

thisObj2.address.city = "Los Angeles";

// console.log(thisObj1.address.city); //! Output: "New York" (Tidak berubah!)
// console.log(thisObj2.address.city);  //! Output: "Los Angeles"

/*✅ Kelebihan structuredClone()
✔ Bisa menyalin objek bersarang tanpa kehilangan tipe data spesial (Date, Map, Set, RegExp).
✔ Lebih efisien daripada JSON.stringify().
❌ Tidak tersedia di semua browser lama (harus cek kompatibilitas).*/

/*
* 📌 6. Cloning dengan lodash.cloneDeep() (Library Eksternal)
Jika ingin deep copy lebih fleksibel, kita bisa menggunakan library lodash.*/

const _ = require('lodash'); // Untuk Node.js, di browser harus pakai CDN
const obj01 = {
    name: "Alice",
    address: {city: "New York", country: "USA"}
};

const obj02 = _.cloneDeep(obj01); // Deep copy menggunakan Lodash

obj02.address.city = "Los Angeles";

// console.log(obj01.address.city); // Output: "New York" (Tidak berubah!)
// console.log(obj02.address.city); // Output: "Los Angeles"

/*
* 🎯 Kesimpulan
_____________________________________________________________________________________________________________________________________________________________________
Metode	                             Jenis Copy	     Mendukung Nested Object?	  Kelebihan	                                Kekurangan
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Spread Operator (...)	            Shallow Copy	    ❌ Tidak                Cepat & mudah	                            Tidak bisa untuk nested objects
* Object.assign()	                Shallow Copy        ❌ Tidak	               Mudah dipahami	                            Tidak menyalin objek dalam
* JSON.parse(JSON.stringify())	    Deep Copy	        ✅ Ya	               Sederhana & cukup efektif	                Hilang fungsi, Date, Symbol, Set, dll.
* structuredClone()	                Deep Copy	        ✅ Ya	               Native & mendukung lebih banyak tipe data	Tidak didukung di browser lama
* _.cloneDeep()	                    Deep Copy	        ✅ Ya	               Mendukung semua tipe data kompleks	        Harus install library
*/

/*
n: 💡 Rekomendasi Metode Cloning
✅ Untuk objek sederhana → Gunakan ... atau Object.assign().
✅ Untuk nested object (deep copy) → Gunakan JSON.parse(JSON.stringify()) atau structuredClone().
✅ Untuk aplikasi besar → Gunakan lodash.cloneDeep() untuk fleksibilitas maksimal.*/


//----- ENUMERATING PROPERTIES OF AN OBJECT -----//



/*
* 📌 Apa Itu Enumerating Properties?
Enumerating properties berarti menelusuri (iterasi) semua properti yang ada dalam sebuah objek, baik properti sendiri (own properties) maupun properti yang diwarisi dari prototype.

JavaScript menyediakan beberapa cara untuk enumerate (mengiterasi) properti objek, seperti:
1️⃣ for...in → Menelusuri semua properti yang enumerable (termasuk yang diwarisi).
2️⃣ Object.keys(obj) → Mengembalikan array properti enumerable milik objek saja.
3️⃣ Object.values(obj) → Mengembalikan array nilai properti enumerable objek.
4️⃣ Object.entries(obj) → Mengembalikan array pasangan [key, value] properti enumerable objek.
5️⃣ Object.getOwnPropertyNames(obj) → Mengembalikan semua properti milik objek, termasuk non-enumerable.
6️⃣ Object.getOwnPropertySymbols(obj) → Mengembalikan properti berbasis Symbol yang ada pada objek.
*/

/*
* 📌 1. Enumerating dengan for...in (Looping Properti)
for...in digunakan untuk mengiterasi semua properti enumerable dalam objek, termasuk yang diwarisi dari prototype.
*/

const thatPerson = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (let key in thatPerson) {
    // console.log(key,thatPerson[key]);
}

//! Output:
//! name Alice
//! age 25
//! city New York

/*
✅ Penjelasan:
for...in akan mengambil setiap properti yang enumerable dan mencetaknya.
*/



/*
*📌 2. Enumerating dengan Object.keys() (Hanya Properti Milik Objek)
*/
const thatPerson_ = {
    name:"Alice",
    age:25,
    city: "New York"
};

// console.log(Object.keys(thatPerson_)); //! Output: ["name", "age", "city"]

/* ✅ Penjelasan:
Object.keys(obj) mengembalikan array yang berisi semua properti enumerable yang dimiliki oleh objek tersebut.
Tidak mencakup properti dari prototype.
*/

/*
*📌 3. Enumerating dengan Object.values() (Mendapatkan Nilai Properti)
*/
const thisPerson = {
    name:"Alice",
    age:25,
    city:"New York"
};

// console.log(Object.values(thisPerson)); // Output: ["Alice", 25, "New York"]
/*
✅ Penjelasan:
Object.values(obj) mengembalikan array berisi semua nilai properti enumerable.
Mirip Object.keys(), tetapi hanya nilai yang diambil.
*/
/*
* 📌 4. Enumerating dengan Object.entries() (Mendapatkan Array [key, value])
*/
 const thisPerson_ = {
    name:"Alice",
    age: 25,
    city:"New York"
 };

//  console.log(Object.entries(thisPerson_)); //! // Output: [["name", "Alice"], ["age", 25], ["city", "New York"]]

/*
✅ Penjelasan:
- Object.entries(obj) mengembalikan array yang berisi pasangan [key, value] dari semua properti enumerable.
- Bisa digunakan untuk konversi objek ke bentuk array atau untuk looping menggunakan .map()
*/
//n: 🔹 Contoh Menggunakan .map() untuk Menampilkan Properti & Nilai:

Object.entries(thisPerson_).map(([key, value]) => {
    // console.log(`${key}: ${value}`);
});

/* Output
name: Alice
age: 25
city: New York
*/

/*
* 5. Enumerating dengan Object.getOwnPropertyNames() (Mendapatkan Semua Properti, Termasuk Non-Enumerable)
*/
const thePerson = Object.create({}, {
    name: {value:"Alice", enumerable: true},
    age: {value: 25, enumerable: false}
});
// console.log(Object.getOwnPropertyNames(thePerson));

/*
✅ Penjelasan:
- Object.getOwnPropertyNames(obj) mengembalikan semua properti milik objek, termasuk yang tidak enumerable.
- Berbeda dengan Object.keys() yang hanya mengambil properti enumerable.
*/


/*
* 📌 6. Enumerating dengan Object.getOwnPropertySymbols() (Enumerasi Properti Symbol)
Jika objek memiliki properti dengan tipe Symbol, kita bisa mengambilnya menggunakan Object.getOwnPropertySymbols().
*/

const sym = Symbol("id");
const thePerson_ = {
    name: "Alice", 
    [sym]: 123
};

// console.log(Object.getOwnPropertySymbols(thePerson_)); //! Output: [ Symbol(id) ]

/*✅ Penjelasan:
- Properti dengan tipe Symbol tidak bisa diakses dengan cara biasa (Object.keys() atau for...in).
- Object.getOwnPropertySymbols(obj) digunakan untuk mengambil properti Symbol.*/


/*
* 📌 7. Properti yang Diwarisi dari Prototype
Ketika menggunakan for...in, properti yang berasal dari prototype juga ikut tertelusuri.
*/

function People(name) {
    this.name = name;
}

People.prototype.age = 25;

const people = new People("Alice");

for (let key in people) {
    // console.log(key);
}
//! Output:
// name
// age (karena diwarisi dari prototype)

/*
* 🔹 Cara Menghindari Properti dari Prototype:
Gunakan Object.hasOwnProperty() untuk memastikan hanya properti milik objek yang ditampilkan:
*/

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        // console.log(key);
    }
}
//! Output:
// name
// ✅ hasOwnProperty() hanya mengambil properti milik objek dan mengabaikan prototype.

/*
🎯 Kesimpulan
---------------------------------------------------------------------------------------------------------------------------------------------------------
Metode	                               Mengembalikan	                            Mencakup Prototype?	    Mencakup Non-Enumerable?	Mencakup Symbol?
---------------------------------------------------------------------------------------------------------------------------------------------------------
for...in	                         Semua properti enumerable	                    ✅ Ya	               ❌ Tidak	                    ❌ Tidak
Object.keys(obj)	                 Array properti enumerable milik objek	        ❌ Tidak	               ❌ Tidak	                    ❌ Tidak
Object.values(obj)	                 Array nilai dari properti  enumerable	        ❌ Tidak	               ❌ Tidak	                    ❌ Tidak
Object.entries(obj)	                 Array pasangan [key, value]	                ❌ Tidak	               ❌ Tidak	                    ❌ Tidak
Object.getOwnPropertyNames(obj)	     Semua properti (enumerable & non-enumerable)	❌ Tidak	               ✅ Ya	                        ❌ Tidak
Object.getOwnPropertySymbols(obj)	 Semua properti Symbol              	        ❌ Tidak	               ✅ Ya	                        ✅ Ya
*/

/*
! 💡 ----- Kapan Menggunakan Metode Mana? -----
✅ Gunakan for...in → Jika ingin iterasi semua properti, termasuk dari prototype.
✅ Gunakan Object.keys(obj) → Jika hanya ingin properti milik objek yang enumerable.
✅ Gunakan Object.values(obj) → Jika hanya butuh nilai dari properti enumerable.
✅ Gunakan Object.entries(obj) → Jika ingin array [key, value] untuk iterasi lebih lanjut.
✅ Gunakan Object.getOwnPropertyNames(obj) → Jika ingin properti milik objek, termasuk yang non-enumerable.
✅ Gunakan Object.getOwnPropertySymbols(obj) → Jika ingin mendapatkan properti Symbol.*/



// ----- THE BUILT IN MATH FUNCTION ----- //
/*
*📌 Daftar Fungsi Math yang Umum Digunakan
-------------------------------------------------------------------------------------------------------
Kategori	            Fungsi	                                    Deskripsi
------------------------------------------------------------------------------------------------------
Konstanta	            Math.PI	                                    Nilai Pi (3.14159...)
                        Math.E	                                    Basis logaritma natural (2.718...)
_____________________________________________________________________________________________
Pembulatan	            Math.round(x)	                            Membulatkan ke terdekat
                        Math.floor(x)	                            Membulatkan ke bawah
                        Math.ceil(x)	                            Membulatkan ke atas
                        Math.trunc(x)	                            Menghapus angka desimal
______________________________________________________________________________________________
Akar & Pangkat	        Math.sqrt(x)	                            Akar kuadrat
                        Math.pow(x, y)	                            Pangkat (x^y)
                        Math.cbrt(x)	                            Akar kubik
__________________________________________________________________________________________________
Logaritma	            Math.log(x)	                                Logaritma natural (basis e)
                        Math.log10(x)	                            Logaritma basis 10
                        Math.log2(x)	                            Logaritma basis 2
Random	                Math.random()	                            Angka acak antara 0 - 1
                        Math.random() * (max - min) + min	        Angka acak dalam rentang tertentu
_______________________________________________________________________________________________________
Trigonometri	        Math.sin(x)	Sinus (radian)
                        Math.cos(x)	Cosinus (radian)
                        Math.tan(x)	Tangen (radian)
                        Math.asin(x), Math.acos(x), Math.atan(x)	Arc sinus, arc cosinus, arc tangen
________________________________________________________________________________________________________
Nilai Mutlak	        Math.abs(x)	                                Mengubah angka jadi positif
Mencari Maks/Mins	    Math.max(a, b, c, ...)	                    Mencari nilai terbesar
                        Math.min(a, b, c, ...)	                    Mencari nilai terkecil
*/

//!1️⃣ Menggunakan Konstanta Math
// console.log(Math.PI);  // Output: 3.141592653589793

//!2️⃣ Pembulatan Angka
// console.log(Math.round(4.6));  // Output: 5 (dibulatkan ke atas)

//!3️⃣ Akar Kuadrat dan Pangkat
// console.log(Math.sqrt(25));    // Output: 5 (akar kuadrat)
// console.log(Math.cbrt(27));    // Output: 3 (akar kubik)

//!5️⃣ Menghasilkan Angka Acak (Math.random())
// console.log(Math.random()); 
// Output: angka acak antara 0 - 1 (contoh: 0.574839)

//!8️⃣ Mencari Nilai Maksimum & Minimum
// console.log(Math.max(10, 20, 30, 5));  // Output: 30
// console.log(Math.min(10, 20, 30, 5));  // Output: 5



// ----- STRING METHOD ----- //
/*
*📌 String Method dalam JavaScript

*🔍 Apa Itu String Method?
Di JavaScript, String adalah tipe data yang digunakan untuk menyimpan teks. JavaScript menyediakan berbagai metode bawaan (built-in methods) untuk memanipulasi string seperti mengubah huruf besar/kecil, memotong, mengganti, mencari, atau menggabungkan string.

*📌 Karakteristik String: ✅ String bisa dideklarasikan dengan single quote ('), double quote ("), atau backtick (`) untuk template literals.
✅ String bersifat immutable (tidak bisa diubah langsung, hanya bisa dimanipulasi dengan metode yang menghasilkan string baru).

📌 Daftar Metode String yang Sering Digunakan
----------------------------------------------------------------------------------------------
Kategori	            Metode	                           Deskripsi
----------------------------------------------------------------------------------------------
Mengakses String	    charAt(index)	                Mengambil karakter di posisi tertentu
                        charCodeAt(index)	            Mengambil kode ASCII karakter
Mengubah String	        toUpperCase()	                Mengubah huruf jadi kapital
                        toLowerCase()	                Mengubah huruf jadi kecil
Memotong                String	slice(start, end)	    Memotong string dari index ke index
                        substring(start, end)	        Sama seperti slice(), tapi tidak menerima indeks negatif
                        substr(start, length)	        Mengambil sebagian string dengan panjang tertentu
Menggabungkan	        concat(string1, string2, ..)	Menggabungkan beberapa string
Mencari String	        indexOf(substring)	            Mencari posisi pertama substring dalam string
                        lastIndexOf(substring)	        Mencari posisi terakhir substring dalam string
                        includes(substring)	            Mengecek apakah substring ada dalam string
                        startsWith(substring)	        Mengecek apakah string diawali substring tertentu
                        endsWith(substring)	            Mengecek apakah string diakhiri substring tertentu
Mengubah                String	replace(old, new)	    Mengganti teks tertentu
                        replaceAll(old, new)	        Mengganti semua teks tertentu
Memecah String	        split(delimiter)	            Memecah string menjadi array
Menghapus Spasi	        trim()	                        Menghapus spasi di awal & akhir string
                        trimStart()	                    Menghapus spasi di awal
                        trimEnd()	                    Menghapus spasi di akhir
Mengulang String	    repeat(n)	                    Mengulang string sebanyak n kali

*/


/* 
*📌 Implementasi dan Contoh Penggunaan
1️⃣ Mengakses Karakter dalam String
*/
let hi = "Hello";

// console.log(hi.charAt(1));            //! Output: "e"
// console.log(hi.charCodeAt(1));       //! Output: 101 (kode ASCII untuk 'e')
// console.log(hi[1]);                  //! Output: "e" (cara lain mengakses karakter)


/*
* 2️⃣ Mengubah Huruf Besar/Kecil
*/

let word = "Javascript";

// console.log(word.toUpperCase());  //! Output: "JAVASCRIPT"
// console.log(word.toLowerCase());  //! Output: "javascript"


/*
* 3️⃣ Memotong String
*/
let sentence = "Belajar Javascript di ChatGPT";

//n: `slice(start, end)`
// console.log(sentence.slice(8, 18));     //! Output : Javascript
//n: `substring(start, end)` (hampir sama dengan slice)
// console.log(sentence.substring(8, 18));  //! Output : Javascript
//n: `substr(start, length)`
// console.log(sentence.substr(8, 10)); //! Output : Javascript

/*
✅ Perbedaan slice() vs substring()
🔹 slice() bisa menerima indeks negatif (mulai dari belakang), sedangkan substring() tidak bisa.
*/

/*
* 4️⃣ Menggabungkan String
*/

let _firstName = "John";
let _lastName = "Doe";

// console.log(_firstName.concat(" ", _lastName));     //! Output: "John Doe"
// console.log(_firstName + " " + _lastName);           //! Output: "John Doe" (cara lain)

/*
* 5️⃣ Mencari String dalam String
*/
let message_ = "Learning coding it's fun";

// console.log(message_.indexOf("coding"));     //! Output: 9 (index pertama from 'Learning')
// console.log(message_.lastIndexOf("n"));         //!  Output: 23 (total index)
// console.log(message_.includes("Coding"));       //! Output: true
// console.log(message_.startsWith("Learning"));   //! Output: true
// console.log(message_.endsWith("Fun"));          //! Output: false

/*
* 6️⃣ Mengganti String
*/
let text2 = "I like Apple"
// console.log(text2.replace("Apple","Mango"));  //! Output: I like Mango

let text3 = "The Apple is really good, especially green Apple"; 
// console.log(text3.replaceAll(("Apple"),"Banana")); //! Output: The Banana is really good, especially green Banana

/* ✅ Perbedaan replace() vs replaceAll()
🔹 replace() hanya mengganti satu kali pertama yang ditemukan.
🔹 replaceAll() mengganti semua yang cocok. 
*/

/*
* 7️⃣ Memecah String menjadi Array
*/
let data = "Apple, Mango, Orange";
let fruits = data.split(", ");

// console.log(fruits);     //! Output:  [ 'Apple', 'Mango', 'Orange' ]

/*
*8️⃣ Menghapus Spasi di Awal/Akhir
*/
let text4 = "   Halo Dunia!   ";

// console.log(text4.trim());      //! Output: "Halo Dunia!"
// console.log(text4.trimStart()); //! Output: "Halo Dunia!   "
// console.log(text4.trimEnd());   //! Output: "   Halo Dunia!"

/*
*9️⃣ Mengulang String
*/
let laugh = "Ha";
// console.log(laugh.repeat(3));  //! Output: "HaHaHa"

/*
* 🎯 Kesimpulan
✅ String method digunakan untuk memanipulasi string di JavaScript.
✅ Metode ini bisa untuk mengubah, mencari, memotong, mengganti, memecah, menghapus spasi, atau mengulang string.
✅ String bersifat immutable, jadi setiap operasi akan menghasilkan string baru.
*/



// ----- GARBAGE COLLECTION -----//
/*
*📌 Garbage Collection dalam JavaScript
🔍 Apa Itu Garbage Collection?
Garbage Collection (GC) adalah proses otomatis dalam JavaScript yang bertujuan untuk menghapus data yang tidak lagi digunakan dari memori sehingga tidak menyebabkan kebocoran memori (memory leak).

JavaScript menggunakan mekanisme Automatic Garbage Collection melalui metode "Mark-and-Sweep", sehingga pengembang tidak perlu secara manual mengalokasikan atau membebaskan memori seperti dalam bahasa pemrograman lain (misalnya C atau C++).
*/


/*
*📌------ Cara Kerja Garbage Collection ------
1️⃣ Alokasi Memori (Memory Allocation)
Ketika kita membuat variabel, objek, atau fungsi, JavaScript akan mengalokasikan memori untuknya.

! let user = { name: "Alice", age: 25 }; // Alokasi objek di memori
*/

/*
2️⃣ Menggunakan Memori
Ketika variabel masih bisa diakses oleh program, maka JavaScript akan tetap menyimpannya dalam memori.


! console.log(user.name); // "Alice"
*/


/*
3️⃣ Garbage Collection (Penghapusan)

Ketika sebuah variabel tidak lagi memiliki referensi, JavaScript akan menandainya untuk dihapus dalam proses Garbage Collection.
! user = null; // Objek sebelumnya tidak memiliki referensi lagi

Setelah ini, objek { name: "Alice", age: 25 } akan dianggap tidak lagi digunakan dan akan dihapus dari memori oleh Garbage Collector.
*/

/*
* 📌----- Metode Garbage Collection dalam JavaScript ----- 

Garbage Collector di JavaScript menggunakan metode Mark-and-Sweep, yang bekerja dalam dua tahap:

1️⃣ Mark (Menandai) → JavaScript akan menandai semua objek yang masih bisa dijangkau (reachable) dari root (global execution context).
2️⃣ Sweep (Menyapu) → Objek yang tidak ditandai dianggap tidak lagi digunakan dan akan dihapus dari memori.

Root dalam JavaScript biasanya adalah window (di browser) atau global (di Node.js).

function createUser() {
    let user = { name: "Alice" }; // Alokasi memori untuk objek
    return user;
}

let newUser = createUser(); // newUser masih mereferensikan objek "Alice"

newUser = null; // Objek sebelumnya kehilangan referensi

n: Garbage Collector akan menghapus objek `{ name: "Alice" }`
*/


/*
*📌 ----- Kapan Objek Dihapus oleh Garbage Collector? ----- 
JavaScript menghapus objek yang tidak lagi memiliki referensi, contoh:
*/
/*
1️⃣ Objek Tidak Memiliki Referensi Lagi

let user = { name: "Alice" };
user = null; // Objek sebelumnya tidak memiliki referensi lagi

➡ Garbage Collector akan menghapus objek { name: "Alice" } dari memori.
*/

/*
2️⃣ Variabel dalam Scope Fungsi

function example() {
    let tempData = { value: 100 };
} // tempData akan dihapus saat fungsi selesai dieksekusi
example();
➡ tempData hanya digunakan dalam fungsi, jadi akan dihapus setelah fungsi selesai.
*/

/*
3️⃣ Objek dalam Array atau Objek Lain Dihapus

let users = [{ name: "Alice" }, { name: "Bob" }];
users.pop(); // Menghapus objek terakhir dalam array

➡ Jika tidak ada referensi lain ke objek { name: "Bob" }, maka akan dihapus.
*/

/*
* -----📌 Contoh Masalah Memory Leak (Kebocoran Memori) -----
JavaScript memiliki garbage collection otomatis, tetapi kita tetap bisa mengalami memory leak jika tidak hati-hati.

1️⃣ Variabel Global yang Tidak Dibersihkan

let data; // Variabel global tetap ada di memori
function loadData() {
    data = { largeArray: new Array(1000000).fill("Data") };
}
loadData(); // Memori tetap terpakai karena `data` masih ada
➡ Solusi: Setelah tidak digunakan, hapus referensinya dengan data = null;
*/

/*
2️⃣ Event Listener yang Tidak Dihapus

document.getElementById("btn").addEventListener("click", function () {
    console.log("Clicked!");
});
➡ Jika elemen dihapus tetapi event listener tidak dihapus, memori tetap terpakai.
Solusi: Gunakan removeEventListener setelah tidak digunakan.

const button = document.getElementById("btn");
function handleClick() {
    console.log("Clicked!");
}
button.addEventListener("click", handleClick);

n: Setelah tidak dibutuhkan
button.removeEventListener("click", handleClick);
*/


/*
*📌 Kesimpulan
✅ Garbage Collection (GC) di JavaScript secara otomatis membersihkan objek yang tidak lagi memiliki referensi.
✅ JavaScript menggunakan metode Mark-and-Sweep untuk mendeteksi dan menghapus memori yang tidak terpakai.
✅ Memory Leak bisa terjadi jika kita menyimpan referensi yang tidak dibutuhkan (misalnya variabel global atau event listener yang tidak dihapus).
✅
 Best Practice: Selalu hapus referensi yang tidak dibutuhkan untuk menghindari kebocoran memori.
*/



// ----- TEMPLATE LITERALS -----//
/*
📌 Template Literals dalam JavaScript
*/

/*
🔍 Apa Itu Template Literals?
Template literals adalah fitur dalam JavaScript yang memudahkan kita dalam membuat string yang lebih fleksibel.

Ciri utama template literals:
✅ Menggunakan backtick (`` ) daripada tanda kutip ("" atau '').
✅ Bisa menyisipkan variabel dengan ${} (string interpolation).
✅ Bisa membuat multi-line string tanpa perlu \n.
✅ Mendukung expression & function call di dalam string.
*/

//* Contoh 1 : 
const theName_ = "John Doe";
// console.log(`Halo, nama saya ${theName_}`);

/*
📌 Perbedaan Template Literals vs String Biasa
Fitur	                String Biasa (""/'')	  Template Literals (` `)
---------------------------------------------------------------------------------
Deklarasi	            let x = "Halo";	          let x = Halo;
Multi-line String	    ❌ Harus pakai \n	    ✅ Bisa langsung enter
Interpolasi Variabel	❌ Pakai + untuk gabung	✅ Pakai ${}
Menyisipkan Ekspresi	❌ Sulit (pakai +)	    ✅ Bisa pakai ${expression}
Mendukung Function Call	❌ Harus dipecah manual	✅ Bisa dipanggil di dalam ${}
*/

/*
📌 Implementasi dan Contoh Penggunaan
1️⃣ Menggabungkan String dengan Variabel (String Interpolation)

! ✅ Tanpa Template Literals (String Biasa)
*/
let _nama = "Alice";
let _umur = 25;
// console.log("Nama saya " + _nama + " dan saya berumur " + _umur + " tahun.");

//! ✅ Dengan Template Literals
// console.log(`Nama saya ${_nama} dan saya berumur ${_umur} tahun`);

/*
2️⃣ Membuat Multi-line String
!✅ Tanpa Template Literals (String Biasa - Ribet!)
*/
let pesan = "Halo!\nSelamat datang di dunia Javascript. \nSemoga sukses!";
// console.log(pesan);

//! ✅ Dengan Template Literals (Sederhana!)
let pesan_ = `Halo!
Selamaat datang di dunia Javascript.
Semoga sukses!`;
// console.log(pesan_);

//📌 Lebih mudah dan tetap rapi!

/*
! 3️⃣ Menyisipkan Ekspresi di dalam String
Kita bisa langsung menyisipkan ekspresi atau perhitungan di dalam ${}.
*/
let aaa = 5, bbb = 10;
// console.log(`Hasil dari ${aaa} + ${bbb} adalah ${aaa+bbb}`); //! Hasil dari 5 + 10 adalah 15 

/*
! 4️⃣ Memanggil Function dalam Template Literals
*/
function salam(name_) {
    return `Halo, ${name_}`;
}

// console.log(`Pesan: ${salam("Budi")}`);

/*
! 5️⃣ Menampilkan Objek dalam String
*/
let student = { name: "Rina", age:20};

// console.log(`Name: ${student.name}, age: ${student.age}`);


/*
! 6️⃣ Menggunakan Ternary Operator dalam Template Literals
*/

let examResult = 80;
// console.log(`Status: ${examResult >= 75 ? "Success" : "Fail"}`); //! Output =  Status: Success


/*
! 7️⃣ Menggunakan Tagged Templates (Advanced)
*/

/*
📌 Tagged template literals digunakan untuk memproses string lebih lanjut dengan fungsi khusus.
*/

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str} <b>${values[i] || ""}</b>`, "");
}

let employee_ = "Diana";
let job_ = "programmer";

// console.log(highlight`Hello, I am ${employee_} and I was a ${job_}.`); //! Output: Halo, saya <b>Diana</b> dan saya adalah seorang <b>Programmer</b>.

// 🔹 Ini bisa digunakan untuk membangun sistem template HTML dalam JavaScript!

/*
*🎯 Kesimpulan
✅ Template literals adalah cara modern dan lebih efisien untuk menangani string di JavaScript.
✅ Gunakan backtick (`) untuk membuat template literals.
✅ Bisa menggunakan ${} untuk menyisipkan variabel, ekspresi, atau function call.
✅ Bisa digunakan untuk multi-line string tanpa \n.
✅ Bisa digabungkan dengan function (Tagged Templates) untuk manipulasi lebih lanjut.
*/


// ----- THE DATE OBJECT -----//

/*
* 📌 Date Object dalam JavaScript
🔍 Apa Itu Date Object?
Date adalah built-in object di JavaScript yang digunakan untuk menangani tanggal dan waktu. Dengan Date object, kita bisa:
✅ Membuat tanggal dan waktu baru
✅ Mengambil dan mengubah bagian dari tanggal (tahun, bulan, hari, jam, dsb.)
✅ Melakukan operasi perhitungan tanggal (misalnya mencari selisih hari antara dua tanggal)
*/

/*
* 📌 Cara Membuat Date Object
1️⃣ Menggunakan new Date()
Terdapat 4 cara utama untuk membuat Date object di JavaScript:

Metode	                                             Contoh	                            Keterangan
-------------------------------------------------------------------------------------------------------------------------------------------------
new Date()	                                         new Date();	                    Membuat tanggal saat ini (sekarang).
new Date(year, month, day, hour, min, sec, ms)	     new Date(2024, 2, 5, 10, 30, 0);	Membuat tanggal spesifik (Catatan: Bulan dimulai dari 0).
new Date(milliseconds)	                             new Date(1700000000000);	        Membuat tanggal berdasarkan waktu epoch (1 Januari 1970).
new Date(dateString)	                             new Date("2024-03-05T10:30:00");	Membuat tanggal dari string yang sesuai format ISO 8601.
*/

let now_ = new Date();
// console.log(now_);

let customDate = new Date(2024, 2, 5, 10, 30, 0);
// console.log(customDate);  //! Output: Tue Mar 05 2024 10:30:00 GMT+0700

/*
* 📌 Mengambil Bagian dari Tanggal (get Methods)
Setelah membuat Date object, kita bisa mengambil berbagai bagian dari tanggal tersebut:

Method	            Keterangan	                Contoh (untuk new Date(2024, 2, 5, 10, 30, 0))
getFullYear()	    Mengambil tahun	                                        2024
getMonth()	        Mengambil bulan (0-11)	                                2 (Maret)
getDate()	        Mengambil tanggal (1-31)	                            5
getDay()	        Mengambil hari dalam seminggu (0-6, Minggu=0)	        2 (Selasa)
getHours()	        Mengambil jam (0-23)	                                10
getMinutes()	    Mengambil menit (0-59)	                                30
getSeconds()	    Mengambil detik (0-59)	                                0
getMilliseconds()	Mengambil milidetik (0-999)	                            0
getTime()	        Mengambil waktu dalam milidetik sejak 1 Januari 1970	1700000000000
*/


//! 📌 Contoh Implementasi:
let theDate = new Date(2024, 2, 5, 10, 30, 0);  //year,month,date, hours,minute,milisecond


// console.log(theDate.getFullYear());  // Output: 2024
// console.log(theDate.getMonth());     // Output: 2 (Maret)
// console.log(theDate.getDate());      // Output: 5
// console.log(theDate.getDay());       // Output: 2 (Selasa)
// console.log(theDate.getHours());     // Output: 10
// console.log(theDate.getMinutes());   // Output: 30
// console.log(theDate.getTime());      // Output: 1700000000000 (dalam milidetik)


/*
* 📌 Format Tanggal (toString, toLocaleDateString, dsb.)
Method	                Keterangan	                            Contoh Output
toString()	            Mengubah tanggal ke format string	    "Wed Mar 05 2025 10:30:00 GMT+0700"
toDateString()	        Hanya menampilkan tanggal (tanpa waktu)	"Wed Mar 05 2025"
toTimeString()	        Hanya menampilkan waktu	                "10:30:00 GMT+0700"
toLocaleDateString()	Format tanggal sesuai lokal	            "5/3/2025" (format Indonesia: "05/03/2025")
toLocaleTimeString()	Format waktu sesuai lokal	            

"10:30:00"

📌 Contoh Implementasi:
*/
let date_ = new Date(2025,2,5,10,30,0);

// console.log(date_.toString());   
// console.log(date_.toDateString());
// console.log(date_.toTimeString());
// console.log(date_.toLocaleString());

/*
* 📌 Operasi Perhitungan Tanggal
Kita bisa melakukan perhitungan tanggal seperti menghitung selisih hari.
📌 Contoh: Menghitung Selisih Hari
*/
let startDate = new Date(2024,2,5);
let endDate = new Date(2024,2,10);

let selisih = endDate.getTime() - startDate.getTime();
let selisihHari = selisih / (1000 * 60 * 60 * 24);  //1000 = milisecond

// console.log(`Selisih: ${selisihHari} hari`);

/*
✅ Date Object digunakan untuk mengelola tanggal & waktu di JavaScript.
✅ Bisa membuat objek tanggal dengan new Date().
✅ Bisa mengambil atau mengubah bagian dari tanggal dengan get & set methods.
✅ Bisa melakukan format tanggal & waktu sesuai kebutuhan.
✅ Bisa digunakan untuk perhitungan tanggal seperti menghitung selisih hari.*/



// ----- INTRODUCTION TO ARRAYS -----//

/*
* ---🔍 Apa Itu Array? ---
Array adalah struktur data dalam JavaScript yang digunakan untuk menyimpan banyak nilai dalam satu variabel.

Ciri-ciri utama array dalam JavaScript:
✅ Dapat menyimpan berbagai jenis data (number, string, object, function, dll.).
✅ Memiliki indeks (dimulai dari 0).
✅ Dapat diubah ukurannya (bersifat dinamis).
✅ Merupakan tipe data objek di JavaScript.

Contoh Sederhana:
*/
let fruits_ = ["Apple","Banana", "Cherry"];
// console.log(fruits_[0]);


/*
➡ fruits adalah array yang menyimpan 3 string.
➡ Akses elemen menggunakan indeks (fruits[0] untuk "Apple").*/

/*
* --- 📌 Cara Membuat Array ---
1️⃣ Menggunakan Notasi Bracket ([]) – Cara Paling Umum
*/

//-- Array Numbers
let value_ = [10,20,30,40,50];
// console.log(value_);

//-- Mixed Array
const mixedArray = ["Hello",25,true,{name:"john"}];

// console.log(value_); //! [10,20,30,40]
// console.log(mixedArray); //! ["Hello", 25, true, { name: "John" }]

//n: ✅ Array bisa berisi tipe data berbeda seperti string, angka, boolean, dan objek.
//n: 📌 Array dibuat dengan tanda [ ], dan elemen dipisahkan dengan koma ,.


/*
2️⃣ Menggunakan new Array() – Kurang Direkomendasikan
*/
let colors = new Array("Red", "Green", "Blue");
// console.log(colors); // Output: ["Red", "Green", "Blue"]

//n: ➡ Metode ini jarang digunakan karena dapat menyebabkan kebingungan jika hanya 1 angka dimasukkan (new Array(5) akan membuat array kosong dengan panjang 5, bukan berisi angka 5).




// ----- ADDING ELEMENTS -----//
/*
📌 Adding Elements to an Array dalam JavaScript
🔍 Apa Itu Adding Elements to an Array?
Menambahkan elemen ke dalam array dalam JavaScript berarti memasukkan nilai baru ke dalam array yang sudah ada. JavaScript menyediakan beberapa metode untuk menambah elemen di awal, akhir, atau posisi tertentu dalam array.
*/


/*
* --- 📌 Mengakses dan Memanipulasi Array ---
1️⃣ Mengakses Elemen dengan Indeks */

let cars = ["Toyota", "Honda", "Ford"];
// console.log(cars[1]); //! Output: Honda

//n: ➡ Indeks dimulai dari 0 (cars[0] adalah "Toyota", cars[1] adalah "Honda").


/*
* 2️⃣ Mengubah Elemen dalam Array */
let pets = ["Dog","Cat","Bird"];
pets[1] = "Rabbit"; // Mengubah "Cat" menjadi "Rabbit"
// console.log(pets); // Output: ["Dog", "Rabbit", "Bird"]

//n: ➡ Array bersifat mutable, artinya kita bisa mengubah isinya.

/*
* 3️⃣ Mengetahui Panjang (Length) Array */
let languages = ["javascript", "Python", "C++", "PHP"];
// console.log(languages.length);  // Output: 4

/*
* --- 📌 Operasi Array (Methods) ---
*1️⃣ Menambahkan dan Menghapus Elemen
Method	    Deskripsi	                                    Contoh
.push()	    Menambahkan elemen di akhir	                    arr.push("item")
.pop()	    Menghapus elemen terakhir	                    arr.pop()
.unshift()	Menambahkan elemen di awal	                    arr.unshift("item")
.shift()	Menghapus elemen pertama	                    arr.shift()
Contoh:
*/

let _fruits = ["Apple", "Banana"];
_fruits.push("Cherry","Durian"); //[ 'Apple', 'Banana', 'Cherry', 'Durian']
_fruits.pop(); //[ 'Apple', 'Banana', 'Cherry']
_fruits.unshift("Avocado"); //[ 'Avocado', 'Apple', 'Banana', 'Cherry']
_fruits.shift(); //[ 'Apple', 'Banana', 'Cherry']

// console.log(_fruits);

/*
➡ Menggunakan .push() dan .pop() untuk bekerja dengan elemen di akhir array.
➡ Menggunakan .unshift() dan .shift() untuk bekerja dengan elemen di awal array.*/

/*
* 2️⃣ Menggabungkan dan Memotong Array 

Method	    Deskripsi	        Contoh
----------------------------------------------------------
.concat()	Menggabungkan       array	arr1.concat(arr2)
.slice()	Memotong bagian     array	arr.slice(1, 3)
Contoh:
*/

let arry1 = [1,2,3];
let arry2 = [4,5,6];

let combined = arry1.concat(arry2);  // Output: [1, 2, 3, 4, 5, 6]

let sliced = combined.slice(2, 5);  // Output: [3, 4, 5]
// console.log(sliced);

/*
➡ concat() menggabungkan array tanpa mengubah aslinya.
➡ slice(start, end) mengambil elemen dari indeks start sampai sebelum end.
*/

/*
* 3️⃣ Mengubah Array (Splice) 
_______________________________________________________________________________
Method	      || Deskripsi	                                || Contoh
-------------------------------------------------------------------------------
.splice()	  || Menambah, menghapus, atau mengganti elemen || arr.splice(start, deleteCount, item1, item2, ...)

*/

let values = [10, 20, 30, 40, 50];
values.splice(2, 1, 25, 26); //! Menghapus 1 elemen dari indeks 2 dan menambahkan 25, 26

// console.log(values); //! Output: [10, 20, 25, 26, 40, 50]

// ➡ Menghapus angka 30 di indeks 2 lalu menggantinya dengan 25, 26.

/*
* --- 📌 Looping dalam Array ---
* 1️⃣ Menggunakan for Loop
*/

let theFruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < theFruits.length; i++) {
    // console.log(theFruits[i]);
}

/*
* 2️⃣ Menggunakan forEach()
*/

theFruits.forEach((theFruits) => {
    // console.log(theFruits);
});

//n: ➡ Lebih sederhana dibanding for loop.

/*
* --- 📌 Array Multidimensi ---
Array juga bisa memiliki array di dalamnya (nested array).
*/

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// console.log(matrix[1][2]); //! Output: 6

//n: ➡ matrix[1][2] mengakses baris ke-2 dan kolom ke-3 (6)., perhitungan dimulai dari 0 karena index array

/*
✅ Array adalah struktur data yang bisa menyimpan banyak nilai dalam satu variabel.
✅ Indeks array dimulai dari 0 dan bisa diakses dengan array[index].
✅ JavaScript menyediakan banyak metode bawaan (push, pop, splice, dll.) untuk memanipulasi array.
✅ Array bisa memiliki banyak tipe data berbeda dan bersifat dinamis.
✅ Looping (for, forEach) sering digunakan untuk mengolah array.
*/


/*
* ---📌 Menambahkan Elemen dengan Operator Spread (...) ----
Selain metode di atas, kita juga bisa menggunakan spread operator (...) untuk menambahkan elemen baru.

* 1️⃣ Menambahkan Elemen di Akhir
*/
let animals = ["Dog","Cat"];
animals = [...animals, "Rabbit"];
// console.log(animals); //! Output: [ 'Dog', 'Cat', 'Rabbit' ]


/*
* 2️⃣ Menambahkan Elemen di Awal
*/

let theValues = [2, 3, 4];
theValues = [1, ...theValues];
// console.log(theValues); //! Output: [1, 2, 3, 4]

/*
* 3️⃣ Menambahkan Elemen di Posisi Tertentu
*/

let letters = ["A","C","D"];
letters = [...letters.slice(0, 1), "B", ...letters.slice(1)];
// console.log(letters); // Output: ["A", "B", "C", "D"]

//! ➡ Menggunakan slice() untuk membagi array, lalu menyusun ulang dengan spread operator.


/*
* --- 📌 Contoh Implementasi dalam Kasus Nyata ---
*1️⃣ Menambahkan Produk ke Keranjang Belanja
*/
let cart = ["Laptop","Mouse"];
cart.push("Keyboard") // Menambahkan "Keyboard" ke dalam keranjang
// console.log(cart); //! Output : [ 'Laptop', 'Mouse', 'Keyboard' ]

/*
* 2️⃣ Menyisipkan Nama ke Daftar Peserta
*/
let participants = ["Alice","Charlie"];
participants.splice(1, 0, "Bob");  //! Menambahkan "Bob" setelah "Alice" (start fr index 1, delete count 0)
// console.log(participants); // Output: ["Alice", "Bob", "Charlie"]


/*
* 3️⃣ Menambahkan Pesan Chat Terbaru ke Awal
*/
let chatMessages = ["Hello","How are you?"];
chatMessages.unshift("Hey!");  // Pesan terbaru ada di awal

console.log(chatMessages); // Output: ["Hey!", "Hello", "How are you?"]

/*
* 📌 Kesimpulan
✅ Menambahkan elemen ke array bisa dilakukan dengan beberapa metode (push(), unshift(), splice(), spread operator).
✅ push() menambah di akhir, unshift() menambah di awal, splice() menambah di posisi tertentu.
✅ Spread operator (...) bisa digunakan untuk menambahkan elemen tanpa mengubah array asli.
✅ Pahami kapan harus menggunakan metode yang sesuai untuk meningkatkan efisiensi program.
*/

//  ----- Finding Elements (Primitives) - JavaScript ----- //
 
/*
🔍 Apa Itu Finding Elements (Primitives)?
Dalam JavaScript, Finding Elements (Primitives) berarti mencari elemen dalam array yang berisi nilai primitif (seperti number, string, atau boolean).

➡ JavaScript menyediakan beberapa metode untuk mencari elemen dalam array primitif, yaitu:
1️⃣ indexOf()
2️⃣ lastIndexOf()
3️⃣ includes()
4️⃣ find()
5️⃣ findIndex()
*/

/*
* 📌 1️⃣ indexOf() → Mencari Indeks Elemen Pertama yang Cocok
Metode indexOf() mencari nilai dalam array dan mengembalikan indeks pertama di mana elemen tersebut ditemukan. Jika tidak ditemukan, mengembalikan -1.

Contoh:
*/
let score = [10, 20, 30, 40, 50];

console.log(score.indexOf(30));
console.log(score.indexOf(100));

// ➡ 30 ditemukan di indeks 2.
// ➡ Jika elemen tidak ditemukan, indexOf() mengembalikan -1.
// 📌 Gunakan indexOf(value) saat ingin mengetahui di mana posisi elemen dalam array.

/**/
/**/
/**/
/**/

/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/

/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/





/*
Section 6: JavaScript Arrays
(2:14:03) Introduction to Arrays
(2:14:39) Adding Elements
(2:17:34) Finding Elements (Primitives)
(2:21:13) Finding Elements (Reference Types)
(2:23:40) Arrow Functions
(2:26:16) Removing Elements
(2:29:06) Emptying an Array
(2:31:25) Combining and Slicing Arrays
(2:33:15) Spread Operator
(2:34:48) Iterating an Array
(2:36:44) Joining Arrays
(2:41:19) Sorting Arrays
(2:46:06) Testing the Elements of an Array
(2:50:12) Filtering an Array
(2:53:19) Mapping an Array
(2:57:43) Reducing an Array
*/

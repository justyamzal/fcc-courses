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
*/
const counter = {
    count: 0,
    increment() {
        this.count++;
    }
};
counter.count = 100; // Siapa pun bisa mengubahnya secara langsung!

/*
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

// counter_.increment(); //! Output: Count: 1
// counter_.increment(); //! Output: Count: 2

// console.log(counter_.getCount()); //! ✅ Bisa melihat nilai count → Output: 2

// counter_.decrement(); //! Output: Count: 1

// counter_.count_ = 100; ❌ //!Tidak bisa mengubah langsung!
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
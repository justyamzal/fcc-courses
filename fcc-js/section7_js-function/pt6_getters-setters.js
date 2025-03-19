//---------- GETTERS AND SETTERS ----------//

/*
* Getter dan Setter dalam JavaScript
Apa Itu Getter dan Setter?
Getter (get) dan Setter (set) adalah fitur dalam JavaScript yang digunakan untuk mengakses dan mengubah properti sebuah objek dengan cara yang lebih aman dan fleksibel.

* Getter (get) digunakan untuk mengambil nilai properti dengan cara yang lebih terkendali.

* Setter (set) digunakan untuk mengubah nilai properti dengan validasi atau logika tambahan.

📌 Getter dan Setter biasanya digunakan dalam kelas (class) atau objek (object).

*/

/*
* 1. Membuat Getter dan Setter dalam Objek
Kita bisa menambahkan get dan set pada objek biasa.
Contoh Getter dan Setter pada Objek
*/

const user = {
    firstName: "Alice",
    lastName: "Smith",
    
    // Getter 
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1] || "";
    }
}

// console.log(user.fullName);

user.fullName = "John Doe";
// console.log(user.fullName);
// console.log(user.firstName);
// console.log(user.lastName);


/*
* 2. Menggunakan Getter dan Setter dalam class
Getter dan Setter sangat berguna dalam class, terutama saat kita ingin mengontrol akses ke properti objek.

Contoh Getter dan Setter dalam Class
*/
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    // Setter dengan Validasi
    set fullName(name) {
        if (typeof name !== "string" || name.trim().length === 0) {
            throw new Error("Invalid name format");
        }
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1] || "";
    }

}
const person = new Person ("Alice","Smith");
// console.log(person.fullName); // Output: Alice Smith

// person.fullName = "John Doe";
// console.log(person.fullName);  // Output: John Doe

// person.fullName = "";  // ❌ Error: Invalid name format

/*
📌 Penjelasan:
Getter mengembalikan nama lengkap dari firstName dan lastName.
Setter memvalidasi input agar tidak kosong dan harus berupa string sebelum mengubah nilai.
Jika setter menerima input kosong (""), ia akan melempar error (throw new Error(...)).
*/


/*
* 3. Getter dan Setter dengan Properti yang Disembunyikan (_)
Biasanya dalam JavaScript, properti yang tidak boleh diakses langsung diberi awalan underscore (_).

Contoh Menyembunyikan Properti
*/

class BackAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this._balance = balance; // Properti tersembunyi
    }

     // Getter untuk membaca saldo
     get balance() {
        return `$${this._balance.toFixed(2)}`;
     }
     // Setter untuk mengubah saldo dengan validasi
     set balance(amount) {
        if(amount < 0 ) {
            // console.log("Balance cannot be negative!");
            return;
        }

        this._balance = amount;
     }
}


const account = new BackAccount("Alice",500);
// console.log(account.balance); // Output: $500.00

account.balance = 1000; // Mengubah saldo
// console.log(account.balance); // Output: $1000.00

account.balance = -200; // ❌ Tidak bisa karena negatif
// Output: "Balance cannot be negative!"


/*
* 4. Getter dan Setter untuk Mengubah Format Data
Getter dan Setter dapat digunakan untuk mengonversi satuan atau format data.

Contoh Mengubah Format Waktu
*/

class Time {
    constructor(hour, minute) {
        this.hour = hour;
        this.minute = minute ?? 0;
    }

    // Getter mengubah format menjadi "hh:mm AM/PM"
    get formattedTime() {
        let period = this.hour >= 12 ? "PM" : "AM";
        let hour12 = this.hour % 12 || 12;
        let minuteStr = (this.minute !== undefined ? this.minute : 0).toString().padStart(2, "0");
        return `${hour12}:${minuteStr} ${period}`;
    }

    // Setter menerima format "hh:mm AM/PM" dan mengonversinya ke 24 jam
    set formattedTime(timeStr) {
        if (!timeStr.includes(" ")) {
            throw new Error("Invalid time format. Use 'hh:mm AM/PM'");
        }

        const [time, period] = timeStr.split(" ");
        let [hour, minute] = time.split(":").map(Number);

        if (isNaN(hour) || isNaN(minute)) {
            throw new Error("Invalid time values. Hour and minute must be numbers.");
        }

        if (period === "PM" && hour !== 12) hour += 12;
        if (period === "AM" && hour === 12) hour = 0;

        this.hour = hour;
        this.minute = minute;
    }

}

const myTime = new Time(14, 30);
// console.log(myTime.formattedTime); //! Output: 2:30 PM

myTime.formattedTime = "7:45 AM";
// console.log(myTime.formattedTime); //! Output: 7:45 AM
// console.log(myTime.hour);   //! Output: 7
// console.log(myTime.minute); //! Output: 45

/*

Kode Getter & Setter untuk Format Waktu dengan Penjelasan

class Time {
    constructor(hour, minute) {
        this.hour = hour;
        this.minute = minute ?? 0; // Jika minute tidak diberikan, default ke 0
    }
🔹 Langkah 1: Constructor (constructor)

constructor(hour, minute) adalah metode yang dipanggil saat membuat objek baru dari Time.
this.hour = hour; menyimpan nilai hour yang diberikan.
this.minute = minute ?? 0;
✅ Jika minute diberikan, gunakan nilai tersebut.
✅ Jika minute tidak diberikan (undefined atau null), gunakan 0 sebagai nilai default.


    / Getter mengubah format menjadi "hh:mm AM/PM" /

    
    get formattedTime() {
        let period = this.hour >= 12 ? "PM" : "AM"; 
🔹 Langkah 2: Getter (get formattedTime())

Menentukan format AM/PM:
✅ Jika this.hour >= 12, berarti sore/malam (PM).
✅ Jika this.hour < 12, berarti pagi (AM).


*/



/*
* KESIMPULAN 
------------------------------------------------------------------------------------------------------
Fitur	                    Getter (get)	                                            Setter (set)
-------------------------------------------------------------------------------------------------------
Fungsi          	        Mengambil nilai properti dengan logika tambahan	            Mengubah nilai properti dengan validasi
Kapan Digunakan?	        Saat kita ingin membaca data dengan format khusus	        Saat kita ingin mengontrol perubahan data
Harus Mengembalikan Nilai?	        ✅ Ya	                                            ❌ Tidak perlu (hanya mengubah nilai)
Bisa Memiliki Parameter?	        ❌ Tidak	                                                            ✅ Ya
Digunakan dalam class?	            ✅ Ya	                                                            ✅ Ya
-------------------------------------------------------------------------------------------------------------------------------------
🚀 Tips Menggunakan Getter dan Setter
-------------------------------------------------------------------------------------------------------------------------------------
✔ Gunakan getter untuk mengubah tampilan data (misalnya format waktu, mata uang, dll.).
✔ Gunakan setter untuk melakukan validasi sebelum mengubah nilai.
✔ Gunakan underscore (_) untuk menyembunyikan properti yang tidak boleh diakses langsung.
*/


/*

* ----- OTHER EXAMPLE OF CODE CASE -----
*/
/*
* 1️⃣ Getter & Setter untuk Validasi Nama
Misalkan kita ingin menyimpan nama pengguna, tetapi memastikan nama selalu diawali huruf besar.
*/
class Users {
    constructor(name) {
        this._name = name;
    }

    // Getter untuk mengakses nama
    get name() {
        return this._name;
    }

    // Setter untuk memastikan huruf pertama selalu kapital
    set name(newName) {
        if (typeof newName !== "string" || newName.trim() === "") {
            throw new Error ("Name must be a non-empty string.");
        }
        this._name = newName.charAt(0).toUpperCase() + newName.slice(1);
    }
}
// ✅ Contoh Penggunaan
const users = new Users("james");
// console.log(users.name);

users.name = "steve";
// console.log(users.name);

// users.name = ""; //! ❌ Akan error: "Name must be a non-empty string."

/*
n:📌 Penjelasan:
Setter memastikan nama tidak boleh kosong dan selalu diawali huruf kapital.
*/

/*
* 2️⃣ Getter & Setter untuk Konversi Suhu (Celsius ↔ Fahrenheit)
Misalkan kita ingin menyimpan suhu dalam Celsius, tetapi bisa mengambil nilainya dalam Fahrenheit.
*/

class Temperature {
    constructor(celcius) {
        this.celcius = celcius;
    }

    // Getter mengembalikan suhu dalam Fahrenheit
    get farenheit(){
        return (this.celcius * 9/5) + 32;
    }
    // Setter menerima suhu dalam Fahrenheit dan menyimpannya dalam Celsius
    set farenheit(fah) {
        this.celcius = (fah - 32) * 5/9; 
    }
}

const temp = new Temperature(25); // 25°C
// console.log(temp.farenheit); // Output: 77°F

temp.farenheit = 100; //value 
// console.log(temp.farenheit); // Output: 100°F
// console.log(temp.celcius)  // Output: 37.777...°C


/*
📌 Penjelasan:
Getter (fahrenheit) otomatis menghitung suhu dalam Fahrenheit.
Setter (fahrenheit) memungkinkan kita memasukkan suhu dalam Fahrenheit, dan sistem mengonversinya ke Celsius
*/

/*
*3️⃣ Getter & Setter untuk Menyembunyikan Password
Kadang, kita ingin menyimpan password tetapi tidak menampilkan isinya langsung.
*/
class UserAccount {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

     // Getter hanya menampilkan pesan, bukan password asli
     get password() {
        return "******"; // Selalu menampilkan bintang
     }

     // Setter memvalidasi panjang password sebelum menyimpannya
     set password(newPassword) {
        if(newPassword.length < 6) {
            throw new Error("Password must be at least 6 characters long.");
        }
        this._password = newPassword;
     }
}

// ✅ Contoh Penggunaan
const account_ = new UserAccount("John_doe","secret123");

// console.log(account_.password); // Output: "******"

account_.password = "newPass"; // ✅ Ubah password
// console.log(account_.password);// Output: "******"

// account_.password = "123";// ❌ Akan error: "Password must be at least 6 characters long."

/*
! 📌 Penjelasan:
Getter (password) mencegah password asli ditampilkan.
Setter (password) memastikan password minimal 6 karakter sebelum menyimpannya.
*/


/*
*4️⃣ Getter & Setter untuk Mengatur Harga dengan Diskon
Misalkan kita ingin mengatur harga barang dengan fitur diskon otomatis.
*/

class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }

       // Getter untuk mendapatkan harga setelah diskon 10%
        get discountedPrice() {
          return this.price * 0.9;
        }
       // Setter untuk mencegah harga negatif
        set price(newPrice) {
            if(newPrice < 0) {
                throw new Error ("Price cannot be negative");
            }
            this._price = newPrice;
        }

        // Getter untuk mendapatkan harga asli
        get price () {
            return this._price;
        }
}
// ✅ Contoh Penggunaan
const item = new Product("Laptop",1000000);
// console.log(item.discountedPrice); 

item.price = 1200000; // Mengubah harga
// console.log(item.discountedPrice); //! Output: 1080000

// item.price = -500000; //! ❌ Akan error: "Price cannot be negative"



/*
* Penjelasan Perbaikan
Gunakan _price sebagai properti tersembunyi

_price digunakan untuk menyimpan nilai harga asli, agar tidak memicu setter saat diubah.

Setter hanya mengubah _price :
- this._price = newPrice; bukan this.price = newPrice;
- Menggunakan this.price di dalam setter akan memanggil dirinya sendiri (rekursi tak terbatas).

Tambahkan getter price untuk membaca _price
- Agar kita tetap bisa membaca harga asli dari luar.
*/



/*
* 🚀 KESIMPULAN
✔ Getter (get) digunakan untuk membaca data dengan format yang diubah atau tersembunyi.
✔ Setter (set) digunakan untuk memvalidasi atau mengubah nilai sebelum disimpan.

🔹 Gunakan Getter & Setter untuk:   
- Validasi input sebelum menyimpannya (contoh: nama harus kapital).
- Menyembunyikan informasi sensitif (contoh: password).
- Konversi unit data (contoh: Celsius ke Fahrenheit).
- Menambahkan fitur otomatis (contoh: diskon harga)
*/


/*
* Extra Explaining

*📌 Apa Itu Properti Tersembunyi (_) dalam JavaScript?
Properti tersembunyi adalah teknik yang digunakan dalam getter dan setter untuk menghindari rekursi tak terbatas dan melindungi data dari perubahan langsung.

Di JavaScript, kita biasanya memberi nama properti tersembunyi dengan garis bawah (_) di depannya, misalnya _balance, _price, _name, dll.

*🎭 Analogi Sederhana: Resepsionis dan Gudang
Bayangkan kamu masuk ke sebuah toko elektronik untuk membeli laptop.

!- Di depan toko, ada seorang resepsionis (getter & setter).
!- Sementara itu, barang-barang disimpan di gudang belakang (properti tersembunyi).
Saat kamu bertanya "Berapa harga laptop ini?", resepsionis tidak langsung memberitahu harga dari gudang, tapi melalui sistem yang sudah diatur (getter).

Jika kamu ingin mengubah harga laptop, kamu tidak bisa langsung masuk ke gudang dan mengubah label harga. Sebaliknya, kamu harus meminta resepsionis untuk melakukannya (setter).

*✍ Kesimpulan:

!- Gudang = _price (data asli yang disimpan)
!- Resepsionis = getter & setter (kontrol akses ke _price)
!- Pelanggan = kode yang ingin membaca/mengubah harga

*🤔 Kenapa Perlu Properti Tersembunyi (_)?
!- Mencegah Rekursi Tak Terbatas
Jika kita menggunakan this.price = newPrice dalam setter price, ini akan terus memanggil dirinya sendiri (infinite loop).

!- Mengontrol Akses ke Data
- Getter bisa mengubah format sebelum menampilkan data.
- Setter bisa memastikan data yang masuk valid (misalnya harga tidak boleh negatif).

!- Menjaga Struktur Kode yang Lebih Aman
- Kode lebih terorganisir.
- Memisahkan data asli dan cara mengakses data.

📌 Apakah Properti Tersembunyi Hanya untuk Nominal Angka atau Harga?
Tidak! Properti tersembunyi (_) bisa digunakan untuk berbagai jenis data, bukan hanya angka atau harga. Berikut beberapa contoh:

*/

/* 
*1️⃣ Menggunakan _password untuk Menyembunyikan Kata Sandi 
*/
class theUser {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    // Getter: Tidak menampilkan password asli
    get password(){
        return "*******";
    }
    // Setter: Memastikan password input minimal 6 karakter
    set password(newPassword) {
        if(newPassword.length < 6) {
            throw new Error("Password must be at least 6 characters. ");
        }
        this._password = newPassword;
    }
}

const hisUser = new theUser("Jackson","secret123");
// console.log(hisUser.password);

// hisUser.password = "short"; // ❌ Akan error: "Password must be at least 6 characters."

//!📌 Di sini _password digunakan untuk menyimpan password asli agar tidak bisa dibaca langsung.


/* 
* 2️⃣ Menggunakan _level untuk Menyembunyikan Level Karakter di Game 
*/
class GameCharacter {
    constructor(name, level) {
        this.name = name;
        this._level = level;
    }
    // Getter: Menampilkan level
    get level () {
        return `Level anda sekarang ${this._level}`;
    }

    // Setter: Level tidak boleh turun
    set level(newLevel){
        if (newLevel < this._level) {
            throw new Error("You cannot decrease your level!");
        }
        this._level = newLevel;
    } 
}

const hero = new GameCharacter("Warrior", 10);
// console.log(hero.level); //! Output: "Level 10"

hero.level = 15;
// console.log(hero.level) //! levelup, Output: "Level 15"

// hero.level = 5; //! ❌ Akan error: "You cannot decrease your level!"

//! 📌 Di sini _level digunakan untuk memastikan karakter tidak bisa menurunkan levelnya.

/* */
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
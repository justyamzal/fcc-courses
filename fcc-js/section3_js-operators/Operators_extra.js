//* ----------  1️⃣ Equality Operators (Strict vs. Loose Equality) ---------- 

/* Equality operators digunakan untuk membandingkan dua nilai. Ada dua jenis utama:
! - Loose Equality (==) → Hanya membandingkan nilai tanpa memeriksa tipe data.
! - Strict Equality (===) → Membandingkan nilai dan tipe data.

🔹 Contoh Perbedaan == dan ===
*/

console.log(5 == "5");  // true  → Karena JavaScript mengonversi "5" menjadi angka 5
console.log(5 === "5"); // false → Karena tipe datanya berbeda (number vs string)

// *🔹 Contoh Kasus Penggunaan Strict Equality (===)

//  💡 Kasus: Validasi input angka dari user
const userInput = "10"; // Input dari user selalu berupa string
const nilaiAsli = 10;

// Menggunakan loose equality
console.log(userInput == nilaiAsli); // true (konversi otomatis)

// Menggunakan strict equality
console.log(userInput === nilaiAsli); // false (karena tipe data berbeda)

// Cara aman untuk memastikan input adalah angka
if (parseInt(userInput) === nilaiAsli) {
    console.log("Input valid");
} else {
    console.log("Input tidak valid");
}

// n: ✅ Strict equality (===) lebih aman karena menghindari konversi data otomatis.



// ----------------------------------------------------------------------------------------------------------------



// * ----------  2️⃣ Ternary Operator (? :) ---------- 
/* Digunakan untuk menulis kondisi if-else dalam satu baris kode.
🔹 Contoh Penggunaan :
*/

const usia = 20;
const status = usia >= 18 ? "Dewasa" : "Anak-anak";
console.log(status); // Output: "Dewasa"
// ! 🚀 Lebih singkat dibandingkan dengan if-else!

//* 🔹 Contoh Kasus: Validasi Login
// 💡 Kasus: Jika user login, tampilkan nama user, jika tidak, tampilkan "Silakan login".

const user = "Budi";
const message = user ? `Halo, ${user}` : "Silakan login";
console.log(message); // Output: "Halo, Budi"

/*
- Jika user memiliki nilai, maka akan menampilkan "Halo, Budi".
- Jika user kosong atau null, akan menampilkan "Silakan login". 
*/




//* ---------- 3️⃣ Null Coalescing Operator (??) ---------- 
// Digunakan untuk menangani nilai null atau undefined, berbeda dengan || yang menangani semua falsy values (0, "", false, null, undefined).

// 🔹 Contoh Dasar

const username = null;
const displayName1 = username ?? "Guest";
console.log(displayName1); // Output: "Guest"
// !✅ ?? hanya menggantikan nilai null dan undefined, tetapi tidak menggantikan falsy values lainnya seperti 0 atau "".

// 🔹 Contoh Perbedaan || vs ??

console.log(0 || "Default");  // Output: "Default" (karena `0` dianggap falsy)
console.log(0 ?? "Default");  // Output: 0 (karena `??` hanya menggantikan `null` atau `undefined`)
// ➡ Gunakan ?? jika ingin membedakan antara null/undefined dan nilai falsy lainnya.

// 🔹 Contoh Kasus: Pengaturan Default dalam Aplikasi
// 💡 Kasus: Jika user tidak mengatur nama panggilan, gunakan default "User"

const nickname = "";
const displayName = nickname ?? "User";
console.log(displayName); // Output: "" (karena "" bukan null/undefined)

// Jika menggunakan ||, hasilnya akan "User", tapi dengan ??, hasil tetap "" karena hanya menggantikan null/undefined.


// n: 📌 Perbandingan Singkat
/* 
Operator	            Fungsi	                                            Contoh Penggunaan	                    Contoh Output
----------------------------------------------------------------------------------------------------------------------------
Strict Equality (===)	Membandingkan nilai & tipe data	                    5 === "5"	                            false
Ternary Operator (? :)	Menyingkat if-else	                                usia >= 18 ? "Dewasa" : "Anak-anak"	    "Dewasa"
Null Coalescing (??)	Menangani null & undefined	                        username ?? "Guest"	                    "Guest"

🔚 Kesimpulan :
=== (Strict Equality): Cocok untuk validasi tipe data yang ketat.
? : (Ternary Operator): Alternatif singkat untuk if-else.
?? (Null Coalescing Operator): Untuk memberikan nilai default hanya jika null atau undefined
*/
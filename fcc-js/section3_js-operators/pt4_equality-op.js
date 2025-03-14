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


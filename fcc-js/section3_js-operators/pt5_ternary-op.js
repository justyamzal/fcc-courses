
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



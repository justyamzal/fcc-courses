//---------- TRY AND CATCH ----------//
/*
📌 TRY & CATCH dalam JavaScript
try...catch adalah mekanisme error handling (penanganan kesalahan) dalam JavaScript. Fitur ini digunakan untuk menangkap dan menangani error agar program tidak langsung berhenti saat terjadi kesalahan.
*/

/*
🎯 Bagaimana try...catch Bekerja?
Format dasar: 
*/

try {
    // Kode yang mungkin menyebabkan error
} catch (error) {
    // Kode yang menangani error
}

/*
! try → Menjalankan kode yang berpotensi menyebabkan error.
catch(error) → Menangkap error jika terjadi, lalu menjalankan kode di dalamnya.
*/

/*
* 📌 Contoh Sederhana: Menangkap Error Saat Mengakses Variabel yang Tidak Ada
*/
try {
    // console.log(unknownVariable); // ❌ Error: unknownVariable is not defined
} catch (error) {
    // console.log("Terjadi kesalahan:",error.message);
}
// ✅ Output: "Terjadi kesalahan: unknownVariable is not defined"
//📌 Tanpa try...catch, kode ini akan langsung berhenti karena error. Dengan try...catch, program tetap berjalan.

/*
* 📌 Menambahkan finally (Blok yang Selalu Dieksekusi)
Blok finally akan selalu dijalankan, baik terjadi error maupun tidak.
*/

try {
    let num = 10;
    // console.log(num.toUpperCase()); // ❌ Error: num.toUpperCase is not a function

} catch(error) {
    // console.log("Terjadi Error:",error.message);
} finally {
    // console.log("Eksekusi selesai!");
}

// ✅ Output:
// "Terjadi error: num.toUpperCase is not a function"
// "Eksekusi selesai!"


/*
* 📌 Menggunakan throw untuk Melempar Error Sendiri
Kita bisa menggunakan throw untuk membuat error custom sesuai kebutuhan.
*/

function divide(a, b) {
    if (b === 0) {
        throw new error("Pembagian dengan nol tidak diperbolehkan");
    }
    return a / b;
}

try {
    // console.log(divide(10, 0)); //❌ Akan error
} catch(error) {
    // console.log("Error", error.message);
}
// ✅ Output: "Error: Pembagian dengan nol tidak diperbolehkan!"


/*
* 📌 Studi Kasus: Validasi Input Formulir
Misalkan kita membuat sistem login yang harus menerima username minimal 6 karakter.
*/
function login(username) {
    try {
        if (username.length < 6) {
            throw new Error ("username harus minimal 6 karakter!");
        }
        // console.log("Login berhasil");
    } catch (error) {
        // console.log("Login gagal", error.message);
    }
}

// login("abc"); //! ❌ Output: "Login gagal: Username harus minimal 6 karakter!"
// login("abcdef"); //! ✅ Output: "Login berhasil!"

//📌 Ini berguna untuk validasi input di form website.

/*
* 📌 Studi Kasus: Menangani API Fetch dengan try...catch
Misalkan kita mengambil data dari API menggunakan fetch(), tapi koneksi internet bisa saja bermasalah.
*/

async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        // console.log("Data pengguna:",data);
    } catch (error) {
        // console.log("Gagal mengambil data:",error.message);
    }
}

fetchData();
//📌 Jika koneksi buruk atau URL salah, catch akan menangkap error agar tidak menghentikan program.

/*
* 🚀 KESIMPULAN 
✔ try...catch menangani error agar program tetap berjalan.
✔ finally selalu dijalankan, cocok untuk membersihkan resource.
✔ Gunakan throw untuk membuat error custom.
✔ Cocok untuk validasi, API request, atau operasi berisiko error.
*/
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
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/


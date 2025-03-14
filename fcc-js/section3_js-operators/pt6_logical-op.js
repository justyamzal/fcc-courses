// ----- LOGICAL OPERATORS ----- //
/* Logical operators in javascript are special symbol or keywords used within expressions to perform logical operations, they involve boolean and values */ 

//*  || (OR), && (AND), ! (NOT OPERATOR), ?? (NULL COALESCING)


//* ----- OR, ||
/*represent by two stand line,is the 'OR' operator, the way works is it compares two values or two operands result to false then it will return to falsy */

// console.log(true || true); // true
// console.log (false || true); // true
// console.log(true || false); //true
// console.log(false || false); // false


let hasReservation = true;
let acceptingWalkIns = false;

const hasAccessToTable = hasReservation || acceptingWalkIns;
// console.log(hasAccessToTable);

//! * The essence of logical operators 'OR / || ' is when any value encounters a true value, it will make the result is true, except when false value encounters false value it will return to falsy */


//* ----- AND, &&
/* represend by two ampersands (&&) is the "AND" operator. the way works is it compares two values or two operand result to true then it will return to truthy */ 
 
// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

let boysAge = 16;
let hasRedCar = true;

// const canBoysDrive = boysAge >= 16 && hasRedCar;
// console.log(canBoysDrive);

let aaa = true, bbb = true, ccc = true, ddd = true;
// console.log (aaa && bbb || ccc && ddd); // output : true
// console.log ( (aaa && bbb) || (ccc && ddd)); // output : true


//! *The essence of logical operators '&& / AND' is when any value encounters a false value, it will make the result is false, except when true value encounters true value it will return to truthy */

//* ----- NOT, ! 

// ! This operator is represent by exclamation point is known as not operator, and this value returns the inverse of the operand that used with
/*  Definisi:
Operator ini membalikkan (negasi) nilai kebenaran (truthiness) dari sebuah ekspresi.

Jika nilai aslinya truthy → hasilnya false.
Jika nilai aslinya falsy → hasilnya true.

Nilai Falsy dalam JavaScript (yang dianggap false dalam konteks boolean):

|-| false
|-| 0, -0
|-| "" (string kosong)
|-| null
|-| undefined
|-| NaN  
*/


//* Contoh 1: Negasi sederhana
// console.log(!true); // false
// console.log(!false); // true

//* Contoh 2: Negasi nilai truthy/falsy
// console.log(!0);       // true (0 adalah falsy → dibalik jadi true)
// console.log(!"Hello"); // false (string non-kosong adalah truthy → dibalik jadi false)
// console.log(!null); // true (null adalah falsy → dibalik jadi true)

//* Contoh 3: Pengecekan kondisi
const isLoggedIn = false;
if (!isLoggedIn) {
//   console.log("Silakan login!"); // Akan dijalankan karena !false → true
}


let isClosedOnSunday = true;
const isRestaurantOpen = !isClosedOnSunday;
// console.log(isRestaurantOpen);


// * ----- NULL COALESCING, ??
/*
Definisi:
Operator ini mengembalikan nilai di sebelah kanan hanya jika nilai di sebelah kiri adalah null atau undefined.

- Jika nilai kiri bukan null/undefined → kembalikan nilai kiri.

- Jika nilai kiri adalah null/undefined → kembalikan nilai kanan.

Perbedaan dengan || (Logical OR):
------------------------------------------------------------------------------------
Operator	Kriteria	                                    Contoh
??	        Hanya peduli null/undefined                 	0 ?? 5 → 0
``	        Peduli semua nilai falsy	                    `0	  5→5`
Contoh Penggunaan:
*/

//* Contoh 1: Default value untuk null/undefined
const username1 = null;
// console.log(username1 ?? "Guest"); // "Guest"

//* Contoh 2: Nilai falsy selain null/undefined tetap dipertahankan
const price = 0;
// console.log(price ?? 100); // 0 (karena 0 bukan null/undefined)
// console.log(price || 100); // 100 (karena 0 adalah falsy)

//* Contoh 3: undefined vs. string kosong
const description = undefined;
// console.log(description ?? "No description"); // "No description"

let a2 = null;
const resultA2 = a2 ?? false
// console.log(resultA2); // Output : False


//* Nullish Coalescing dengan operasi kompleks
// -------------------------------------------------------

function fetchDataFromBackup() {
    // console.log("Memanggil backup data....");
    // return { data : "ini data dari backup" };
}

// --- Skenario 1: apiData = undefined (gunakan backup) ---
const apiData = undefined;
const result1 = apiData ?? fetchDataFromBackup();   //! Panggil fungsi backup jika apiData null/undefined
// console.log("Hasil Skenario 1 : ",result1); 

// --- Skenario 2: apiData memiliki nilai (tidak pakai backup) ---
const validData = { data : "ini data dari API"};
const result2 = validData  ?? fetchDataFromBackup();
// console.log("Hasil Skenario 2 : ", result2);

/* //! Penjelasan:

- Definisi Fungsi Backup:
Fungsi fetchDataFromBackup harus didefinisikan terlebih dahulu sebelum digunakan.

- Nullish Coalescing Operator (??):

1. Pada Skenario 1, karena apiData adalah undefined, operator ?? akan menjalankan fungsi di sebelah kanan (fetchDataFromBackup()).
2. Pada Skenario 2, karena validApiData memiliki nilai (tidak null/undefined), nilai tersebut langsung digunakan tanpa menjalankan fungsi backup.

- Perilaku Optimasi:
Fungsi di sebelah kanan ?? hanya dijalankan jika diperlukan. Pada Skenario 2, fetchDataFromBackup() tidak pernah dipanggil.

Contoh Lain (untuk Pemahaman Lebih Dalam):
*/

const nilaiFalsy = 0;
const result3 = nilaiFalsy ?? fetchDataFromBackup();
// console.log(result3);

/* Fix Utama:
Pastikan semua fungsi/variabel sudah didefinisikan sebelum digunakan.
Nullish Coalescing ideal untuk kasus di mana Anda ingin memberikan nilai default hanya untuk null/undefined, bukan semua nilai falsy.*/


//* Menggabungkan dengan operator lain
const value = null;
// console.log(value ?? 10 * 5); // 50 (karena value null)


//* Ringkasan Perilaku

/* //! Operator
Ekspresi	Hasil	    Penjelasan
------------------------------------------------
!true	    false	    Negasi boolean
!0	        true	    0 adalah falsy
!"Hello"	false	    String non-kosong adalah truthy


?? Operator
Ekspresi	          Hasil	    Penjelasan
--------------------------------------------------
null ?? "default"	"default"	Kiri adalah null
0 ?? 10	                0	    0 bukan null/undefined
"" ?? "Hello"	        ""	    String kosong tetap dipertahankan


//* Kapan Menggunakan ?? vs ||?
-----------------------------------------------------
Gunakan ?? jika:
- Ingin memberikan nilai default hanya untuk null/undefined.
- Contoh: Mempertahankan 0, "", atau false sebagai nilai valid.

Gunakan || jika:
- Inikan memberikan nilai default untuk semua nilai falsy (0, "", false, dll).
- Contoh: Fallback untuk konfigurasi opsional.
*/

// ----- LOGICAL OPERATORS WITH NON BOOLEAN ----- //
/* JavaScript is different from other programming languages one way that it differs is in its use of logical operators and how they can be applied to nonbing operant 

Di JavaScript, operator logika (&&, ||, !) tidak hanya bekerja dengan nilai boolean, tetapi juga bisa digunakan dengan nilai non-boolean. Operator ini tidak selalu mengembalikan true atau false, melainkan salah satu operandnya, tergantung aturan evaluasi.

#################################################################################
1️⃣ OR (||) → Mengembalikan Nilai Pertama yang Truthy
🔹 OR (||) akan mengevaluasi dari kiri ke kanan dan mengembalikan nilai pertama yang truthy.
🔹 Jika semua falsy, maka mengembalikan nilai terakhir.

javascript
-----------------------------------------------------------------------------------------------
*/

// console.log(0 || "Hello");                          // "Hello" (karena 0 falsy)
// console.log("" || 42);                              // 42 (karena "" falsy)
// console.log(null || undefined || "JavaScript");     // "JavaScript" (karena null & undefined falsy)
// console.log(0 || "" || null);                       // null (karena semuanya falsy, jadi ambil yang terakhir)
/*
✔ Kasus Penggunaan:
💡 Menentukan nilai default jika variabel kosong

javascript
-------------------------------------------------------------------------------
*/
// let username = "";
// let displayName = username || "Guest";      // Jika username kosong, pakai "Guest"
// console.log(displayName);                   // "Guest"
/*
#######################################################################################################
2️⃣ AND (&&) → Mengembalikan Nilai Pertama yang Falsy
🔹 AND (&&) akan mengevaluasi dari kiri ke kanan dan mengembalikan nilai pertama yang falsy.
🔹 Jika semua truthy, maka mengembalikan nilai terakhir.

javascript
-------------------------------------------------------------------------------------
*/
// console.log(1 && "Hello");               // "Hello" (karena 1 truthy, lanjut ke "Hello")
// console.log("JavaScript" && 0 && 100);   // 0 (karena 0 falsy)
// console.log(true && "Yes" && 99);        // 99 (karena semuanya truthy, ambil yang terakhir)

/*
✔ Kasus Penggunaan:
💡 Menjalankan fungsi hanya jika kondisi tertentu terpenuhi

javascript
----------------------------------------------------------------------------------------------------
*/
/*
let isLoggedIn = true;
isLoggedIn && console.log("Selamat datang!"); // "Selamat datang!" hanya dicetak jika isLoggedIn true

############################################################################################################
3️⃣ NOT (!) → Mengonversi ke Boolean dan Membalikkan
🔹 Operator ! akan mengonversi nilai ke boolean lalu membaliknya.
🔹 Bisa digunakan dua kali (!!) untuk memastikan nilai berubah menjadi boolean.

javascript
---------------------------------------------------------------------------------------------------
*/
// console.log(!"Hello");   // false (karena "Hello" truthy, dibalik jadi false)
// console.log(!0);         // true (karena 0 falsy, dibalik jadi true)
// console.log(!!"JavaScript"); // true (karena "JavaScript" truthy)
/*
✔ Kasus Penggunaan:
💡 Memeriksa apakah suatu nilai falsy atau truthy dengan aman

javascript
----------------------------------------------------------------------------------------------------
*/

let userInput = "";
if (!userInput) {
    // console.log("Input kosong!"); // Dicetak karena userInput falsy
}
/*
📝 Kesimpulan
|| (OR) → Mengambil nilai pertama yang truthy, atau terakhir jika semua falsy.
&& (AND) → Mengambil nilai pertama yang falsy, atau terakhir jika semua truthy.
! (NOT) → Mengubah nilai ke boolean lalu membaliknya.
🚀 Tips: Gunakan || untuk nilai default, && untuk kondisi yang harus dipenuhi, dan ! untuk konversi ke boolean.

############################################################################################################
*/


// console.log(false || "Steven");
// console.log(false || 1 || 2);

let usersChosenColor = "";
let defaultColor = 'green';

const currentWebsiteColor = usersChosenColor || defaultColor ;
// console.log(currentWebsiteColor);

let name2 = "test";
const result4 = false || name2;
// console.log(result4);

//! javascript evaluates the expression as either truthy or falsy


/*
* Apa itu Falsy dalam JavaScript?
Dalam JavaScript, "falsy" adalah nilai-nilai yang dianggap false ketika dievaluasi dalam konteks Boolean (misalnya, dalam kondisi if). Namun, falsy tidak sama dengan false, hanya saja mereka berperilaku seperti false dalam operasi logika.

🔹 Nilai-Nilai Falsy dalam JavaScript
Ada 7 nilai yang bersifat falsy:
-----------------------------------
false        →            Nilai boolean false
-----------------------------------
0           →             Angka nol
-0          →             Angka nol negatif
"" (string kosong) →      String tanpa karakter
null               →      Menunjukkan nilai kosong atau tidak diketahui
undefined          →      Variabel yang belum diberi nilai
NaN                →      "Not a Number" (bukan angka)

Contoh nilai falsy dalam kondisi if:
--------------------------------------------------------------------
if (!0) {
    console.log("0 adalah falsy");  // Ini akan dijalankan
}

if (!"") {
    console.log('"" adalah falsy');  // Ini akan dijalankan
}

if (!null) {
    console.log("null adalah falsy");  // Ini akan dijalankan
}

🔹 Perbedaan Antara false dan Nilai Falsy :
-----------------------
Konsep      |   Makna
-----------------------
false       |	Nilai boolean yang secara eksplisit mewakili false.
Nilai Falsy | 	Nilai lain yang dianggap false dalam konteks Boolean, tetapi bukan benar-benar false itu sendiri.


🔹 Contoh Perbedaan
javascript :
------------------------------------------------------------------------------------------------------------------
console.log(false == 0);        // true (karena keduanya falsy)
console.log(false === 0);       // false (karena tipe berbeda)

console.log(false == "");       // true (keduanya falsy)
console.log(false === "");      // false (tipe berbeda)

console.log(false == null);         // false (null adalah falsy, tapi tidak sama dengan false)
console.log(false == undefined);    // false (sama seperti di atas)

✔ Operator perbandingan ketat (===) tidak mengonversi nilai, sehingga nilai falsy tidak dianggap sama dengan false.


🔹 Contoh Penggunaan Nilai Falsy
💡 Jika ingin mengecek apakah suatu nilai falsy, kita bisa gunakan !value

javascript :
----------------------------------------------------------------------------------------------------------------------
const username = "";  // String kosong adalah falsy

if (!username) {
    console.log("Tidak ada username yang dimasukkan");  // Ini akan dijalankan
}


💡 Menggunakan || (OR) untuk Memberikan Nilai Default
const input = "";  // String kosong adalah falsy
const defaultText = input || "Nilai default";
console.log(defaultText);  // Output: "Nilai default"

✅ Kesimpulan
---------------
Nilai falsy adalah nilai yang dievaluasi sebagai false dalam konteks Boolean.
false adalah nilai boolean yang eksplisit, sedangkan falsy adalah tipe data lain yang berperilaku seperti false.
Gunakan || untuk memberikan nilai cadangan, tetapi berhati-hatilah dengan 0 dan "".
Gunakan ?? jika hanya ingin menggantikan null dan undefined.
Mau contoh tambahan? 🚀

*/


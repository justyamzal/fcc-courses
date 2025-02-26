// ----- ARITHMETHIC OPERATORS/OPERATION ----- //
//* | * (multiplication) , - (subtraction) , + (addition), / (division) , % (modulo/modulus operator) |

//* Arithmetic Operations in JavaScript
const a = 15;
const b = 4;

//* Addition
const addition = a + b;  
// 15 + 4 = 19
// console.log('Addition:', addition);

//* Subtraction
const subtraction = a - b;  
// 15 - 4 = 11
// console.log('Subtraction:', subtraction);

//* Multiplication
const multiplication = a * b; 
// 15 × 4 = 60
// console.log('Multiplication:', multiplication);

//* Modulus (Remainder)
const modulus = a % b;  
// 15 ÷ 4 = 3 remainder 3
// console.log('Modulus:', modulus);

//* Bonus: Division
const division = a / b;  
// 15 ÷ 4 = 3.75
// console.log('Division:', division);

// --- INCREMENTS
// console.log("--- INCREMENT ---");

let num = 1;
// console.log("if num = 1");
//* Method 1 : Using (+) Operator
num = num + 1;
// console.log("+1 -> ", num); 
//! Output : 2


//* Method 2: Using (+=) Operator
//! Reset Num
num = 1;

num += 1;
// console.log("+=1 ->", num);


//* Method 3 : Using (num++) Post-Increment
//! Reset Num
num = 1;

// console.log("Num++ ->", num++); 
//! Output: 1 (returns value BEFORE increment)
// console.log("After post-increment ->", num); 
//! Output: 2


//* Method 4 :  Using (++num) Pre-Increment  
//! Reset Num
num = 1;

// console.log("++Num ->",++num);
// console.log("After pre-increment ->", num); 
//! Output: 2


// ----- ASSIGNMENT OPERATOR ----- //

let programmingLanguange = "Javascript";

//! single equal sign stands for the assignment operatpr and we use it to assign a value to variable


// ----- COMPARISON OPERATORS ----- //

// *  ( > ) Greater than, ( >= ) Greater than or equal to , ( < ) less than, (<=) less than or equal to


let num1 = 14;
let num2 = 10;

const isNum1Greater = num1 > num2;
// console.log(isNum1Greater);
//! output : true 

const isNum1GreaterOrEqualTo = num1 >= num2;
// console.log(isNum1GreaterOrEqualTo);
//! output : true

const isNum1LessThan = num1 < num2;
// console.log(isNum1LessThan);
//! output : false


// ----- EQUALITY OPERATORS ----- //


//* Loose Equality , == ,  (this equality used coercision type that make the proses to changed from type data to other type data with automatic at comparison with looking specifically,)
/* loose equality menerapkan type coercision (Paksaan Tipe Data) yaitu proses otomatis JavaScript mengubah tipe data suatu nilai ke tipe data lain saat operasi perbandingan atau operasi lainnya dilakukan. proses otomatis JavaScript mengubah tipe data suatu nilai ke tipe data lain saat operasi perbandingan atau operasi lainnya dilakukan. misal :

Contoh : 
console.log(10 + "5"); // "105" (number 10 diubah jadi string "10")
console.log("5" - 3); // 2 (string "5" diubah jadi number 5)

Contoh Lain:
Ekspresi	        Hasil	Penjelasan Coercion
--------------------------------------------------
0 == false	        true	false diubah ke number → 0
"" == 0	            true    "" (string kosong) diubah ke 0
"5" == 5	        true	string "5" diubah ke number 5
null == undefined	true	Aturan khusus JavaScript
*/
 
//* Strict Equality, ===  , (compare the type of data to other type data specifically)
/* Membandingkan nilai dan tipe data tanpa konversi otomatis.
Cara Kerja:
- Jika tipe data berbeda: langsung false.
- Jika tipe sama: bandingkan nilainya.

Contoh:
console.log(2 === "2"); // false

Contoh Lain:

Ekspresi	        Hasil	Penjelasan
------------------------------------------------------------
0 === false	        false	Tipe berbeda (number vs boolean)
"" === 0	        false	Tipe berbeda (string vs number)
"5" === 5	        false	Tipe berbeda (string vs number)
null === undefined	false	Tipe berbeda (null vs undefined)
*/

/* Perbedaan Utama
Scenario	            == (Loose)	                === (Strict)
-------------------------------------------------------------------------
2 vs "2"	            true (coercion ke number)	false (tipe berbeda)
0 vs false	            true (coercion ke 0)	    false
"0" vs 0	            true	                    false
null vs undefined	    true	                    false


Kapan Coercion Terjadi?
- Saat operasi matematika (+, -, *, /).
- Saat perbandingan dengan ==.
- Saat menggunakan fungsi seperti if (nilai), alert(nilai), dll. */


let aa = 2;
let bb = '2';
// console.log(aa == bb );
//! Output = truthy, 

// console.log(aa === bb );
//! Output = Falsy,



// ----- THE TERNARY OPERATOR ----- //
// ! so the ternary operator is a condtional operator that allows us to write cleaner code, often time you need to perform a comparison and store value

//*! Ternary operator (?:) adalah operator kondisional dalam JavaScript yang digunakan untuk menyederhanakan pernyataan if-else dalam satu baris kode.

/* Sintaks Dasar - javascript :

kondisi ? ekspresi_jika_true : ekspresi_jika_false

Komponen Utama: 
- Kondisi: Ekspresi yang menghasilkan nilai boolean (true/false).
- Ekspresi Jika True: Dieksekusi jika kondisi true.
- Ekspresi Jika False: Dieksekusi jika kondisi false.
*/

//* Kode If-Else:
let status1;
let status2;
let theAge;
let theStatus;

if (theAge >= 18) {
  status1 = "Adult";
//   console.log(status1)
} else {
  status2 = "Kids";
//   console.log(status2);
}

//* Kode Ternary:
theAge = 18;
theStatus = theAge >= 18 ? "Adult" : "Kids";
// console.log(theStatus);


//* Example 1 :  
let age = 16; 
const canDrive = age >= 16 ? true : false 
// console.log("Can Drive ? ", canDrive);

//* Example 2:  
let point = 110;
const customerType = point > 100 ? 'gold' : 'silver';
// console.log("The type of customer is : ",customerType);

//* Other example and the implementation :

//* Deciding Discount Price;   
const isMember = true;
const totalPrice = 500000;
        //! get discount 20% if member & belanja >/ 500k :  // if not member -> discount 0%   
const discount = isMember ? (totalPrice >= 500000 ? 0.2 : 0.1 ) : 0;      
// console.log(`Discount: ${discount * 100}%`);

//* Validation Input Form 
const input = "";
//! kondisi ? ekspresi_jika_true : ekspresi_jika_false;
const pesanError = input ? "" : "input tidak boleh kosong"; //Dalam JavaScript, nilai input akan diuji apakah bernilai truthy atau falsy. Karena input adalah "" (string kosong), maka nilainya falsy.
// console.log(pesanError);

//* Deciding Default Value
const konfigurasiPengguna = null;
const tema = konfigurasiPengguna?.tema ?? "dark"; // Jika konfigurasi null, pakai tema "dark"
// console.log(tema);


/* 
! Kapan Menggunakan Ternary Operator ?
- Untuk menentukan nilai variabel berdasarkan kondisi.
- Inline rendering di JSX/React.
- Kondisi sederhana yang membutuhkan penulisan singkat.
Dengan memahami ternary operator, Anda bisa menulis kode yang lebih ringkas tanpa mengorbankan keterbacaan! 

Contoh kode lengkap: javascript
*/
const suhu = 25;
const kategori = suhu > 30 ? "Panas" 
    : suhu >= 20 ? "Normal" 
    : "Dingin";

// console.log(kategori); // Output: "Normal"






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
const username = null;
// console.log(username ?? "Guest"); // "Guest"

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



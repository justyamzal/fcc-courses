// -----  REDUCING AN ARRAY ----- //
/* 
* Menghitung total nilai dalam array. 

* Reduce Method dalam JavaScript adalah metode array yang digunakan untuk menggabungkan semua elemen array menjadi satu nilai tunggal (seperti total, rata-rata, atau objek hasil agregasi).

* Apa itu "Reducing"?
Reducing adalah proses mengakumulasi/mengumpulkan nilai-nilai dalam array menjadi hasil akhir tunggal dengan logika tertentu.
*/

const numbers = [1, 10, 5, 14];
let sum_ = 0;

for (const num of numbers) {
    sum_ += num
}
// console.log(`Total sum: ${sum_}`); //! Total sum: 30


const _sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
// console.log(_sum);


//* 1. Penjumlahan Angka
const theNumbers_ = [1, 2, 3, 4];
const sum = theNumbers_.reduce((acc, curr) => acc + curr, 0); //! acc = Accumulator ( Menyimpan hasil akumulasi dari operasi sebelumnya),  curr = Current value ( Menyimpan hasil akumulasi dari operasi sebelumnya)
// console.log(`Total Sum: ${sum}`);


/* 
n:
! accumulator: Nilai yang diakumulasikan dari iterasi sebelumnya.
! currentValue: Nilai elemen array yang sedang diproses.
! index (opsional): Posisi elemen saat ini.
! array (opsional): Array asli yang sedang diproses.
! nilaiAwal (opsional): Nilai awal accumulator (jika tidak ada, accumulator diisi elemen pertama).
*/


//* 2. Menggabungkan String
const words = ["Hello", " ", "World", "!" ];
const sentece = words.reduce((acc, word) => acc + word, "");
// console.log(sentece);


//* 3. Mengelompokkan Data
const users = [
    {name: "Alice", age:20 },
    {name: "Bob", age:20 },
    {name: "Eve", age:30 }
];

const groupByAge = users.reduce((acc, user) => {
    if (!acc[user.age]) acc[user.age] = [];
    acc[user.age].push(user.name);
    return acc;
}, {});

// console.log(groupByAge); // Output: { '20': ['Alice', 'Bob'], '30': ['Eve'] }


/*
* Perbedaan Reduce() vs Map()/Filter()

* REDUCE()                                    ||         MAP()/FILTER()
------------------------------------------------------------------------
Menghasilkan
-----------
satu nilai (bisa angka, string, objek, array) || array baru dengan panjang sama/berbeda

Cocok untuk                                     
------------
agregasi (total, rata-rata, grouping)         || transformasi/penyaringan data
-----------------------------------------------------------------------------



* Kapan Menggunakan Reduce()?
--------------------------------
1. Saat perlu menggabungkan data (misal: total belanja, rata-rata nilai).
2. Saat ingin membuat struktur data baru (misal: objek hasil grouping).
3. Saat operasi tidak bisa diselesaikan dengan map()/filter() saja.

* Catatan Penting
--------------------------
- Nilai awal (initialValue) :
Jika tidak diberikan, accumulator akan diisi elemen pertama, dan iterasi dimulai dari elemen kedua.
Contoh: [1,2,3].reduce((acc, val) => acc + val) → 1 + 2 + 3 = 6.

- Jangan lupa return :
Jika tidak ada return, accumulator akan menjadi undefined.

- Bisa mengembalikan array/objek :
Reduce tidak terbatas pada nilai primitif. Contoh:
*/

const doubled = [1,2,3].reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
  }, []);
// console.log(doubled); //! Output: [2, 4, 6]

//* Contoh Kompleks: Menghitung Rata-Rata

const scores = [80, 90, 70, 100];

const average = scores.reduce((acc, score, index, array) => {
    acc += score;
    if (index === array.length - 1) return acc / array.length;
    return acc;
},0);

// console.log(`Average is : ${average}`); //! Average is : 85


const average_ = scores.reduce((acc, score) => acc + score, 0) / scores.length; //Nilai awal accumulator adalah 0
// console.log(average_); //! 85

/*
* Apa yang Dilakukan Kode Ini?
Kode ini menghitung rata-rata nilai dari array scores dengan dua langkah:
1. Menjumlahkan semua nilai menggunakan reduce().
2. Membagi total penjumlahan dengan jumlah elemen array (scores.length).

* Penjelasan Per Bagian
1. scores.reduce((acc, score) => acc + score, 0)
! Fungsi reduce() :
    - Mengakumulasi semua elemen array menjadi satu nilai total.
    - acc (accumulator): Penampung nilai total sementara.
    - score : Nilai elemen array yang sedang diproses.
    - 0 : Nilai awal acc (dimulai dari 0).

! Proses :
    - Iterasi 1: acc = 0 + 80 = 80
    - Iterasi 2: acc = 80 + 90 = 170
    - Iterasi 3: acc = 170 + 70 = 240
    - Iterasi 4: acc = 240 + 100 = 340

Hasil : 340 (total semua nilai).

2. / scores.length
Setelah mendapat total (340), hasilnya dibagi dengan jumlah elemen array (4), 340 / 4 = 85


Visualisasi Proses
scores = [80, 90, 70, 100]
total  = 80 + 90 + 70 + 100 = 340
average = 340 / 4 = 85

-------------------------------------
* Kelebihan Cara Ini
Lebih Sederhana :
Tidak perlu mengecek index atau kondisi di dalam reduce().
Mudah Dibaca :
Logika penjumlahan dan pembagian dipisahkan jelas.
Efisien :
Hanya satu operasi reduce() dan satu operasi pembagian.


* Catatan Penting
- Array Kosong :
Jika scores kosong ([]), scores.length = 0, sehingga terjadi pembagian oleh nol (NaN).
Solusi: Tambahkan pengecekan:
const average = scores.length 
  ? scores.reduce((acc, score) => acc + score, 0) / scores.length 
  : 0;

- Immutability :
Array asli scores tidak berubah.
*/


//Dengan memahami reduce(), Anda bisa menangani operasi agregasi data secara efisien! 🚀



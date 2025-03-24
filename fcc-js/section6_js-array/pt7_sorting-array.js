// -----  SORTING ARRAYS ----- //
/* 🔹 Contoh Implementasi */

const bilangan_ = [40,10,30,20];
bilangan_.sort((a,b) => a - b);
// console.log(bilangan_);


let characters = ['c', 'd', 'b', 'a'];
// characters.reverse();
characters.sort();
// console.log(characters); 


// 1. Membuat array employees yang berisi objek-objek karyawan
let employees = [
    {id:1, name: "Jen"},
    {id:2, name: "Steven"},
    {id:3, name: "Andrew"},
    {id:4, name: "Terry"}
];
// 2. Mengurutkan array employees menggunakan method .sort()
employees.sort((a,b) => {
    // 3. Mengubah nama ke huruf kecil untuk perbandingan case-insensitive
    const lowercaseA = a.name.toLowerCase();
    const lowercaseB = b.name.toLowerCase();
    // 4. Logika perbandingan:
    if (lowercaseA < lowercaseB) return -1; // a harus sebelum b
    if (lowercaseA > lowercaseB) return 1;  // b harus sebelum a
    return 0; // urutan tetap jika sama
});

//! 5. Menampilkan hasil pengurutan ke console
// console.log(employees); 

/*
Penjelasan detail:

* 1. Array employees
- Menyimpan data 4 karyawan dalam bentuk array of objects
- Setiap objek memiliki properti id (number) dan name (string)

* 2. Method .sort()
- Fungsi ini mengurutkan elemen array secara langsung (modify array asli)
- Menerima fungsi comparator untuk menentukan urutan

* 3. Parameter a dan b
- a dan b adalah dua elemen array yang sedang dibandingkan
- Pada contoh ini, a dan b adalah objek karyawan

* 4. Konversi ke huruf kecil
- Menggunakan .toLowerCase() untuk membuat perbandingan tidak sensitif terhadap huruf besar/kecil
- Contoh: "Jen" dan "jen" akan dianggap sama

* 5. Logika Perbandingan
- Jika lowercaseA < lowercaseB: kembalikan -1 (a diurutkan sebelum b)
- Jika lowercaseA > lowercaseB: kembalikan 1 (b diurutkan sebelum a)
- Jika sama: kembalikan 0 (posisi tetap)

* 6. Hasil Akhir
- Setelah diurutkan, array akan menjadi:

[
  {id:3, name:"Andrew"},
  {id:1, name:"Jen"},
  {id:2, name:"Steven"},
  {id:4, name:"Terry"}
]

Urutan abjad berdasarkan nama (A → J → S → T)

Catatan Tambahan untuk Pemula:

- Method .sort() mengubah array asli (tidak membuat salinan)
- Tanpa konversi ke lowercase, "Andrew" (A) akan tetap dianggap lebih kecil dari "andrew" (a) karena perbedaan kode Unicode
- Angka return (-1, 1, 0) menentukan posisi relatif antara dua elemen yang dibandingkan

*/
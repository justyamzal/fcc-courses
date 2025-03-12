
// ----- OBJECT LITERALS ----- //
  /* 
  
//* #1 Definisi Object Literals : 
  Object Literals adalah cara paling sederhana untuk membuat objek di JavaScript. Objek adalah kumpulan properti (key-value pairs) yang dapat menyimpan data (nilai) dan fungsi (method). Objek literal dibuat menggunakan sintaks {} (kurung kurawal).
  */

  const { time, log } = require("console");
  const { create } = require("domain");
  const { start } = require("repl");
  
//* #2 Sintaks Object Literals :
  /*
  const obj = {
      key1: value1, // Properti dengan nilai
      key2: value2,
      method() {    // Method (fungsi/function dalam objek)
        ! Kode fungsi
      }
    };
  */
  
  /*
  - Key: Nama properti (bisa berupa string atau identifier).
  - Value: Nilai properti (bisa berupa tipe data apa pun: string, number, boolean, array, objek lain, atau bahkan fungsi).
  - Method: Fungsi yang didefinisikan di dalam objek.
  */
  
//* #3 Contoh Dasar Object Literals :
  
  const mahasiswa = {
      nama: "Budi",
      umur: 20,
      jurusan: "Teknik Infomartika",
      sapa(){
          // console.log(`Halo, nama saya ${this.nama}.` );
      }
  }
  
  // mahasiswa.sapa();
  
  /*
  - nama, umur, dan jurusan adalah properti dengan nilai.
  - sapa() adalah method yang mencetak pesan ke konsol.
  - this merujuk ke objek saat ini (mahasiswa).
  */
  
//* #4 Fitur Lanjutan Object Literals :
  
  // Nested Objects
  
  const mahasiswa2 = {
      nama: "Budi",
      detail: {
          alamat: "jakarta",
          telepon: "08123456789"
      }
  };
  
  // console.log(mahasiswa2.detail.alamat);
     
  
  // Dynamic Property Names
  
  const key = 'jurusan';
  const students = {
      nama: 'Budi',
      [key]: 'Teknik Informatika'
  };
  
  // console.log(mahasiswa.jurusan);
  
  //! Shorthand 
  const nama = "Budi";
  const umur = 20;
  
  const mahasiswa3 = {nama, umur};
  // console.log(mahasiswa3);
  
  //! Computed Method Names
  
  const methodName = 'sapa';
  const mahasiswa_ = {
      [methodName]() {
          // console.log("Halo!");
      }
  }
  
  mahasiswa.sapa();
  
  //* #5 Studi Kasus: Manajemen Toko Buku
  /* Studi Kasus: Manajemen Toko Buku 
      Anda diminta untuk membuat sistem manajemen toko buku sederhana menggunakan objek literal. Sistem ini harus dapat menyimpan informasi buku, menambahkan buku baru, dan menampilkan daftar buku.
  */ 
   
  const tokoBuku = {
      buku: [],
      tambahBuku(judul, penulis, harga) {
          const bukuBaru = {judul, penulis, harga};
          this.buku.push(bukuBaru);
          // console.log(`Buku "${judul}" berhasil ditambahkan`);
  
      },
      tampilkanBuku() {
          // console.log("Daftar Buku:");
          this.buku.forEach((buku, index) => {
              // console.log(`${index + 1}. ${buku.judul} oleh ${buku.penulis} - Rp${buku.harga}`);
          });
      },
      cariBuku(judul) {
          const bukuDitemukan = this.buku.find(buku => buku.judul === judul);
          if (bukuDitemukan) {
              // console.log(`Detail Buku: ${bukuDitemukan.judul} oleh ${bukuDitemukan.penulis} - Rp${bukuDitemukan.harga}`);
          } else {
              // console.log(`Buku "${judul}" tidak ditemukan.`);
          }
      }
      
  };
  
  //! Menambahkan buku
  tokoBuku.tambahBuku("Javascript for beginners", "John Doe", 150000);
  tokoBuku.tambahBuku("Advanced Javascript", "Jane Smith",200000);
  
  //! Menampilkan daftar buku
  tokoBuku.tampilkanBuku();
  
  //! Mencari buku
  tokoBuku.cariBuku("Advanced Javascript");
  
  
  
  //* #7. Kesimpulan
  /*
  - Object Literals adalah cara sederhana dan efektif untuk membuat objek di JavaScript.
  
  - Objek dapat menyimpan data (properti) dan fungsi (method).
  
  - Fitur lanjutan seperti nested objects, dynamic property names, dan computed method names membuat objek lebih fleksibel.
  
  - Studi kasus dan tantangan membantu Anda memahami cara menggunakan objek literal dalam skenario nyata.
  
  */
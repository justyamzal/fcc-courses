//!----- Library ----- //
const fs = require('fs'); // fs: Modul Node.js untuk operasi file system (membaca/menulis 
const {
    method,
    includes
} = require('lodash');
const readline = require('readline'); //readline: Modul Node.js untuk menerima input dari terminal

// ----- Instrument ----- //
//Membuat interface input terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Directory for storage books data(JSON)
const FILE_PATH = './dataBuku.json';

//Funxtion for read data file JSON
function bacaData() {
    try {
        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        return JSON.parse(data)
    } catch (error) {
        return [];
    }
}
//n: Jika file tidak ada atau rusak, kembalikan array kosong

//Function for saving data (JSON)
function simpanData(data) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

//Object for CRUD

const tokoBuku = {
    buku: bacaData() || [],

    //Add books
    tambahBuku(judul, penulis, tahun, harga) {
        if (!judul || !penulis || isNaN(tahun) || isNaN(harga)) {
            console.log("❌ Input tidak valid! Pastikan harga dan tahun adalah angka.\n");
            kembaliKeMenu();
            return;
        }

        this.buku.push({
            judul,
            penulis,
            tahun: parseInt(tahun),
            harga: parseInt(harga)
        });

        simpanData(this.buku);
        console.log(`✅ Buku "${judul}" berhasil ditambahkan!\n!`);
        kembaliKeMenu();
    },

    //Shows list of books
    tampilkanBuku() {
        if (!Array.isArray(this.buku)) {
            this.buku = []; // Jika `buku` bukan array, set ke array kosong
        }

        console.log("\n📚 Daftar Buku:");
        if (this.buku.length === 0) {
            console.log("❌ Tidak ada buku yang tersedia.");
        } else {
            this.buku.forEach((buku, index) => {
                console.log(`${index + 1}. ${buku.judul} - ${buku.penulis} - ${buku.tahun} - Rp${buku.harga}`);
            });
        }

        kembaliKeMenu();

    },

    //Read / findings books
    cariBuku() {
        console.log('\n=== 🔍 PENCARIAN LANJUTAN ===');
        console.log('1. Cari berdasarkan kata kunci (judul/penulis)');
        console.log('2. Cari berdasarkan tahun');
        console.log('3. Cari rentang harga\n');

        rl.question("Masukkan kata kunci: ", (metode) => { //rl : interface input terminal
            if (metode === "1") { //opsi 1
                rl.question("Masukkan kata kunci: ", (keyword) => {
                    const hasil = this.buku.filter(buku =>
                        buku.judul.toLowerCase().includes(keyword.toLowerCase()) ||
                        buku.penulis.toLowerCase().includes(keyword.toLowerCase())
                    );
                    tampilkanHasilPencarian(hasil);
                });
            } else if (metode === "2") { //opsi 2
                rl.question("Masukkan harga minimum: ", (min) => {
                    rl.question("Masukkan harga maksimum: ", (max) => {
                        const hasil = this.buku.filter(buku =>
                            buku.harga >= parseInt(min) && buku.harga <= parseInt(max) //batas bawah & batas atas
                        );
                        tampilkanHasilPencarian(hasil);
                    });
                });
            } else {
                console.log(" ❌ Pilihan tidak valid!\n ");
                kembaliKeMenu();
            }
        });
    },

    //Update books
    updateBuku(judul, hargaBaru) {
        const index = this.buku.findIndex(buku => buku.judul.toLowerCase() === judul.toLowerCase());
        //menggunakan -1 sebagai parameter jika tidak menemukan buku dan tidak menggunakan 0 atau 1, karena index dimulai dari 0.
        if (index !== -1) {
            this.buku[index].harga = parseInt(hargaBaru);
            simpanData(this.buku);
            console.log(`✅ Buku "${judul}" berhasil diperbarui!\n`);
        } else {
            console.log(`❌ Buku "${judul}" tidak ditemukan.\n`);
        }
        kembaliKeMenu();
    },

    //Delete books
    hapusBuku(judul) {
        const index = this.buku.findIndex(buku => buku.judul.toLowerCase() === judul.toLowerCase());
        if (index !== -1) {
            this.buku.splice(index, 1); //splice
            simpanData(this.buku);
            console.log(`🗑️ Buku "${judul}" telah dihapus!\n`);
        } else {
            console.log(`❌ Buku "${judul}" tidak ditemukan.\n`);
        }
        kembaliKeMenu();
    }
};

//Function for searching
function tampilkanHasilPencarian(hasil) {
    if (hasil > 0) {
        console.log("\n📚 Hasil Pencarian:");
        hasil.forEach((buku, index) => {
            console.log(`${index + 1}. ${buku.judul} - ${buku.penulis} - rp${buku.harga}`);
        });
    } else {
        console.log("❌ Tidak ada hasil yang ditemukan.");
    }
    kembaliKeMenu();
}

//Function for back to menu
function kembaliKeMenu() {
    rl.question("\nTekan ENTER untuk kembali ke menu...", () => {
        console.clear();
        tampilkanMenu();
    });
}

//Function shows menu
function tampilkanMenu() {
    console.log("\n=== 📖 MENU CRUD TOKO BUKU ===");
    console.log("1. Tampilkan Semua Buku");
    console.log("2. Tambah Buku");
    console.log("3. Cari Buku");
    console.log("4. Update Buku");
    console.log("5. Hapus Buku");
    console.log("6. Keluar\n");

    rl.question("Pilih menu (1-6): ", (pilihan) => {
        switch (pilihan) {
            // List of books
            case "1":
                tokoBuku.tampilkanBuku();
                break;
                // Add books
            case "2":
                rl.question("Masukkan judul buku: ", (judul) => {
                    rl.question("Masukkan penulis: ", (penulis) => {
                        rl.question("Masukkan tahun terbit: ", (tahun) => {
                            rl.question("Masukkan harga buku: ", (harga) => {
                                tokoBuku.tambahBuku(judul, penulis, tahun, harga);
                            });
                        });
                    });
                });
                break;

                //Searching books    
            case "3":
                tokoBuku.cariBuku();
                break;
                // Updating books info
            case "4":
                rl.question("Masukkan judul buku yang ingin diupdate: ", (judul) => {
                    rl.question("Masukkan harga baru: ", (harga) => {
                        tokoBuku.updateBuku(judul, harga);
                    });
                });
                break;
            case "5":
                rl.question("Masukkan judul buku yang ingin dihapus: ", (judul) => {
                    tokoBuku.hapusBuku(judul);
                });
                break;
            case "6":
                console.log("👋 Keluar dari program...");
                rl.close();
                break;
            default:
                console.log("❌ Pilihan tidak valid! Silakan pilih menu 1-6.\n");
                tampilkanMenu();
        }
    });
}

// 🏁 Jalankan program
tampilkanMenu();
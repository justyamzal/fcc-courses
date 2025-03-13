const fs = require('fs'); //fs: Modul Node.js untuk operasi file system (membaca/menulis file)
const readline = require("readline"); //readline: Modul Node.js untuk menerima input dari terminal

// Membuat interface untuk input terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

// 📌 File tempat menyimpan data buku
const FILE_PATH = './dataBuku.json';

// 🔹 Fungsi membaca data dari file JSON
function bacaData(){
    try {
        const data = fs.readFileSync(FILE_PATH,"utf-8");
        return JSON.parse(data)
    } catch (error) {
        return[]; // Jika file tidak ada atau rusak, kembalikan array kosong
    }
};

// 🔹 Fungsi menyimpan data ke file JSON
function simpanData(data) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
}

// 📚 Objek tokoBuku untuk mengelola CRUD

const tokoBuku = {
    buku: bacaData() || [],
    
    // 🔹 Tambah Buku
    tambahBuku(judul,penulis,harga) {
        if (!judul || !penulis || isNaN(harga)) {
            console.log("❌ Input tidak valid!\n");
        }
        this.buku.push({judul, penulis, harga: parseInt(harga) });
        simpanData(this.buku);
        console.log(`✅ Buku "${judul}" berhasil ditambahkan!\n`);
        kembaliKeMenu();
    },
    // 🔹 Tampilkan Semua Buku
    tampilkanBuku() {
        if (!Array.isArray(this.buku)) {
            this.buku = []; // Jika `buku` bukan array, set ke array kosong
        }

        console.log("\n📚 Daftar Buku:");
        if (this.buku.length === 0) {
            console.log("❌ Tidak ada buku yang tersedia.");
        } else {
            this.buku.forEach((buku, index) => {
                console.log(`${index + 1}. ${buku.judul} - ${buku.penulis} - Rp${buku.harga}`);
            });
        }
        kembaliKeMenu();

},

cariBukuAdvanced() {
    console.log("\n=== 🔍 PENCARIAN LANJUTAN ===");
    console.log("1. Cari berdasarkan kata kunci (judul/penulis");
    console.log("2. Cari berdasarkan rentang harga\n");

    rl.question("Pilih metode pencarian (1-2): ", (metode) => {
        if(metode === "1") {
            rl.question("Masukkan kata kunci: ",(keyword) => {
                const hasil = this.buku.filter(buku => 
                    buku.judul.toLowerCase().includes(keyword.toLowerCase()) ||
                    buku.penulis.toLowerCase().includes(keyword.toLowerCase())
                );
                tampilkanHasilPencarian(hasil);
            });
        } else if (metode === "2") {
            rl.question("Masukkan harga minimum: ", (min) => {
                rl.question("Masukkan harga maksimum: ", (max) => {
                    const hasil = this.buku.filter(buku =>
                        buku.harga >= parseInt(min) && buku.harga <= parseInt(max)
                    );
                    tampilkanHasilPencarian(hasil);
                });
            });
        } else {
            console.log("❌ Pilihan tidak valid!\n");
            kembaliKeMenu();
        }
    });
},


    // 🔹 Update Buku
    updateBuku(judul, hargaBaru) {
        const index = this.buku.findIndex(buku => buku.judul.toLowerCase() === judul.toLowerCase());
        if (index !== -1) {
            this.buku[index].harga = parseInt(hargaBaru);
            simpanData(this.buku);
            console.log(`✅ Buku "${judul}" berhasil diperbarui!\n`);
        } else {
            console.log(`❌ Buku "${judul}" tidak ditemukan.\n`);
        }
        kembaliKeMenu();
    },

    // 🔹 Hapus Buku
    hapusBuku(judul) {
        const index = this.buku.findIndex(buku => buku.judul.toLowerCase() === judul.toLowerCase());
        if (index !== -1) {
            this.buku.splice(index, 1);
            simpanData(this.buku);
            console.log(`🗑️ Buku "${judul}" telah dihapus!\n`);
        } else {
            console.log(`❌ Buku "${judul}" tidak ditemukan.\n`);
        }
        kembaliKeMenu();
    }
};

// 🔹 Fungsi menampilkan hasil pencarian
function tampilkanHasilPencarian(hasil) {
    if (hasil.length > 0) {
        console.log("\n📚 Hasil Pencarian:");
        hasil.forEach((buku, index) => {
            console.log(`${index + 1}. ${buku.judul} - ${buku.penulis} - Rp${buku.harga}`);
        });
    } else {
        console.log("❌ Tidak ada hasil yang ditemukan.");
    }
    kembaliKeMenu();
}

// 🔹 Fungsi untuk kembali ke menu
function kembaliKeMenu() {
    rl.question("\nTekan ENTER untuk kembali ke menu...", () => {
        console.clear();
        tampilkanMenu();
    });
}

// 📌 Fungsi untuk Menampilkan Menu
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
            case "1":
                tokoBuku.tampilkanBuku();
                break;
            case "2":
                rl.question("Masukkan judul buku: ", (judul) => {
                    rl.question("Masukkan penulis: ", (penulis) => {
                        rl.question("Masukkan harga: ", (harga) => {
                            tokoBuku.tambahBuku(judul, penulis, harga);
                        });
                    });
                });
                break;
            case "3":
                tokoBuku.cariBukuAdvanced();
                break;
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


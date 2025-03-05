
const fs = require("fs");
const readline = require("readline");

// Membuat interface untuk input di terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 🔹 Fungsi untuk membaca data dari file JSON
function bacaData() {
    try {
        const data = fs.readFileSync("buku.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return []; // Jika file tidak ada atau rusak, kembalikan array kosong
    }
}

// 🔹 Fungsi untuk menyimpan data ke file JSON
function simpanData(data) {
    fs.writeFileSync("buku.json", JSON.stringify(data, null, 2));
}

const tokoBuku = {
    buku: bacaData(), // Memuat data dari file saat program dijalankan

    //* CREATE: Tambah buku baru
    tambahBuku(judul, penulis, harga) {
        const bukuBaru = { judul, penulis, harga };
        this.buku.push(bukuBaru);
        simpanData(this.buku);
        console.log(`✅ Buku "${judul}" berhasil ditambahkan!\n`);
    },

    //* READ: Menampilkan semua buku
    tampilkanBuku() {
        console.log("\n📚 Daftar Buku:");
        if (this.buku.length === 0) {
            console.log("❌ Belum ada buku yang tersedia.");
        } else {
            this.buku.forEach((buku, index) => {
                console.log(`${index + 1}. ${buku.judul} oleh ${buku.penulis} - Rp${buku.harga}`);
            });
        }
        console.log("");
    },

    //* READ: Mencari buku berdasarkan judul
    cariBuku(judul) {
        const bukuDitemukan = this.buku.find(buku => buku.judul.toLowerCase() === judul.toLowerCase());
        if (bukuDitemukan) {
            console.log(`\n📖 Detail Buku: ${bukuDitemukan.judul} oleh ${bukuDitemukan.penulis} - Rp${bukuDitemukan.harga}\n`);
        } else {
            console.log(`❌ Buku "${judul}" tidak ditemukan.\n`);
        }
    },

    //* UPDATE: Mengupdate informasi buku berdasarkan judul
    updateBuku(judul, dataBaru) {
        const index = this.buku.findIndex(buku => buku.judul.toLowerCase() === judul.toLowerCase());
        if (index !== -1) {
            this.buku[index] = { ...this.buku[index], ...dataBaru };
            simpanData(this.buku);
            console.log(`✅ Buku "${judul}" berhasil diperbarui!\n`);
        } else {
            console.log(`❌ Buku "${judul}" tidak ditemukan.\n`);
        }
    },

    //* DELETE: Menghapus buku berdasarkan judul
    hapusBuku(judul) {
        const index = this.buku.findIndex(buku => buku.judul.toLowerCase() === judul.toLowerCase());
        if (index !== -1) {
            this.buku.splice(index, 1);
            simpanData(this.buku);
            console.log(`🗑️ Buku "${judul}" telah dihapus!\n`);
        } else {
            console.log(`❌ Buku "${judul}" tidak ditemukan.\n`);
        }
    }
};

//* Fungsi untuk menampilkan menu di terminal
function tampilkanMenu() {
    console.log("=== 📖 MENU CRUD TOKO BUKU ===");
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
                kembaliKeMenu();
                break;
            case "2":
                rl.question("Masukkan judul buku: ", (judul) => {
                    rl.question("Masukkan penulis: ", (penulis) => {
                        rl.question("Masukkan harga: ", (harga) => {
                            tokoBuku.tambahBuku(judul, penulis, parseInt(harga));
                            kembaliKeMenu();
                        });
                    });
                });
                break;
            case "3":
                rl.question("Masukkan judul buku yang ingin dicari: ", (judul) => {
                    tokoBuku.cariBuku(judul);
                    kembaliKeMenu();
                });
                break;
            case "4":
                rl.question("Masukkan judul buku yang ingin diupdate: ", (judul) => {
                    rl.question("Masukkan harga baru: ", (harga) => {
                        tokoBuku.updateBuku(judul, { harga: parseInt(harga) });
                        kembaliKeMenu();
                    });
                });
                break;
            case "5":
                rl.question("Masukkan judul buku yang ingin dihapus: ", (judul) => {
                    tokoBuku.hapusBuku(judul);
                    kembaliKeMenu();
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

//* Fungsi untuk kembali ke menu setelah operasi selesai
function kembaliKeMenu() {
    rl.question("Tekan ENTER untuk kembali ke menu...", () => {
        console.clear();
        tampilkanMenu();
    });
}

//* Jalankan program
tampilkanMenu();

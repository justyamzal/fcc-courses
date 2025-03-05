const readline = require('readline-sync');

const tokoBuku = {
    buku: [],

    //* CREATE: Menambahkan buku baru
    tambahBuku() {
        const judul = readline.question("Masukkan judul buku: ");
        const penulis = readline.question("Masukkan penulis: ");
        const harga = readline.questionInt("Masukkan harga: ");

        this.buku.push({ judul, penulis, harga });
        console.log(`✅ Buku "${judul}" berhasil ditambahkan.\n`);
    },

    //* READ: Menampilkan semua buku
    tampilkanBuku() {
        console.log("\n📚 Daftar Buku:");
        if (this.buku.length === 0) {
            console.log("Belum ada buku yang tersedia.");
            return;
        }
        this.buku.forEach((buku, index) => {
            console.log(`${index + 1}. ${buku.judul} oleh ${buku.penulis} - Rp${buku.harga}`);
        });
        console.log(""); // Spasi tambahan untuk tampilan
    },

    //* READ: Mencari buku berdasarkan judul
    cariBuku() {
        const judul = readline.question("Masukkan judul buku yang dicari: ");
        const bukuDitemukan = this.buku.find(buku => buku.judul.toLowerCase() === judul.toLowerCase());
        
        if (bukuDitemukan) {
            console.log(`\n📖 Detail Buku: ${bukuDitemukan.judul} oleh ${bukuDitemukan.penulis} - Rp${bukuDitemukan.harga}\n`);
        } else {
            console.log(`❌ Buku "${judul}" tidak ditemukan.\n`);
        }
    },

    //* UPDATE: Mengupdate informasi buku berdasarkan judul
    updateBuku() {
        const judul = readline.question("Masukkan judul buku yang ingin diupdate: ");
        const index = this.buku.findIndex(buku => buku.judul.toLowerCase() === judul.toLowerCase());

        if (index !== -1) {
            const judulBaru = readline.question("Masukkan judul baru (kosongkan jika tidak diubah): ");
            const penulisBaru = readline.question("Masukkan penulis baru (kosongkan jika tidak diubah): ");
            const hargaBaru = readline.questionInt("Masukkan harga baru (isi 0 jika tidak diubah): ");

            if (judulBaru) this.buku[index].judul = judulBaru;
            if (penulisBaru) this.buku[index].penulis = penulisBaru;
            if (hargaBaru !== 0) this.buku[index].harga = hargaBaru;

            console.log(`✅ Buku "${judul}" berhasil diperbarui.\n`);
        } else {
            console.log(`❌ Buku "${judul}" tidak ditemukan.\n`);
        }
    },

    //* DELETE: Menghapus buku berdasarkan judul
    hapusBuku() {
        const judul = readline.question("Masukkan judul buku yang ingin dihapus: ");
        const index = this.buku.findIndex(buku => buku.judul.toLowerCase() === judul.toLowerCase());

        if (index !== -1) {
            this.buku.splice(index, 1);
            console.log(`🗑️ Buku "${judul}" telah dihapus.\n`);
        } else {
            console.log(`❌ Buku "${judul}" tidak ditemukan.\n`);
        }
    }
};

//* MENU CRUD INTERAKTIF
function mainMenu() {
    while (true) {
        console.log("\n===== 📚 MENU TOKO BUKU =====");
        console.log("1. Tambah Buku");
        console.log("2. Lihat Daftar Buku");
        console.log("3. Cari Buku");
        console.log("4. Update Buku");
        console.log("5. Hapus Buku");
        console.log("6. Keluar");

        let pilihan = readline.questionInt("Pilih menu (1-6): ");

        switch (pilihan) {
            case 1:
                tokoBuku.tambahBuku();
                break;
            case 2:
                tokoBuku.tampilkanBuku();
                break;
            case 3:
                tokoBuku.cariBuku();
                break;
            case 4:
                tokoBuku.updateBuku();
                break;
            case 5:
                tokoBuku.hapusBuku();
                break;
            case 6:
                console.log("Terima kasih telah menggunakan sistem manajemen toko buku! 👋");
                return;
            default:
                console.log("❌ Pilihan tidak valid. Silakan pilih angka antara 1-6.");
        }
    }
}

//* Jalankan Menu
mainMenu();

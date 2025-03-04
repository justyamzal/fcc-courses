const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todos = []; // Menyimpan daftar tugas

// Menampilkan menu utama
function showMenu() {
  console.log("\n=== To-Do List CLI ===");
  console.log("1. Tambah Tugas");
  console.log("2. Lihat Semua Tugas");
  console.log("3. Edit Tugas");
  console.log("4. Hapus Tugas");
  console.log("5. Keluar");
  rl.question("Pilih opsi (1-5): ", handleMenu);
}

// Fungsi untuk menangani input menu
function handleMenu(choice) {
  switch (choice) {
    case "1":
      rl.question("Masukkan nama tugas: ", (task) => {
        todos.push(task);
        console.log(`✅ Tugas '${task}' telah ditambahkan.`);
        showMenu();
      });
      break;

    case "2":
      console.log("\n📋 Daftar Tugas:");
      if (todos.length === 0) console.log("Belum ada tugas.");
      else todos.forEach((task, index) => console.log(`${index + 1}. ${task}`));
      showMenu();
      break;

    case "3":
      rl.question("Masukkan nomor tugas yang ingin diubah: ", (num) => {
        let index = parseInt(num) - 1;
        if (index >= 0 && index < todos.length) {
          rl.question("Masukkan tugas baru: ", (newTask) => {
            todos[index] = newTask;
            console.log(`✅ Tugas nomor ${num} diperbarui.`);
            showMenu();
          });
        } else {
          console.log("❌ Nomor tugas tidak valid.");
          showMenu();
        }
      });
      break;

    case "4":
      rl.question("Masukkan nomor tugas yang ingin dihapus: ", (num) => {
        let index = parseInt(num) - 1;
        if (index >= 0 && index < todos.length) {
          console.log(`🗑️ Tugas '${todos[index]}' telah dihapus.`);
          todos.splice(index, 1);
        } else {
          console.log("❌ Nomor tugas tidak valid.");
        }
        showMenu();
      });
      break;

    case "5":
      console.log("👋 Keluar dari program.");
      rl.close();
      break;

    default:
      console.log("❌ Pilihan tidak valid, coba lagi.");
      showMenu();
      break;
  }
}

// Memulai program
showMenu();

import { index, store, destroy } from "./controller.js";

// biar bisa dipanggil dari tombol HTML
window.hapus = destroy;

// tampil awal
index();

// event tombol tambah
document.getElementById("btnTambah").addEventListener("click", () => {
  const nama = document.getElementById("nama").value;
  const umur = document.getElementById("umur").value;
  const alamat = document.getElementById("alamat").value;
  const email = document.getElementById("email").value;

  if (!nama || !umur || !alamat || !email) {
    alert("Semua field wajib diisi!");
    return;
  }

  // tambah data baru
  store({ nama, umur, alamat, email });

  // reset input
  document.getElementById("nama").value = "";
  document.getElementById("umur").value = "";
  document.getElementById("alamat").value = "";
  document.getElementById("email").value = "";
});
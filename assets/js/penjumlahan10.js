const lanjutanPenjumlahan10 = new Audio(
  "/assets/audio/soal/soal-penjumlahan10.mp3"
);
lanjutanPenjumlahan10.load();
lanjutanPenjumlahan10.play();
lanjutanPenjumlahan10.autoplay = true;
lanjutanPenjumlahan10.play();
function pilihlah() {
  lanjutanPenjumlahan10.play();
}

// BUTTON FOOTER

const kembali = new Audio("../audio/kembali.mp3");
function btnKembali() {
  kembali.play();
  lanjut.pause();
  lanjutanPenjumlahan10.pause();
  setTimeout(function () {
    location.href = "/assets/content/penjumlahan.html";
  }, 2000);
}

const lanjut = new Audio("../audio/lanjut.mp3");
function btnLanjut() {
  lanjut.play();
  kembali.pause();
  lanjutanPenjumlahan10.pause();
  setTimeout(function Penjumblahan() {
    location.href = "/assets/content/soal/soal-1-penjumlahan10.html";
  }, 2000);
}

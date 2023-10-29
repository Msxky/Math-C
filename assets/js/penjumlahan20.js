const lanjutanPenjumlahan20 = new Audio(
  "/assets/audio/soal/soal-penjumlahan20.mp3"
);
lanjutanPenjumlahan20.load();
lanjutanPenjumlahan20.play();
lanjutanPenjumlahan20.autoplay = true;
lanjutanPenjumlahan20.play();
function pilihlah() {
  lanjutanPenjumlahan20.play();
}

// BUTTON FOOTER

const kembali = new Audio("../audio/kembali.mp3");
function btnKembali() {
  kembali.play();
  lanjut.pause();
  lanjutanPenjumlahan20.pause();
  setTimeout(function () {
    location.href = "/assets/content/penjumlahan.html";
  }, 2000);
}

const lanjut = new Audio("../audio/lanjut.mp3");
function btnLanjut() {
  lanjut.play();
  kembali.pause();
  lanjutanPenjumlahan20.pause();
  setTimeout(function Penjumblahan() {
    location.href = "/assets/content/soal/soal-1-penjumlahan20.html";
  }, 2000);
}

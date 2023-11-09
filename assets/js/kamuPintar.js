const KamuPintarA = new Audio("/assets/audio/kamu-pintar.mp3");

KamuPintarA.play();
function KamuPintar() {
  KamuPintarA.play();
}

// BUTTON FOOTER
const kembali = new Audio("/assets/audio/kembali.mp3");
function btnKembali() {
  kembali.play();
  lanjut.pause();
  setTimeout(function () {
    location.href = "/assets/content/soal/soal-3-penjumlahan20.html";
  }, 2000);
}

const lanjut = new Audio("/assets/audio/lanjut.mp3");
function btnLanjut() {
  lanjut.play();
  kembali.pause();
  setTimeout(function Penjumblahan() {
    location.href = "/assets/content/pilih-lah.html";
  }, 2000);
}

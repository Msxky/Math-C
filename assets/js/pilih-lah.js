const pilihlahAntaraBerikut = new Audio(
  "/assets/audio/pilihlah-antara-berikut.mp3"
);
pilihlahAntaraBerikut.load();
window.onload() 
pilihlahAntaraBerikut.autoplay = true;
pilihlahAntaraBerikut.play();
function pilihlah() {
  audioPenjumlahan.pause();
  pilihlahAntaraBerikut.play();
}

const audioPenjumlahan = new Audio("../audio/penjumlahan.mp3");
function Penjumlahan() {
  audioPenjumlahan.play();
  audioPengurangan.pause();
  pilihlahAntaraBerikut.pause();
  setTimeout(function Penjumblahan() {
    location.href = "../content/penjumlahan.html";
  }, 2000);
}
const audioPengurangan = new Audio("../audio/pengurangan.mp3");
function Pengurangan() {
  audioPengurangan.play();
  audioPenjumlahan.pause();
  pilihlahAntaraBerikut.pause();
  setTimeout(function Penjumblahan() {
    location.href = "../content/pengurangan.html";
  }, 2000);
}

const kembali = new Audio("../audio/kembali.mp3");
function btnKembali() {
  kembali.play();
  lanjut.pause();
  pilihlahAntaraBerikut.pause();
  setTimeout(function () {
    location.href = "/index.html";
  }, 2000);
}

const lanjut = new Audio("../audio/lanjut.mp3");
function btnLanjut() {
  lanjut.play();
  kembali.pause();
  pilihlahAntaraBerikut.pause();
  setTimeout(function Penjumblahan() {
    location.href = "#";
  }, 2000);
}

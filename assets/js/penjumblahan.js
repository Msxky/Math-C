const pilihlahPenjumlahan = new Audio("/assets/audio/pilihlah-penjumlahan.mp3");
pilihlahPenjumlahan.load();
pilihlahPenjumlahan.autoplay = true;
pilihlahPenjumlahan.play();
function pilihlah() {
  pilihlahPenjumlahan.play();
}

const penjumlahan10audio = new Audio("/assets/audio/penjumlahan-10.mp3");
function penjumlahan10() {
  penjumlahan10audio.play();
  pilihlahPenjumlahan.pause();
  penjumlahan20audio.pause();
  setTimeout(function () {
    location.href = "/assets/content/penjumlahan10.html";
  }, 2300);
}

const penjumlahan20audio = new Audio("/assets/audio/penjumlahan-20.mp3");
function penjumlahan20() {
  penjumlahan20audio.play();
  pilihlahPenjumlahan.pause();
  penjumlahan10audio.pause();
  setTimeout(function () {
    location.href = "/assets/content/penjumlahan20.html";
  }, 2500);
}

const kembali = new Audio("../audio/kembali.mp3");
function btnKembali() {
  kembali.play();
  lanjut.pause();
  pilihlahPenjumlahan.pause();
  setTimeout(function () {
    location.href = "/assets/content/pilih-lah.html";
  }, 2000);
}

const lanjut = new Audio("../audio/lanjut.mp3");
function btnLanjut() {
  lanjut.play();
  kembali.pause();
  pilihlahPenjumlahan.pause();
  setTimeout(function Penjumblahan() {
    location.href = "#";
  }, 2000);
}

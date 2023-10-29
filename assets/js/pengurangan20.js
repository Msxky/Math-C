const lanjutanPengurangan20 = new Audio(
  "/assets/audio/soal/soal-pengurangan20.mp3"
);
lanjutanPengurangan20.load();
lanjutanPengurangan20.play();
lanjutanPengurangan20.autoplay = true;
lanjutanPengurangan20.play();
function pilihlah() {
  lanjutanPengurangan20.play();
}

// BUTTON FOOTER

const kembali = new Audio("../audio/kembali.mp3");
function btnKembali() {
  kembali.play();
  lanjut.pause();
  lanjutanPengurangan20.pause();
  setTimeout(function () {
    location.href = "/assets/content/pengurangan.html";
  }, 2000);
}

const lanjut = new Audio("../audio/lanjut.mp3");
function btnLanjut() {
  lanjut.play();
  kembali.pause();
  lanjutanPengurangan20.pause();
  setTimeout(function Penjumblahan() {
    location.href = "/assets/content/soal/soal-1-pengurangan20.html";
  }, 2000);
}

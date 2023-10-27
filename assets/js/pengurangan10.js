const lanjutanPengurangan10 = new Audio('/assets/audio/soal/soal-pengurangan10.mp3')
lanjutanPengurangan10.play()
function pilihlah(){
  lanjutanPengurangan10.play()
}

// BUTTON FOOTER

const kembali = new Audio("../audio/kembali.mp3");
function btnKembali() {
  kembali.play();
  lanjut.pause();
  lanjutanPengurangan10.pause()
  setTimeout(function() {
    location.href="/assets/content/pengurangan.html";
  }, 2000);
}


const lanjut = new Audio("../audio/lanjut.mp3");
function btnLanjut() {
  lanjut.play();
  kembali.pause();
  lanjutanPengurangan10.pause()
setTimeout(function Penjumblahan() {
    location.href="/assets/content/soal/soal-1-pengurangan10.html";
  }, 2000);
}
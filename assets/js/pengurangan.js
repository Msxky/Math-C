const pilihlahPengurangan = new Audio('/assets/audio/pilihlah-pengurangan.mp3')
pilihlahPengurangan.play()
function pilihlah(){
  pilihlahPengurangan.play()
}

const pengurangan10audio = new Audio('/assets/audio/pengurangan-10.mp3')
function pengurangan10(){
  pengurangan10audio.play()
  pengurangan20audio.pause()
  pilihlahPengurangan.pause()
  setTimeout(function() {
    location.href="/assets/content/pengurangan10.html";
  }, 2000);
}

const pengurangan20audio = new Audio('/assets/audio/pengurangan-20.mp3')
function pengurangan20(){
  pengurangan20audio.play()
  pengurangan10audio.pause()
  pilihlahPengurangan.pause()
  setTimeout(function() {
    location.href="/assets/content/pengurangan20.html";
  }, 2300);
}

const kembali = new Audio("../audio/kembali.mp3");
function btnKembali() {
  kembali.play();
  lanjut.pause();
  pilihlahPengurangan.pause()
  setTimeout(function() {
    location.href="/assets/content/pilih-lah.html";
  }, 2000);
}


const lanjut = new Audio("../audio/lanjut.mp3");
function btnLanjut() {
  lanjut.play();
  kembali.pause();
  pilihlahPengurangan.pause()
setTimeout(function Penjumblahan() {
    location.href="#";
  }, 2000);
}
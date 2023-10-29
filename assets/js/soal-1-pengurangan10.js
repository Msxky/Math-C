const titleH = document.getElementById('h1Soal')
const soal = document.getElementById('soal')
const playSoalAudio = new Audio('/assets/audio/soal/pengurangan10/soalPertama.mp3')
const playCaraA = new Audio('/assets/audio/soal/pengurangan10/9-5.mp3')
const option1A = new Audio('/assets/audio/soal/number/6.mp3');
const option2A = new Audio('/assets/audio/soal/number/2.mp3');
const option3A = new Audio('/assets/audio/soal/number/4.mp3');

// OPTIONS
const benar = new Audio('/assets/audio/soal/options/benar.mp3');
const salah = new Audio('/assets/audio/soal/options/salah.mp3');
const hore = new Audio('/assets/audio/soal/hore.mp3');

playSoalAudio.play()
function playSoal(){
  playSoalAudio.play()
}

// play cara
function playCara(){
  playCaraA.play()
  playSoalAudio.pause()
}

// OPTIONS 1
function option1(){
  option1A.play()
  option2A.pause()
  option3A.pause()
  playSoalAudio.pause()
  playCaraA.pause()
  soal.textContent="9 - 5 = 6"
  setTimeout(function() {
    titleH.textContent="Loading.."
    titleH.style.scale=".8"
  }, 1000);
  setTimeout(function() {
    salah.play()
  }, 2000);
  setTimeout(function() {
    location.reload()
  }, 5000);
}
// OPTIONS 2
function option2(){
  option1A.pause()
  option2A.play()
  option3A.pause()
playSoalAudio.pause()
playCaraA.pause()
soal.textContent="9 - 5 = 2"
setTimeout(function() {
  titleH.textContent="Loading.."
  titleH.style.scale=".8"
}, 1000);
setTimeout(function() {
  salah.play()
}, 2000);
setTimeout(function() {
  location.reload()
  }, 5000);
}
// OPTIONS 3
function option3(){
  option1A.pause()
  option2A.pause()
  option3A.play()
  playSoalAudio.pause()
  playCaraA.pause()
  soal.textContent="9 - 5 = 4"
  setTimeout(function() {
    titleH.textContent="Loading.."
  titleH.style.scale=".8"
}, 1000);
  setTimeout(function() {
    benar.play()
  }, 2000);
  setTimeout(function() {
    hore.play()
  }, 3000);
setTimeout(function() {
  location.href="/assets/content/soal/soal-2-pengurangan10.html"
  }, 8000);
}


// BUTTON FOOTER
const kembali = new Audio("/assets/audio/kembali.mp3");
function btnKembali() {
  kembali.play();
  lanjut.pause();
  playSoalAudio.pause()
  option1A.pause()
  option2A.pause()
  option3A.pause()
  playCaraA.pause()
  setTimeout(function() {
    location.href="/assets/content/pengurangan10.html";
  }, 2000);
}


const lanjut = new Audio("/assets/audio/otomatis-lanjut.mp3");
function btnLanjut() {
  lanjut.play();
  kembali.pause();
  playSoalAudio.pause()
  option1A.pause()
  option2A.pause()
  option3A.pause()
  playCaraA.pause()
setTimeout(function Penjumblahan() {
    location.href="#";
  }, 2000);
}
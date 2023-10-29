// ganti cover
const image = document.getElementById('img')
const btn = document.getElementById('gantiCover')
btn.addEventListener("click", () => {
  image.src="/assets/img/cover-1.png"
}) 

const img2 = document.getElementById('img')
const btn2 = document.getElementById('gantiCover2')
btn2.addEventListener("click", () => {
  img.src="/assets/img/cover-2.png"
}) 
// ganti cover

let coverBtn = document.getElementById("cover");
const cover = new Audio("assets/audio/mulai.mp3");
function Cover() {
  cover.play();
  audio. pause();
  coverBtn.textContent = "loading..";
  setTimeout(function () {
    location.href = "/assets/content/pilih-lah.html";
  }, 2000);
}

const audio = new Audio("assets/audio/selamat-datang.mp3")
function coverClick() {
  audio.play();
  cover.pause();
}

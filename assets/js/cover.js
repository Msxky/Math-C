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

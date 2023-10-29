let coverBtn = document.getElementById("cover");
const cover = new Audio("assets/audio/mulai.mp3");
function Cover() {
  cover.play();
  coverBtn.textContent = "loading..";
  setTimeout(function () {
    location.href = "/assets/content/pilih-lah.html";
  }, 2000);
}

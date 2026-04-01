const audio = document.getElementById("audio");
const btn = document.getElementById("playBtn");
const progress = document.getElementById("progress");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    btn.innerText = "⏸";
  } else {
    audio.pause();
    btn.innerText = "▶";
  }
}

audio.ontimeupdate = () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
};

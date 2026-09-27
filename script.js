const burgerToggle = document.getElementById('burger-toggle');
const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerToggle.checked = false;
  });
});

const video = document.getElementById('my-video');
const playBtn = document.getElementById('play-pause');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const timeLabel = document.getElementById('time-label');

function formatTime(sec) {
  if (isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playBtn.textContent = '⏸';
  } else {
    video.pause();
    playBtn.textContent = '▶';
  }
});

video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100 || 0;
  progress.value = percent;
  timeLabel.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
});

progress.addEventListener('input', () => {
  video.currentTime = (progress.value / 100) * video.duration;
});

volume.addEventListener('input', () => {
  video.volume = volume.value;
});

video.addEventListener('ended', () => {
  playBtn.textContent = '▶';
});

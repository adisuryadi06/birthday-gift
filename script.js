document.getElementById('giftBtn').addEventListener('click', (e) => {
  const surprise = document.getElementById('surprise');
  const music = document.getElementById('bgMusic');

  surprise.classList.remove('hidden');
  music.play().catch(() => {});
  // Letusan terus setiap 2 detik
setInterval(() => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight / 2;
  createFirework(x, y);
}, 2000);


  // Kembang api meletus di posisi mouse klik
  const x = e.clientX;
  const y = e.clientY;
  createFirework(x, y);

  function createHearts() {
  const heartsContainer = document.getElementById("hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

});

document.getElementById('resetBtn').addEventListener('click', () => {
  // Reset tampilan
  document.getElementById('surprise').classList.add('hidden');

  // Hentikan musik
  const music = document.getElementById('bgMusic');
  music.pause();
  music.currentTime = 0;

  // Scroll ke atas
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

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
});

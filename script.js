document.getElementById('giftBtn').addEventListener('click', (e) => {
  const surprise = document.getElementById('surprise');
  const music = document.getElementById('bgMusic');

  surprise.classList.remove('hidden');
  music.play().catch(() => {});

  // Kembang api meletus di posisi mouse klik
  const x = e.clientX;
  const y = e.clientY;
  createFirework(x, y);
});

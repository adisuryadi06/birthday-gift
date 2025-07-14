document.getElementById('giftBtn').addEventListener('click', () => {
  const surprise = document.getElementById('surprise');
  const music = document.getElementById('bgMusic');

  surprise.classList.remove('hidden');
  music.play();
});

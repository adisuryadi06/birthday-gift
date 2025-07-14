document.getElementById('giftBtn').addEventListener('click', () => {
  const surprise = document.getElementById('surprise');
  const music = document.getElementById('bgMusic');

  surprise.classList.remove('hidden');

  // Mainkan musik (dari aksi pengguna, jadi diizinkan browser)
  music.play().catch(e => {
    console.log("Autoplay error: ", e);
  });
});

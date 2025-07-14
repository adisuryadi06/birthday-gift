document.getElementById('giftBtn').addEventListener('click', () => {
  const surprise = document.getElementById('surprise');
  const wifeName = document.getElementById('wifeName');
  
  // Ganti ini dengan nama asli istri Anda
  wifeName.textContent = "Dewi Anjani";

  surprise.classList.remove('hidden');
});

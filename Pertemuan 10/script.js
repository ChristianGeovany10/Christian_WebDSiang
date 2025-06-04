
document.querySelectorAll('.signup-btn, .login-btn').forEach(btn =>
  btn.addEventListener('click', () => alert('Website Dalam Perbaikan'))
);

const teks = ["Horror", "Action", "Romance", "Comedy"];
let i = 0;
setInterval(() => {
  document.querySelector('.kedua-text').textContent = teks[i++ % teks.length];
}, 4000);

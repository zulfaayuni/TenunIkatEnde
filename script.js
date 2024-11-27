function toggleText() {
  const dots = document.getElementById('dots');
  const moreText = document.getElementById('more');
  const btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline'; // Menampilkan titik
    moreText.style.display = 'none'; // Menyembunyikan teks tambahan
    btnText.innerHTML = 'Read more'; // Ubah tombol menjadi Read more
  } else {
    dots.style.display = 'none'; // Menyembunyikan titik
    moreText.style.display = 'inline'; // Menampilkan teks tambahan
    btnText.innerHTML = 'Read less'; // Ubah tombol menjadi Read less
  }
}

//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });

// JavaScript to handle navbar background change on scroll
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar-scroll');
  if (window.scrollY > 50) {
    // Misalnya, setelah 50px scroll
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

//   navbar scrolled
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

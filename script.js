// Ambil elemen yang sering dipakai
const project_button = document.querySelector('.proyek');
const contact_button = document.querySelector('.container-contact');
const foto = document.querySelector('.foto');
const glow = document.querySelector('.glow');
const glow_text = document.querySelector('.glow_2 p');
const glow_mobile = document.querySelector(".mobile");

const btn_project = document.querySelector('#pro');
const btn_contact = document.querySelector('#con');
const btn_home = document.querySelector('#hom');

// Toggle project
btn_project.onclick = () => {
  project_button.classList.toggle('active');
  foto.classList.toggle('active');
};

// Toggle contact
btn_contact.onclick = () => {
  contact_button.classList.toggle('active');
  glow.classList.toggle('active');
  glow_text.classList.toggle('active');
  glow_mobile.classList.toggle('active');
};

// Toggle home
btn_home.onclick = () => {
  if (
    project_button.classList.contains('active') ||
    contact_button.classList.contains('active') ||
     tugasSection.classList.contains('active')
    
  ) {
    project_button.classList.remove('active');
    contact_button.classList.remove('active');
    glow.classList.remove('active');
    glow_text.classList.remove('active');
    glow_mobile.classList.remove('active');
    foto.classList.remove('active');
    tugasSection.classList.remove('active');
  }
};

const btnTugas = document.getElementById('tugas');
const tugasSection = document.querySelector('.tugas');

btnTugas.addEventListener('click', function (e) {
  e.preventDefault();
  tugasSection.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
  let progress = 0;
  const bar = document.querySelector('.progress-bar');
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('mainContent');
  const loadMainCotent = document.querySelector('.fade-in')

  if (!bar) {
    console.error('Progress bar element not found!');
    return;
  }

  let loading = setInterval(() => {
    progress += 5;
    bar.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(loading);

      setTimeout(() => {
        preloader.style.display = "none";
        mainContent.style.display = "block"; // Tampilkan
        setTimeout(() => {
          loadMainCotent.classList.add("show"); // Aktifkan animasi
        }, 50);
      }, 300);
    }
  }, 100);
});

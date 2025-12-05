const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;
let slideInterval; // Variabel untuk menyimpan timer

function showSlide(i) {
  slides.forEach((s, idx) => {
    s.style.opacity = idx === i ? "1" : "0";
  });
}

// Fungsi helper untuk pindah ke slide berikutnya
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

// Fungsi helper untuk pindah ke slide sebelumnya
function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// --- LOGIKA AUTO SLIDER ---

// 1. Fungsi untuk memulai interval otomatis
function startAutoSlide() {
  // Ganti 3000 dengan durasi yang diinginkan (dalam milidetik)
  // 3000ms = 3 detik
  slideInterval = setInterval(nextSlide, 3000);
}

// 2. Fungsi untuk mereset timer saat tombol diklik manual
function resetTimer() {
  clearInterval(slideInterval); // Hentikan timer yang sedang berjalan
  startAutoSlide(); // Mulai timer baru
}

// Event Listener Tombol
nextBtn.onclick = () => {
  nextSlide();
  resetTimer(); // Reset waktu agar tidak bentrok
};

prevBtn.onclick = () => {
  prevSlide();
  resetTimer(); // Reset waktu agar tidak bentrok
};

// Mulai auto slide saat halaman dimuat
startAutoSlide();

// --- AKHIR LOGIKA AUTO SLIDER ---

// scroll navbar (Kode asli Anda)
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-black/40", "backdrop-blur-md");
  } else {
    navbar.classList.remove("bg-black/40", "backdrop-blur-md");
  }
});

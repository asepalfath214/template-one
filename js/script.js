const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;

function showSlide(i) {
  slides.forEach((s, idx) => {
    s.style.opacity = idx === i ? "1" : "0";
  });
}

nextBtn.onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

prevBtn.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

// scroll navbar
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-black/40", "backdrop-blur-md");
  } else {
    navbar.classList.remove("bg-black/40", "backdrop-blur-md");
  }
});

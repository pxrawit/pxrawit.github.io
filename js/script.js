const faders = document.querySelectorAll(".fade");

function showOnScroll() {
  const trigger = window.innerHeight - 100;

  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

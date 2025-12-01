document.addEventListener("DOMContentLoaded", () => {
  const NUM_STARS = 100;
  const container = document.createElement("div");
  container.id = "stars";
  document.body.appendChild(container);

  for (let i = 0; i < NUM_STARS; i++) {
    const star = document.createElement("span");
    let r = Math.random();
    if (r < 0.25) {
        star.textContent = ".";
    } else if (r < 0.5) {
        star.textContent = "`";
    } else if (r < 0.8) {
        star.textContent = "*";
    } else if (r < 0.87) {
        star.textContent = "x";
    } else if (r < 0.94){
        star.textContent = "o";
    } else {
        star.textContent = "\"";
    }
    star.className = "ascii-star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(star);
  }
});
"use strict";

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Keep navigation useful with JavaScript disabled; enhance it with a location cue.
if ("IntersectionObserver" in window) {
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of links) {
          if (link.hash === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        }
      }
    },
    { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((section) => observer.observe(section));
}

const projectTrack = document.getElementById("project-track");
if (projectTrack) {
  const controls = document.querySelector(".project-controls");
  const previous = controls.querySelector(".project-prev");
  const next = controls.querySelector(".project-next");
  controls.hidden = false;
  const updateControls = () => {
    previous.disabled = projectTrack.scrollLeft <= 2;
    next.disabled =
      projectTrack.scrollLeft >=
      projectTrack.scrollWidth - projectTrack.clientWidth - 2;
  };
  const move = (direction) => {
    const cards = projectTrack.querySelectorAll(".project-card");
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    const position = Math.round(projectTrack.scrollLeft / step) + direction;
    projectTrack.scrollTo({
      left: position * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  projectTrack.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", updateControls);
  projectTrack.addEventListener("keydown", (event) => {
    if (event.target !== projectTrack) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowRight" ? 1 : -1);
    }
  });
  updateControls();
}

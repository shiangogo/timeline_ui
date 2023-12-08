console.log("Hello world!");
const nodes = document.querySelectorAll(".node");
const timeline = document.querySelector(".timeline");
const infoFrame = document.querySelector(".info-frame");

timeline.addEventListener("click", (e) => {
  let el = e.target;
  while (el && !el.classList.contains("node")) {
    el = el.parentElement;
  }
  if (el.classList.contains("node")) {
    timeline.style = "transform: translateX(-16em)";
    infoFrame.classList.remove("hidden");
    infoFrame.classList.add("info-frame--active");
  }
});

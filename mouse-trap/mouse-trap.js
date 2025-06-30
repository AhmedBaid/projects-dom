export function createCircle() {
  document.addEventListener("click", (event) => {
    let circle = document.createElement("div");
    circle.className = "circle";
    circle.style.background = "white";
    circle.style.top = `${event.clientY - 25}px`;
    circle.style.left = `${event.clientX - 25}px`;
    document.body.appendChild(circle);
  });
}
export function moveCircle() {
  document.addEventListener("mousemove", (e) => {
    let circles = document.querySelectorAll(".circle");
    let box = document.querySelector(".box");
    if (circles.length == 0) return;
    let lastcircle = circles[circles.length - 1];
    lastcircle.style.top = `${e.clientY - 25}px`;
    lastcircle.style.left = `${e.clientX - 25}px`;
    let position = box.getBoundingClientRect();
  });
}
export function setBox() {
  let box = document.createElement("div");
  box.className = "box";
  document.body.appendChild(box);
}

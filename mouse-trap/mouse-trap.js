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
    if (circles.length > 0) {
      const last = circles[circles.length - 1];
      let X = e.clientX;
      let Y = e.clientY;
      last.style.top = `${Y - 25}px`;
      last.style.left = `${X - 25}px`;
    }
  });
}
export function setBox() {
  let box = document.createElement("div");

  box.className = "box";
  document.body.append(box);
  addEventListener("mousemove", (e) => {
    let circle = document.querySelectorAll(".circle");
    let posbox = box.getBoundingClientRect();
    if (circle.length > 0) {
      let last = circle[circle.length - 1];
      if (
        e.clientX > posbox.left + 25 &&
        e.clientX < posbox.right - 25 &&
        e.clientY > posbox.top + 25 &&
        e.clientY < posbox.bottom - 25
      ) {
        last.style.background = "var(--purple)";
      }
      if (last.style.background == "var(--purple)") {
        if (e.clientX < posbox.left + 25) {
          last.style.left = posbox.left + "px";
        }
        if (e.clientX > posbox.right - 25) {
          last.style.left = posbox.right - 50 + "px";
        }
        if (e.clientY < posbox.top + 25) {
          last.style.top = posbox.top + "px";
        }
        if (e.clientY > posbox.bottom - 25) {
          last.style.top = posbox.bottom - 50 + "px";
        }
      }
    }
  });
}
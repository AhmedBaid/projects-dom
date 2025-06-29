export const compose = () => {
  let body = document.body;
  document.addEventListener("keydown", (e) => {
    if (e.key >= "a" && e.key <= "z") {
      const div = document.createElement("div");
      div.className = "note";
      div.textContent = e.key;

      const color = e.key.charCodeAt(0) * 10;
      div.style.background = `hsl(${color}, 70%, 70%)`;

      body.appendChild(div);
    }
    if (e.key === "Backspace") {
      const notes = document.querySelectorAll(".note");
      if (notes.length > 0) {
        notes[notes.length - 1].remove();
      }
    }

    if (e.key === "Escape") {
      const notes = document.querySelectorAll(".note");
      notes.forEach((div) => div.remove());
    }
  });
};

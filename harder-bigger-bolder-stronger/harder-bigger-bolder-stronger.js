export const generateLetters = () => {
  let body = document.querySelector("body");
  let font = 11;
  for (let i = 1; i <= 120; i++) {
    let elem = document.createElement("div");
    body.appendChild(elem);
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    elem.textContent = randomLetter;
    elem.style.fontSize = font + "px";
    font++;
    if (i <= 40) {
      elem.style.fontWeight = "300";
    } else if (i > 40 && i <= 80) {
      elem.style.fontWeight = "400";
    } else {
      elem.style.fontWeight = "600";
    }
  }
};

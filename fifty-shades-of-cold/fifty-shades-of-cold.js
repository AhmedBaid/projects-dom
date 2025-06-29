import { colors } from "./fifty-shades-of-cold.data.js";

export const generateClasses = () => {
  const head = document.querySelector("head");
  const style = document.createElement("style");

  let styles = "";
  colors.forEach((color) => {
    styles += `.${color} {\n  background: ${color};\n}\n`;
  });

  style.textContent = styles;
  head.appendChild(style);
};
export const generateColdShades = () => {
  let body = document.querySelector("body");
  colors.forEach((color) => {
    let div = document.createElement("div");
    div.setAttribute("class", color);
    div.textContent = color;
    body.appendChild(div);
  });
};
export const choseShade = (arg) => {
  let alldiv = document.querySelectorAll("div");
  alldiv.forEach((div) => {
    div.className = arg;
  });
};

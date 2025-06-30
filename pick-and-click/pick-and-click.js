export const pick = () => {
  let hsl = document.createElement("div");
  let hueee = document.createElement("div");
  let luminosityy = document.createElement("div");
  hsl.className = "hsl";
  hueee.classList.add("hue");
  hueee.classList.add("text");
  luminosityy.classList.add("luminosity");
  luminosityy.classList.add("text");
  let body = document.body;
  body.appendChild(hsl);
  body.appendChild(hueee);
  body.appendChild(luminosityy);
  let width = document.body.offsetWidth;
  let height = document.body.offsetHeight;

  let axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
  let axisY = document.createElementNS("http://www.w3.org/2000/svg", "line");
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  body.appendChild(svg);
  svg.appendChild(axisX);
  svg.appendChild(axisY);
  document.addEventListener("mousemove", (e) => {
    let X = e.clientX;
    let Y = e.clientY;
    let hue = Math.round((e.clientX * 360) / width);
    let luminosity = Math.round((e.clientY * 100) / height);
    let combine = `hsl(${hue},50%,${luminosity}%)`;
    body.style.background = combine;
    hsl.textContent = combine;
    hueee.textContent = hue;
    luminosityy.textContent = luminosity;

    axisX.setAttribute("x1", "0");
    axisX.setAttribute("x2", width);
    axisX.setAttribute("y1", Y);
    axisX.setAttribute("y2", Y);

    axisY.setAttribute("x1", X);
    axisY.setAttribute("x2", X);
    axisY.setAttribute("y1", "0");
    axisY.setAttribute("y2", height);
  });

  document.addEventListener("click", () => {
    let hslvalue = hsl.textContent;
    navigator.clipboard.writeText(hslvalue);
  });
};

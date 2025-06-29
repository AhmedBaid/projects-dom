export const build = (nb) => {
  const body = document.querySelector("body");
  let index = 1;
  const interval = setInterval(() => {
    if (index <= nb) {
      let newbrick = document.createElement("div");
      newbrick.id = `brick-${index}`;
      if ((index - 1) % 3 == 1) {
        newbrick.dataset.foundation = "true";
      }
      body.appendChild(newbrick);
      newbrick.innerHTML = index;
      index++;
    } else {
      clearInterval(interval);
    }
  }, 100);
  return interval;
};

export const repair = (...ids) => {
  ids.forEach((id) => {
    let brick = document.getElementById(`${id}`);
    if (brick.dataset.foundation == "true") {
      brick.dataset.repaired = "in progress";
    } else {
      brick.dataset.repaired = "true";
    }
  });
};

export const destroy = () => {
  let lastdiv = document.querySelectorAll("div");
  if (lastdiv.length == 0) return;
  lastdiv[0].remove();
};

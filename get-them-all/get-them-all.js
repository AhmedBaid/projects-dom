export const getArchitects = () => {
  let arr = [];
  let architects = document.querySelectorAll("a");
  let nonArchitects = document.querySelectorAll(":not(a)");
  arr.push(architects);
  arr.push(nonArchitects);
  return arr;
};
export const getClassical = () => {
  let arr = [];
  let architects = document.querySelectorAll(".classical");
  let Nonarchitects = document.querySelectorAll(":not(.classical)");
  arr.push(architects);
  arr.push(Nonarchitects);
  return arr;
};
export const getActive = () => {
  let arr = [];
  let architects = document.querySelectorAll(".classical.active");
  let Nonarchitects = document.querySelectorAll(":not(.classical.active)");
  arr.push(architects);
  arr.push(Nonarchitects);
  return arr;
};
export const getBonannoPisano = () => {
  let arr = [];
  let architects = document.getElementById("BonannoPisano");
  let Nonarchitects = document.querySelectorAll(".classical.active");
  arr.push(architects, Nonarchitects);
  arr.push(Nonarchitects);
  return arr;
};

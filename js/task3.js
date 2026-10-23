const box = document.getElementById("box");
const colors = ["#bfdbfe", "#bbf7d0", "#fde68a", "#fbcfe8", "#e2e8f0"];
let c = 0, size = 16;
document.getElementById("bg").addEventListener("click", () => {
  c = (c + 1) % colors.length;
  box.style.backgroundColor = colors[c];
});
document.getElementById("fs").addEventListener("click", () => {
  size = size >= 36 ? 16 : size + 4;
  box.style.fontSize = size + "px";
});
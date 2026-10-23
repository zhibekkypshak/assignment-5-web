const box = document.getElementById("hover");
const original = "#ffffff";
const label = box.querySelector("span");
box.addEventListener("mouseover", () => { box.style.backgroundColor = "#fecaca"; label.textContent = "Contact detected!"; });
box.addEventListener("mouseout", () => { box.style.backgroundColor = original; label.textContent = "Scanner idle"; });
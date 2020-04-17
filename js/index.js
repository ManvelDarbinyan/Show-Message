const form = document.querySelector("form");
const wrong = document.querySelector(".wrong");
wrong.style.visibility = "hidden";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("#input");
  const text = document.querySelector("p");

  if (input.value === "") {
    wrong.style.visibility = "visible";
    setTimeout(() => {
      wrong.style.visibility = "hidden";
    }, 2000);
  } else {
    text.textContent = input.value;
    input.value = "";
    setTimeout(() => {
      text.textContent = "";
    }, 3000);
  }
});

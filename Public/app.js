let btn = document.querySelector("#del");

btn.addEventListener("click", (e) => {
  const dec = prompt("Do you really want to delete this. Type Y/N");
  if (dec == "N") {
    e.preventDefault();
  } else if (dec == "Y") {
  } else {
    alert("Incorrect Input");
    e.preventDefault();
  }
});

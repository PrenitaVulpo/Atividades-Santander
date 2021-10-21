const modifyDOM = () => {
  const paragraph = document.querySelector("p");

  console.log(paragraph);

  const santander = document.createElement("span");
  santander.innerText = "SANTANDER";
  santander.classList.add("santander");
  const coders = document.createElement("span");
  coders.innerText = "CODERS #809";
  const rocks = document.createElement("span");
  rocks.innerText = " ROCKS";
  rocks.classList.add("rocks");

  paragraph.append(santander, coders, rocks);
};

modifyDOM();

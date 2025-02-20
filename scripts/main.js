const myImage = document.querySelector("#cornell-image");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Cornell.png") {
    myImage.setAttribute("src", "images/surprise.png");
  }
  setTimeout(() => {
    myImage.setAttribute("src", "images/Cornell.png");
  }, 500);
});

const topClass = document.querySelectorAll(".top");
const spanClass = document.querySelectorAll(".bottom-left");

topClass.forEach((name) => {
  name.addEventListener("click", function handleClick(e) {
    const topParent = e.target.parentElement;
    if (
      !topParent.classList.contains("active") ||
      !spanClass.classList.contains("bottom-left")
    ) {
      topParent.classList.add("active");
      topClass.forEach((name) => {
        if (name.children[0].src !== e.target.src) {
          name.classList.remove("active");
        }
      });
    }
  });
});

window.addEventListener("scroll", scrollnav);

function scrollnav() {
  var y = window.scrollY;
  if (y > 1) {
    document.getElementById("header").style.backgroundColor =
      " rgba(20, 2, 0, 0.8)";
    document.getElementById("header").style.transition = "all 0.5s";
  } else {
    document.getElementById("header").style.backgroundColor = "unset";
  }
}

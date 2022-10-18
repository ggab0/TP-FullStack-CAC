window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
})
    // var header = document.querySelector("header");
    //  var zona1 = document.querySelector("section")
    // header.classList.toggle("abajo", zona1.scrollTop > 0);
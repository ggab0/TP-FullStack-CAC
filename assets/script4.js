function myFunction() {
    const element = document.getElementById("zona1");
    let x = element.scrollLeft;
    let y = element.scrollTop;
    document.getElementById ("demo").innerHTML = "Horizontally: " + x.toFixed() + "<br>Vertically: " + y.toFixed();
  }
    // var header = document.querySelector("header");
    //  var zona1 = document.querySelector("section")
    // header.classList.toggle("abajo", zona1.scrollTop > 0);
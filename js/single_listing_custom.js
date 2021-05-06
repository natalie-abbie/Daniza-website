function readMoreone() { //finds function
  var dots = document.getElementById("dots2"); //returns element that has the ID attribute with value, searches for dots
  var moreText = document.getElementById("more2"); // '' '' searches for more
  var btnText = document.getElementById("myBtn2"); // '' '' searches for myBtn

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //button says read more to show more text
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //button says read less to show less text
      moreText.style.display = "inline";
  }
}

function readMoretwo() { //finds function
  var dots = document.getElementById("dots3"); //returns element that has the ID attribute with value
  var moreText = document.getElementById("more3"); // '' '' searches for more2
  var btnText = document.getElementById("myBtn3"); // '' '' searches for myBtn2

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //button says read more to show more text
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //button says read less to show less text
      moreText.style.display = "inline";
  }
}

function readMorethree() { //finds function
  var dots = document.getElementById("dots4"); //returns element that has the ID attribute with value
  var moreText = document.getElementById("more4"); // '' '' searches for more2
  var btnText = document.getElementById("myBtn4"); // '' '' searches for myBtn2

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; //button says read more to show more text
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; //button says read less to show less text
      moreText.style.display = "inline";
  }
}
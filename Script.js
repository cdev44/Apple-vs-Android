// Controlling CSS & Attributes from JS

// document.getElementById("some-id").style; // Accesses the CSS rule for "some-id" element

//document.getElementById("android").style.border = "2px solid black";

// document.getElementById("some-image").src = "images/newpic.jpg" // Changes an image

// document.getElementById("some-a-tag").href = "http://newlink.com"; // Changes the hyperlink

// Changin an Image vs Adding a New Image
// To add an image where there wasn't one before you need a container for the image in HTML
// Containers are empty <p>, <h1>, <div> elements.
// For E.g. in html: <div id="img-container">   </div>

// document.getElementById("img-container").innerHTML = "<img src='images/pic.jpg' >"

// Apple vs Android

document.getElementById("android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  // change the 'Android vs Apple' image to the Android Logo in th eimages folder
  document.getElementById("logo").src = "images/Android-Logo.jpg";
  document.getElementById("link").innerHTML = "Android Home";
  document.getElementById("link").style.background = "#a4c93b";
  document.getElementById("link").href = "http://www.android.com";
  document.getElementById("the-html").style.background = "#a4c93b";
  document.getElementById("the-body").style.fontFamily = "'Roboto', sans-serif";
  document.getElementById("android").classList.add("redborder");
  document.getElementById("apple").classList.remove("redborder");
}

document.getElementById("apple").addEventListener("click", changeToApple);

function changeToApple() {
  document.getElementById("logo").src = "images/Apple-Logo.jpg";
  document.getElementById("link").innerHTML = "Apple Home";
  document.getElementById("link").style.background = "#b6bcca";
  document.getElementById("link").href = "http://www.apple.com";
  document.getElementById("the-html").style.background = "b6bcca";
  document.getElementById("the-body").style.fontFamily =
    "'Brygada 1918', sans-serif";
  document.getElementById("apple").classList.add("redborder");
  document.getElementById("android").classList.remove("redborder");
}

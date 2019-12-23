var imagelabel = document.getElementsByClassName("custom-file-label");
var imageinput = document.getElementById("inputImage");

imageinput.onchange = function() {
  if (imageinput.files[0]) {
    imagelabel.innerHTML = "qqqq";
    console.log(imagelabel);
    console.log(imageinput.files[0].name);
  }
};

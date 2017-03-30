// Insert modal into a variable for ease of use
var modal = document.getElementById('productModal');

/*
* Put the image inside a variable.
* When image is clicked, the modal opens.
* Insert image inside the modal and use the "alt"
* text as the caption.
*/
var img = document.getElementById('mainProduct');
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
img.onclick = function(){
  // When image is clicked do the following
    modal.style.display = "block";
  //use the same src as the image
    modalImg.src = this.src;
  // use he alt text as the caption for the image
    captionText.innerHTML = this.alt;
}

/*
* Place the <span> element inside a variable,
* that closes the modal
*/
var close = document.getElementsByClassName("close")[0];

/*
* When the user clicks on <span> (x), hide the modal
* using display none.
*/
close.onclick = function() {
    modal.style.display = "none";
}

/* --------------------------------- *
 * Author: Calum James Flanagan      *
 * Institution: Edge Hill University *
 * --------------------------------- */



/*
* The following controls the button colouring when the user
* chooses a flavour, type of packaging and the product size.
*
* onclick functions are used to change the certain elements
* of the interface, when certain buttons are clicked.
*
* The element is targeted using 'getElementById' which finds the corresponding id
*/


/*
* Flavour buttons
* Here the colour of the buttons are being changed to show the
* flavour that the user has selected.
* For example, in the first function (for option1), when the
* user clicks option1, the option1 button changes to red.
* If any other buttons were selected at the time, they return
* to transparent.
*/

document.getElementById('option1').style.backgroundColor='#d81c25';
document.getElementById('option1').style.color='#fff';
document.getElementById('option1').onclick=function() {
  document.getElementById('option1').style.backgroundColor='#d81c25';
  document.getElementById('option1').style.color='#fff';
  document.getElementById('option2').style.backgroundColor='';
  document.getElementById('option2').style.color='#000';
  document.getElementById('option3').style.backgroundColor='';
  document.getElementById('option3').style.color='#000';
  document.getElementById('option4').style.backgroundColor='';
  document.getElementById('option4').style.color='#000';
  document.getElementById('option5').style.backgroundColor='';
  document.getElementById('option5').style.color='#000';
}

document.getElementById('option2').onclick=function() {
  document.getElementById('option1').style.backgroundColor='';
  document.getElementById('option1').style.color='#000';
  document.getElementById('option2').style.backgroundColor='#d81c25';
  document.getElementById('option2').style.color='#fff';
  document.getElementById('option3').style.backgroundColor='';
  document.getElementById('option3').style.color='#000';
  document.getElementById('option4').style.backgroundColor='';
  document.getElementById('option4').style.color='#000';
  document.getElementById('option5').style.backgroundColor='';
  document.getElementById('option5').style.color='#000';
}

document.getElementById('option3').onclick=function() {
  document.getElementById('option1').style.backgroundColor='';
  document.getElementById('option1').style.color='#000';
  document.getElementById('option2').style.backgroundColor='';
  document.getElementById('option2').style.color='#000';
  document.getElementById('option3').style.backgroundColor='#d81c25';
  document.getElementById('option3').style.color='#fff';
  document.getElementById('option4').style.backgroundColor='';
  document.getElementById('option4').style.color='#000';
  document.getElementById('option5').style.backgroundColor='';
  document.getElementById('option5').style.color='#000';
}

document.getElementById('option4').onclick=function() {
  document.getElementById('option1').style.backgroundColor='';
  document.getElementById('option1').style.color='#000';
  document.getElementById('option2').style.backgroundColor='';
  document.getElementById('option2').style.color='#000';
  document.getElementById('option3').style.backgroundColor='';
  document.getElementById('option3').style.color='#000';
  document.getElementById('option4').style.backgroundColor='#d81c25';
  document.getElementById('option4').style.color='#fff';
  document.getElementById('option5').style.backgroundColor='';
  document.getElementById('option5').style.color='#000';
}

document.getElementById('option5').onclick=function() {
  document.getElementById('option1').style.backgroundColor='';
  document.getElementById('option1').style.color='#000';
  document.getElementById('option2').style.backgroundColor='';
  document.getElementById('option2').style.color='#000';
  document.getElementById('option3').style.backgroundColor='';
  document.getElementById('option3').style.color='#000';
  document.getElementById('option4').style.backgroundColor='';
  document.getElementById('option4').style.color='#000';
  document.getElementById('option5').style.backgroundColor='#d81c25';
  document.getElementById('option5').style.color='#fff';
}


/*
* Packaging button
*/

document.getElementById('packaging1').style.backgroundColor='#d81c25';
document.getElementById('packaging1').style.color='#fff';
document.getElementById('packaging1').onclick=function() {
  document.getElementById('packaging1').style.backgroundColor='#d81c25';
  document.getElementById('packaging1').style.color='#fff';
}


/*
* Size buttons
* The size buttons also control the total price that is displayed.
* When the user selects the larger size bag, the total price is
* updated.
*/

document.getElementById('size1').style.backgroundColor='#d81c25';
document.getElementById('size1').style.color='#fff';
document.getElementById('totalPrice2').style.display='none';
document.getElementById('size1').onclick=function() {
  document.getElementById('size1').style.backgroundColor='#d81c25';
  document.getElementById('size1').style.color='#fff';
  document.getElementById('size2').style.backgroundColor='';
  document.getElementById('size2').style.color='#000';
  document.getElementById('totalPrice1').style.display='';
  document.getElementById('totalPrice2').style.display='none';
}

document.getElementById('size2').onclick=function() {
  document.getElementById('size1').style.backgroundColor='';
  document.getElementById('size1').style.color='#000';
  document.getElementById('size2').style.backgroundColor='#d81c25';
  document.getElementById('size2').style.color='#fff';
  document.getElementById('totalPrice1').style.display='none';
  document.getElementById('totalPrice2').style.display='';
}

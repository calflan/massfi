/**
* Gabe Calabro
* http://stackoverflow.com/users/106403/gabe
* http://jsfiddle.net/7va04ehz/
*/

/*
* Two functions for incrementing and decrementing the
* quantity value.

* These functions are assigned to the corresponding
* buttons in the HTMl, inside the psuedo class 'onclick'.

* When the button is clicked, the corresponding function
* is fired.
*/

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}

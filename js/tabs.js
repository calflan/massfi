/* --------------------------------- *
 * Author: Calum James Flanagan      *
 * Institution: Edge Hill University *
 * --------------------------------- */

/*
* This file controls the information tabs.
*
* The different elements are hidden and displayed each
* time the corresponding buttons are clicked.
*/



/*
* In order to make sure that the first tab is open when
* the user first opens the page, the id of said element
* is targeted and it's style set to display.
*
* The other tabs are set to hidden and stay that way,
* until the corresonding buttons for the tabs are clicked.
*/

document.getElementById('overview').style.display='';
document.getElementById('manual').style.display='none';
document.getElementById('ingredients').style.display='none';
document.getElementById('info').style.display='none';
document.getElementById('reviews').style.display='none';
document.getElementById('returns').style.display='none';
document.getElementById('overviewButton').style.backgroundColor='#d81c25';
document.getElementById('overviewButton').style.color='#fff';


/*
* The following 'onclick' functions are fired when the corresonding
* buttons are clicked.
* The code inside the functions changes the styles of the button
* that has been clicked, to show that it has been clicked. Then
* it changes the styles of the other buttons to show they they
* are diselected.
*
* It also hides the tabs that do not correspond with the button
* that was clicked and displays the tab that does.
*/

document.getElementById('overviewButton').onclick=function(){
  document.getElementById('overviewButton').style.backgroundColor='#d81c25';
  document.getElementById('overviewButton').style.color='#fff';
  document.getElementById('manualButton').style.backgroundColor='transparent';
  document.getElementById('manualButton').style.color='#000';
  document.getElementById('ingredientsButton').style.backgroundColor='transparent';
  document.getElementById('ingredientsButton').style.color='#000';
  document.getElementById('infoButton').style.backgroundColor='transparent';
  document.getElementById('infoButton').style.color='#000';
  document.getElementById('reviewButton').style.backgroundColor='transparent';
  document.getElementById('reviewButton').style.color='#000';
  document.getElementById('returnsButton').style.backgroundColor='transparent';
  document.getElementById('returnsButton').style.color='#000';

  document.getElementById('overview').style.display='';
  document.getElementById('manual').style.display='none';
  document.getElementById('ingredients').style.display='none';
  document.getElementById('info').style.display='none';
  document.getElementById('reviews').style.display='none';
  document.getElementById('returns').style.display='none';
};


document.getElementById('manualButton').onclick=function(){
  document.getElementById('overviewButton').style.backgroundColor='transparent';
  document.getElementById('overviewButton').style.color='#000';
  document.getElementById('manualButton').style.backgroundColor='#d81c25';
  document.getElementById('manualButton').style.color='#fff';
  document.getElementById('ingredientsButton').style.backgroundColor='transparent';
  document.getElementById('ingredientsButton').style.color='#000';
  document.getElementById('infoButton').style.backgroundColor='transparent';
  document.getElementById('infoButton').style.color='#000';
  document.getElementById('reviewButton').style.backgroundColor='transparent';
  document.getElementById('reviewButton').style.color='#000';
  document.getElementById('returnsButton').style.backgroundColor='transparent';
  document.getElementById('returnsButton').style.color='#000';

  document.getElementById('overview').style.display='none';
  document.getElementById('manual').style.display='';
  document.getElementById('ingredients').style.display='none';
  document.getElementById('info').style.display='none';
  document.getElementById('reviews').style.display='none';
  document.getElementById('returns').style.display='none';
};

document.getElementById('ingredientsButton').onclick=function(){
  document.getElementById('overviewButton').style.backgroundColor='transparent';
  document.getElementById('overviewButton').style.color='#000';
  document.getElementById('manualButton').style.backgroundColor='transparent';
  document.getElementById('manualButton').style.color='#000';
  document.getElementById('ingredientsButton').style.backgroundColor='#d81c25';
  document.getElementById('ingredientsButton').style.color='#fff';
  document.getElementById('infoButton').style.backgroundColor='transparent';
  document.getElementById('infoButton').style.color='#000';
  document.getElementById('reviewButton').style.backgroundColor='transparent';
  document.getElementById('reviewButton').style.color='#000';
  document.getElementById('returnsButton').style.backgroundColor='transparent';
  document.getElementById('returnsButton').style.color='#000';

  document.getElementById('overview').style.display='none';
  document.getElementById('manual').style.display='none';
  document.getElementById('ingredients').style.display='';
  document.getElementById('info').style.display='none';
  document.getElementById('reviews').style.display='none';
  document.getElementById('returns').style.display='none';
};

document.getElementById('infoButton').onclick=function(){
  document.getElementById('overviewButton').style.backgroundColor='transparent';
  document.getElementById('overviewButton').style.color='#000';
  document.getElementById('manualButton').style.backgroundColor='transparent';
  document.getElementById('manualButton').style.color='#000';
  document.getElementById('ingredientsButton').style.backgroundColor='transparent';
  document.getElementById('ingredientsButton').style.color='#000';
  document.getElementById('infoButton').style.backgroundColor='#d81c25';
  document.getElementById('infoButton').style.color='#fff';
  document.getElementById('reviewButton').style.backgroundColor='transparent';
  document.getElementById('reviewButton').style.color='#000';
  document.getElementById('returnsButton').style.backgroundColor='transparent';
  document.getElementById('returnsButton').style.color='#000';

  document.getElementById('overview').style.display='none';
  document.getElementById('manual').style.display='none';
  document.getElementById('ingredients').style.display='none';
  document.getElementById('info').style.display='';
  document.getElementById('reviews').style.display='none';
  document.getElementById('returns').style.display='none';
};

document.getElementById('reviewButton').onclick=function(){
  document.getElementById('overviewButton').style.backgroundColor='transparent';
  document.getElementById('overviewButton').style.color='#000';
  document.getElementById('manualButton').style.backgroundColor='transparent';
  document.getElementById('manualButton').style.color='#000';
  document.getElementById('ingredientsButton').style.backgroundColor='transparent';
  document.getElementById('ingredientsButton').style.color='#000';
  document.getElementById('infoButton').style.backgroundColor='transparent';
  document.getElementById('infoButton').style.color='#000';
  document.getElementById('reviewButton').style.backgroundColor='#d81c25';
  document.getElementById('reviewButton').style.color='#fff';
  document.getElementById('returnsButton').style.backgroundColor='transparent';
  document.getElementById('returnsButton').style.color='#000';

  document.getElementById('overview').style.display='none';
  document.getElementById('manual').style.display='none';
  document.getElementById('ingredients').style.display='none';
  document.getElementById('info').style.display='none';
  document.getElementById('reviews').style.display='';
  document.getElementById('returns').style.display='none';
};

document.getElementById('returnsButton').onclick=function(){
  document.getElementById('overviewButton').style.backgroundColor='transparent';
  document.getElementById('overviewButton').style.color='#000';
  document.getElementById('manualButton').style.backgroundColor='transparent';
  document.getElementById('manualButton').style.color='#000';
  document.getElementById('ingredientsButton').style.backgroundColor='transparent';
  document.getElementById('ingredientsButton').style.color='#000';
  document.getElementById('infoButton').style.backgroundColor='transparent';
  document.getElementById('infoButton').style.color='#000';
  document.getElementById('reviewButton').style.backgroundColor='transparent';
  document.getElementById('reviewButton').style.color='#000';
  document.getElementById('returnsButton').style.backgroundColor='#d81c25';
  document.getElementById('returnsButton').style.color='#fff';

  document.getElementById('overview').style.display='none';
  document.getElementById('manual').style.display='none';
  document.getElementById('ingredients').style.display='none';
  document.getElementById('info').style.display='none';
  document.getElementById('reviews').style.display='none';
  document.getElementById('returns').style.display='';
};

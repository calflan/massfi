/* --------------------------------- *
 * Author: Calum James Flanagan      *
 * Institution: Edge Hill University *
 * --------------------------------- */


document.getElementById('overview').style.display='';
document.getElementById('manual').style.display='none';
document.getElementById('ingredients').style.display='none';
document.getElementById('info').style.display='none';
document.getElementById('reviews').style.display='none';
document.getElementById('returns').style.display='none';
document.getElementById('overviewButton').style.backgroundColor='#d81c25';
/*
*
* The following controls the section concerning the payment options.
*
*/

// Make Card form appear and paypal/alipay disappear, when user clicks cardButton.

document.getElementById('overviewButton').onclick=function(){

  document.getElementById('overviewButton').style.backgroundColor='#d81c25';
  document.getElementById('manualButton').style.backgroundColor='transparent';
  document.getElementById('ingredientsButton').style.backgroundColor='transparent';
  document.getElementById('infoButton').style.backgroundColor='transparent';
  document.getElementById('reviewButton').style.backgroundColor='transparent';
  document.getElementById('returnsButton').style.backgroundColor='transparent';

  document.getElementById('overview').style.display='';
  document.getElementById('manual').style.display='none';
  document.getElementById('ingredients').style.display='none';
  document.getElementById('info').style.display='none';
  document.getElementById('reviews').style.display='none';
  document.getElementById('returns').style.display='none';
};

// Make PayPal appear and card form/alipay disappear, when user clicks paypalButton.
document.getElementById('manualButton').onclick=function(){

  document.getElementById('overviewButton').style.backgroundColor='transparent';
  document.getElementById('manualButton').style.backgroundColor='#d81c25';
  document.getElementById('ingredientsButton').style.backgroundColor='transparent';
  document.getElementById('infoButton').style.backgroundColor='transparent';
  document.getElementById('reviewButton').style.backgroundColor='transparent';
  document.getElementById('returnsButton').style.backgroundColor='transparent';

  document.getElementById('overview').style.display='none';
  document.getElementById('manual').style.display='';
  document.getElementById('ingredients').style.display='none';
  document.getElementById('info').style.display='none';
  document.getElementById('reviews').style.display='none';
  document.getElementById('returns').style.display='none';
};

// Make AliPay appear and card form/paypal disappear, when user clicks alipayButton.
document.getElementById('ingredientsButton').onclick=function(){

  document.getElementById('overviewButton').style.backgroundColor='transparent';
  document.getElementById('manualButton').style.backgroundColor='transparent';
  document.getElementById('ingredientsButton').style.backgroundColor='#d81c25';
  document.getElementById('infoButton').style.backgroundColor='transparent';
  document.getElementById('reviewButton').style.backgroundColor='transparent';
  document.getElementById('returnsButton').style.backgroundColor='transparent';

  document.getElementById('overview').style.display='none';
  document.getElementById('manual').style.display='none';
  document.getElementById('ingredients').style.display='';
  document.getElementById('info').style.display='none';
  document.getElementById('reviews').style.display='none';
  document.getElementById('returns').style.display='none';
};


// Make newAddrForm appear and useDeliveryAddr disappear, when user clicks newAddrButton.

document.getElementById('infoButton').onclick=function(){

  document.getElementById('overviewButton').style.backgroundColor='transparent';
  document.getElementById('manualButton').style.backgroundColor='transparent';
  document.getElementById('ingredientsButton').style.backgroundColor='transparent';
  document.getElementById('infoButton').style.backgroundColor='#d81c25';
  document.getElementById('reviewButton').style.backgroundColor='transparent';
  document.getElementById('returnsButton').style.backgroundColor='transparent';

  document.getElementById('overview').style.display='none';
  document.getElementById('manual').style.display='none';
  document.getElementById('ingredients').style.display='none';
  document.getElementById('info').style.display='';
  document.getElementById('reviews').style.display='none';
  document.getElementById('returns').style.display='none';
};

document.getElementById('reviewButton').onclick=function(){

  document.getElementById('overviewButton').style.backgroundColor='transparent';
  document.getElementById('manualButton').style.backgroundColor='transparent';
  document.getElementById('ingredientsButton').style.backgroundColor='transparent';
  document.getElementById('infoButton').style.backgroundColor='transparent';
  document.getElementById('reviewButton').style.backgroundColor='#d81c25';
  document.getElementById('returnsButton').style.backgroundColor='transparent';

  document.getElementById('overview').style.display='none';
  document.getElementById('manual').style.display='none';
  document.getElementById('ingredients').style.display='none';
  document.getElementById('info').style.display='none';
  document.getElementById('reviews').style.display='';
  document.getElementById('returns').style.display='none';
};

document.getElementById('returnsButton').onclick=function(){

  document.getElementById('overviewButton').style.backgroundColor='transparent';
  document.getElementById('manualButton').style.backgroundColor='transparent';
  document.getElementById('ingredientsButton').style.backgroundColor='transparent';
  document.getElementById('infoButton').style.backgroundColor='transparent';
  document.getElementById('reviewButton').style.backgroundColor='transparent';
  document.getElementById('returnsButton').style.backgroundColor='#d81c25';

  document.getElementById('overview').style.display='none';
  document.getElementById('manual').style.display='none';
  document.getElementById('ingredients').style.display='none';
  document.getElementById('info').style.display='none';
  document.getElementById('reviews').style.display='none';
  document.getElementById('returns').style.display='';
};

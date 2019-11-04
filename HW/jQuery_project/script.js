var ldnClicked = false;


$(document).ready(function() {
   $("#visit").click(function() {
    if (ldnClicked === false) {

     $("#visit").css("font-size", "60px");
     ldnClicked = true;
    } else {

     $("#visit").css("font-size", "40px");
     ldnClicked = false;


    }

   });
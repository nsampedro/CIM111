var ldnClicked = false;


$(document).ready(function() {
 $("#visit").click(function() {
  console.log("test");
  if (ldnClicked === false) {

   $("#visit").css("font-size", "80px");
   ldnClicked = true;
  } else {

   $("#visit").css("font-size", "60px");
   ldnClicked = false;


  }

 });
});
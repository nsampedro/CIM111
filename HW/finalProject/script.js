var titleClicked = false;

$("#visit").click(function() {
 // console.log("test");
 if (titleClicked === false) {

  $("#visit").css("font-size", "80px");
  titleClicked = true;
 } else {

  $("#visit").css("font-size", "60px");
  titleClicked = false;


 }
});

$("#bye").click(function() {
 $("#byeMessage").html("Now go plan your trip!! Have a good trip! Bye! :-)")
});

$("#hide").click(function() {
 $("#goAway").hide(1000);
});
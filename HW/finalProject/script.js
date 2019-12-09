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
 $("#byeMessage").html("Hey! Have a good trip! :-)")
});

$("#hide").click(function() {
 $("#goAway").hide(1000);
});
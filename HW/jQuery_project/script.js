var ldnClicked = false;
var color = 0;

$(document).ready(function() {
 $("#visit").click(function() {
  // console.log("test");
  if (ldnClicked === false) {

   $("#visit").css("font-size", "80px");
   ldnClicked = true;
  } else {

   $("#visit").css("font-size", "60px");
   ldnClicked = false;


  }
 });

 $("#learn").click(function() {
  if (color === 0) {
   // color is 0. switch to the first color
   $("#learn").css("color", "red");
   color = 1;
  } else if (color === 1) {
   // color is 1
   $("#learn").css("color", "blue");
   color = 2;
  } else if (color === 2) {
   // color is 2
   $("#learn").css("color", "white");
   color = 3;
  } else {
   $("#learn").css("color", "black");
   color = 0;
  }
 });

 $("#bye").click(function() {
  $("#byeMessage").html("Hey! Have a good trip!")
 });

});

// $(document).ready(function() {
//  $("#learn").toggle(
//   function() {
//    $("#learn").css(
//     "color",
//     "red"
//    );
//   },
//   function() {
//    $("#learn").css(
//     "color",
//     "blue"
//    );
//   },
//   function() {
//    $("#learn").css(
//     "color",
//     "white"
//    );
//   });
// });

// $(document).ready(function() {
//  $("#goodTrip").click(function() {
//   $("p").hide();
//  });
//  $("#goodTrip").click(function() {
//   $("p").show();
//  });
// });
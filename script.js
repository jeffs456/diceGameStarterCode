$(function() {
  // Dice roll function
  function roll() {
    // Random number generator
    return Math.floor(Math.random() * 6 + 1);
  }

  // Place your code here
  $("button").click(function(){
    $("#first-die").attr("src", "images/" + roll() + ".png");
    $("#second-die").attr("src", "images/" + roll() + ".png");
  });
  
  
});
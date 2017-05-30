
$(document).ready(function(){

var computer = 0;
var wins = 0;
var losses = 0;
var guest = 0;
var game = true;
var crystal = {crystal01: Math.floor(Math.random() * 12) + 1, crystal02: Math.floor(Math.random() * 12) + 1, crystal03: Math.floor(Math.random() * 12) + 1, crystal04: Math.floor(Math.random() * 12) + 1};
// Function that randomly creates numbers that needs to be matched by the player
function compunum(){
computer = Math.floor(Math.random() * 100) + 19;

$("#computer").html(computer);

};
// Function that updates the wins and losses of the player.
function status1() {


  if(guest === computer) {
    wins++;
    $("#wins").html("Wins: " + wins);
    $('#status').html("You win!");
    
    game = false;
  }

  else if(guest > computer) {
    losses++;
    $("#losses").html("Losses:" + losses);
    $("#status").html("You lost.");
    
    game = false;
  }





};

compunum();
//Each crystal have a random value created with the varible crystal and this function will add the values every time the player clicks on it.

$("#crystal1").on("click", function() {
  if(game === true){
  guest += crystal.crystal01;
  $("#addnumber").html(guest);
 
 status1();


};
});

$("#crystal2").on("click", function(){ 

  if(game === true){
  guest += crystal.crystal02;
  $("#addnumber").html(guest);
  status1();
  
};
});



$("#crystal3").on("click", function() {
  if(game === true){
  guest += crystal.crystal03;
  $("#addnumber").html(guest); 
  status1();

};
});


$("#crystal4").on("click", function() {
  if(game === true){
  guest += crystal.crystal04;
  $("#addnumber").html(guest);
  status1();

};
});
//This resets button reset the game everytime it comes to a end. 
$("#reset").on("click", function() {
  guest = 0;
  $("#addnumber").html(guest);
  $("#status").html("Status");
  compunum();
  status1();
  crystal = {crystal01: Math.floor(Math.random()*12 + 1), crystal02: Math.floor(Math.random()*12 +1), crystal03: Math.floor(Math.random()*12+1), crystal04: Math.floor(Math.random()*12+1)};
  game = true;
  
  
});


});


$(document).ready(function(){

var computer = 0;
var wins = 0;
var losses = 0;
var guest = 0;
var game = true;
var crystal = {crystal01: Math.floor(Math.random() * 12) + 1, crystal02: Math.floor(Math.random() * 12) + 1, crystal03: Math.floor(Math.random() * 12) + 1, crystal04: Math.floor(Math.random() * 12) + 1};

function compunum(){
computer = Math.floor(Math.random() * 100) + 19;

$("#computer").html(computer);

};

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

$("#crystal1").on("click", function() {
  if(game === true){
  guest = crystal.crystal01 + guest;
  $("#addnumber").html(guest);
 
 status1();


};
});

$("#crystal2").on("click", function(){ 

  if(game === true){
  guest = crystal.crystal02 + guest;
  $("#addnumber").html(guest);
  status1();
  
};
});



$("#crystal3").on("click", function() {
  if(game === true){
  guest = crystal.crystal03 + guest;
  $("#addnumber").html(guest); 
  status1();

};
});


$("#crystal4").on("click", function() {
  if(game === true){
  guest = crystal.crystal04 + guest;
  $("#addnumber").html(guest);
  status1();

};
});

$("#reset").on("click", function() {
  guest = 0;
  $("#addnumber").html(guest);
  $("#status").html("Status:");
  compunum();
  status1();
  crystal = {crystal01: Math.floor(Math.random()*12 + 1), crystal02: Math.floor(Math.random()*12 +1), crystal03: Math.floor(Math.random()*12+1), crystal04: Math.floor(Math.random()*12+1)};
  game = true;
  
  
});


});

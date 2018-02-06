$('body').css("background-color:", "yellow");
$(document).ready(function () {


    $('body').html("yo is this bull working boi").append;
    $('body').css('background-color', 'rgb(186, 243, 216)');
    



    
    function randomScore(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      } 
      console.log("Your card has the value of " + randomScore(1, 52));
      







})
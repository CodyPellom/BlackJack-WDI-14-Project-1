
$(document).ready(function () {


    

   
    
    


     
    //Cards defined as object arrays -----------*/

    const cards = [
        //hearts
        {
            suit: "hearts",
            name: "ace",
            image: 'Deck-Images/AH.png',
            value: 11
        },
        {
            suit: "hearts",
            name: "two",
            image: 'Deck-Images/2H.png',
            value: 2
        },
        {
            suit: "hearts",
            name: "three",
            image: 'Deck-Images/3H.png',
            value: 3
        },
        {
            suit: "hearts",
            name: "four",
            image: 'Deck-Images/4H.png',
            value: 4
        },
        {
            suit: "hearts",
            name: "five",
            image: 'Deck-Images/5H.png',
            value: 5
        },
        {
            suit: "hearts",
            name: "six",
            image: 'Deck-Images/6H.png',
            value: 6
        },
        {
            suit: "hearts",
            name: "seven",
            image: 'Deck-Images/7H.png',
            value: 7
        },
        {
            suit: "hearts",
            name: "eight",
            image: 'Deck-Images/8H.png',
            value: 8
        },
        {
            suit: "hearts",
            name: "nine",
            image: 'Deck-Images/9H.png',
            value: 9
        },
        {
            suit: "hearts",
            name: "ten",
            image: 'Deck-Images/10H.png',
            value: 10
        },
        {
            suit: "hearts",
            name: "jack",
            image: 'Deck-Images/JH.png',
            value: 10
        },
        {
            suit: "hearts",
            name: "queen",
            image: 'Deck-Images/QH.png',
            value: 10
        },
        {
            suit: "hearts",
            name: "king",
            image: 'Deck-Images/KH.png',
            value: 10
        },
        //Diamonds
        {
            suit: "diamonds",
            name: "ace",
            image: 'Deck-Images/AD.png',
            value: 11
        },
        {
            suit: "diamonds",
            name: "two",
            image: 'Deck-Images/2D.png',
            value: 2
        },
        {
            suit: "diamonds",
            name: "three",
            image: 'Deck-Images/3D.png',
            value: 3
        },
        {
            suit: "diamonds",
            name: "four",
            image: 'Deck-Images/4D.png',
            value: 4
        },
        {
            suit: "diamonds",
            name: "five",
            image: 'Deck-Images/5D.png',
            value: 5
        },
        {
            suit: "diamonds",
            name: "six",
            image: 'Deck-Images/6D.png',
            value: 6
        },
        {
            suit: "diamonds",
            name: "seven",
            image: 'Deck-Images/7D.png',
            value: 7
        },
        {
            suit: "diamonds",
            name: "eight",
            image: 'Deck-Images/8D.png',
            value: 8
        },
        {
            suit: "diamonds",
            name: "nine",
            image: 'Deck-Images/9D.png',
            value: 9
        },
        {
            suit: "diamonds",
            name: "ten",
            image: 'Deck-Images/10D.png',
            value: 10
        },
        {
            suit: "diamonds",
            name: "jack",
            image: 'Deck-Images/JD.png',
            value: 10
        },
        {
            suit: "diamonds",
            name: "queen",
            image: 'Deck-Images/QD.png',
            value: 10
        },
        {
            suit: "diamonds",
            name: "king",
            image: 'Deck-Images/KD.png',
            value: 10
        },
        //Clubs
        {
            suit: "clubs",
            name: "ace",
            image: 'Deck-Images/AC.png',
            value: 11
        },
        {
            suit: "clubs",
            name: "two",
            image: 'Deck-Images/2C.png',
            value: 2
        },
        {
            suit: "clubs",
            name: "three",
            image: 'Deck-Images/3C.png',
            value: 3
        },
        {
            suit: "clubs",
            name: "four",
            image: 'Deck-Images/4C.png',
            value: 4
        },
        {
            suit: "clubs",
            name: "five",
            image: 'Deck-Images/5C.png',
            value: 5
        },
        {
            suit: "clubs",
            name: "six",
            image: 'Deck-Images/6C.png',
            value: 6
        },
        {
            suit: "clubs",
            name: "seven",
            image: 'Deck-Images/7C.png',
            value: 7
        },
        {
            suit: "clubs",
            name: "eight",
            image: 'Deck-Images/8C.png',
            value: 8
        },
        {
            suit: "clubs",
            name: "nine",
            image: 'Deck-Images/9C.png',
            value: 9
        },
        {
            suit: "clubs",
            name: "ten",
            image: 'Deck-Images/10C.png',
            value: 10
        },
        {
            suit: "clubs",
            name: "jack",
            image: 'Deck-Images/JC.png',
            value: 10
        },
        {
            suit: "clubs",
            name: "queen",
            image: 'Deck-Images/QC.png',
            value: 10
        },
        {
            suit: "clubs",
            name: "king",
            image: 'Deck-Images/KC.png',
            value: 10
        },
        //Spades
        {
            suit: "spades",
            name: "ace",
            image: 'Deck-Images/AS.png',
            value: 11
        },
        {
            suit: "spades",
            name: "two",
            image: 'Deck-Images/2S.png',
            value: 2
        },
        {
            suit: "spades",
            name: "three",
            image: 'Deck-Images/3S.png',
            value: 3
        },
        {
            suit: "spades",
            name: "four",
            image: 'Deck-Images/4S.png',
            value: 4
        },
        {
            suit: "spades",
            name: "five",
            image: 'Deck-Images/5S.png',
            value: 5
        },
        {
            suit: "spades",
            name: "six",
            image: 'Deck-Images/6S.png',
            value: 6
        },
        {
            suit: "spades",
            name: "seven",
            image: 'Deck-Images/7S.png',
            value: 7
        },
        {
            suit: "spades",
            name: "eight",
            image: 'Deck-Images/8S.png',
            value: 8
        },
        {
            suit: "spades",
            name: "nine",
            image: 'Deck-Images/9S.png',
            value: 9
        },
        {
            suit: "spades",
            name: "ten",
            image: 'Deck-Images/10S.png',
            value: 10
        },
        {
            suit: "spades",
            name: "jack",
            image: 'Deck-Images/JS.png',
            value: 10
        },
        {
            suit: "spades",
            name: "queen",
            image: 'Deck-Images/QS.png',
            value: 10
        },
        {
            suit: "spades",
            name: "king",
            image: 'Deck-Images/KS.png',
            value: 10
        }
    ];


   //Cards end ; defined as object arrays -----------*/


    function Dealer(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
   

 
    function PlayerDealt(card1, card2){
    
        card1 = Dealer(2, 11);
        card2 = Dealer(2, 11);    
        return (card1 +'    '+ card2);
     } 
   console.log(PlayerDealt());


//create a score bank that logs score along with limits
var cardScore1;
var cardScore2;
var cardScoreOutput;
var win = alert("You win! ... Want to play again?");
var bust = alert("You lose... Play again?");


function gameScore(){
cardScoreOutput = 

}


     //Game intel & Logic ---------------------*/

//xt colors: Berkshire+Swash|Cookie|Damion|Gloria+Hallelujah|Indie+Flower|Pacifico|Satisfy"//Te

function Global() {
    $('header').html("blackjack table").append;
    $('header').css("font-family", "Satisfy");
    $('header').css("font-size", "75px");
    $('header').css("color", "rgba(172, 195, 224, 0.83)");
    $('header').css("border-style", "solid");
}

Global();

})
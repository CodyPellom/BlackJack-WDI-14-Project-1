$(document).ready(function () {










    //Cards defined as object arrays -----------*/

    const cards = [
        //hearts
        {
            suit: "hearts",
            name: "ace",
            image: 'Deck-Images/AH.jpg',
            value: 11
        },
        {
            suit: "hearts",
            name: "two",
            image: 'Deck-Images/2H.jpg',
            value: 2
        },
        {
            suit: "hearts",
            name: "three",
            image: 'Deck-Images/3H.jpg',
            value: 3
        },
        {
            suit: "hearts",
            name: "four",
            image: 'Deck-Images/4H.jpg',
            value: 4
        },
        {
            suit: "hearts",
            name: "five",
            image: 'Deck-Images/5H.jpg',
            value: 5
        },
        {
            suit: "hearts",
            name: "six",
            image: 'Deck-Images/6H.jpg',
            value: 6
        },
        {
            suit: "hearts",
            name: "seven",
            image: 'Deck-Images/7H.jpg',
            value: 7
        },
        {
            suit: "hearts",
            name: "eight",
            image: 'Deck-Images/8H.jpg',
            value: 8
        },
        {
            suit: "hearts",
            name: "nine",
            image: 'Deck-Images/9H.jpg',
            value: 9
        },
        {
            suit: "hearts",
            name: "ten",
            image: 'Deck-Images/10H.jpg',
            value: 10
        },
        {
            suit: "hearts",
            name: "jack",
            image: 'Deck-Images/JH.jpg',
            value: 10
        },
        {
            suit: "hearts",
            name: "queen",
            image: 'Deck-Images/QH.jpg',
            value: 10
        },
        {
            suit: "hearts",
            name: "king",
            image: 'Deck-Images/KH.jpg',
            value: 10
        },
        //Diamonds
        {
            suit: "diamonds",
            name: "ace",
            image: 'Deck-Images/AD.jpg',
            value: 11
        },
        {
            suit: "diamonds",
            name: "two",
            image: 'Deck-Images/2D.jpg',
            value: 2
        },
        {
            suit: "diamonds",
            name: "three",
            image: 'Deck-Images/3D.jpg',
            value: 3
        },
        {
            suit: "diamonds",
            name: "four",
            image: 'Deck-Images/4D.jpg',
            value: 4
        },
        {
            suit: "diamonds",
            name: "five",
            image: 'Deck-Images/5D.jpg',
            value: 5
        },
        {
            suit: "diamonds",
            name: "six",
            image: 'Deck-Images/6D.jpg',
            value: 6
        },
        {
            suit: "diamonds",
            name: "seven",
            image: 'Deck-Images/7D.jpg',
            value: 7
        },
        {
            suit: "diamonds",
            name: "eight",
            image: 'Deck-Images/8D.jpg',
            value: 8
        },
        {
            suit: "diamonds",
            name: "nine",
            image: 'Deck-Images/9D.jpg',
            value: 9
        },
        {
            suit: "diamonds",
            name: "ten",
            image: 'Deck-Images/10D.jpg',
            value: 10
        },
        {
            suit: "diamonds",
            name: "jack",
            image: 'Deck-Images/JD.jpg',
            value: 10
        },
        {
            suit: "diamonds",
            name: "queen",
            image: 'Deck-Images/QD.jpg',
            value: 10
        },
        {
            suit: "diamonds",
            name: "king",
            image: 'Deck-Images/KD.jpg',
            value: 10
        },
        //Clubs
        {
            suit: "clubs",
            name: "ace",
            image: 'Deck-Images/AC.jpg',
            value: 11
        },
        {
            suit: "clubs",
            name: "two",
            image: 'Deck-Images/2C.jpg',
            value: 2
        },
        {
            suit: "clubs",
            name: "three",
            image: 'Deck-Images/3C.jpg',
            value: 3
        },
        {
            suit: "clubs",
            name: "four",
            image: 'Deck-Images/4C.jpg',
            value: 4
        },
        {
            suit: "clubs",
            name: "five",
            image: 'Deck-Images/5C.jpg',
            value: 5
        },
        {
            suit: "clubs",
            name: "six",
            image: 'Deck-Images/6C.jpg',
            value: 6
        },
        {
            suit: "clubs",
            name: "seven",
            image: 'Deck-Images/7C.jpg',
            value: 7
        },
        {
            suit: "clubs",
            name: "eight",
            image: 'Deck-Images/8C.jpg',
            value: 8
        },
        {
            suit: "clubs",
            name: "nine",
            image: 'Deck-Images/9C.jpg',
            value: 9
        },
        {
            suit: "clubs",
            name: "ten",
            image: 'Deck-Images/10C.jpg',
            value: 10
        },
        {
            suit: "clubs",
            name: "jack",
            image: 'Deck-Images/JC.jpg',
            value: 10
        },
        {
            suit: "clubs",
            name: "queen",
            image: 'Deck-Images/QC.jpg',
            value: 10
        },
        {
            suit: "clubs",
            name: "king",
            image: 'Deck-Images/KC.jpg',
            value: 10
        },
        //Spades
        {
            suit: "spades",
            name: "ace",
            image: 'Deck-Images/AS.jpg',
            value: 11
        },
        {
            suit: "spades",
            name: "two",
            image: 'Deck-Images/2S.jpg',
            value: 2
        },
        {
            suit: "spades",
            name: "three",
            image: 'Deck-Images/3S.jpg',
            value: 3
        },
        {
            suit: "spades",
            name: "four",
            image: 'Deck-Images/4S.jpg',
            value: 4
        },
        {
            suit: "spades",
            name: "five",
            image: 'Deck-Images/5S.jpg',
            value: 5
        },
        {
            suit: "spades",
            name: "six",
            image: 'Deck-Images/6S.jpg',
            value: 6
        },
        {
            suit: "spades",
            name: "seven",
            image: 'Deck-Images/7S.jpg',
            value: 7
        },
        {
            suit: "spades",
            name: "eight",
            image: 'Deck-Images/8S.jpg',
            value: 8
        },
        {
            suit: "spades",
            name: "nine",
            image: 'Deck-Images/9S.jpg',
            value: 9
        },
        {
            suit: "spades",
            name: "ten",
            image: 'Deck-Images/10S.jpg',
            value: 10
        },
        {
            suit: "spades",
            name: "jack",
            image: 'Deck-Images/JS.jpg',
            value: 10
        },
        {
            suit: "spades",
            name: "queen",
            image: 'Deck-Images/QS.jpg',
            value: 10
        },
        {
            suit: "spades",
            name: "king",
            image: 'Deck-Images/KS.jpg',
            value: 10
        }
    ];


    //Cards end ; defined as object arrays -----------*/


    function Dealer(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    /////////////////////////////////////////////////////////
    var card = Dealer(1, 52);
    var playerSum = 0;
    var dealerSum = 0;

    function sumOfCards() {
        playerSum = 0;
        dealerSum = 0;
        for (let i = 0; i < playerCards.length; i++) {
            playerSum += playerCards[i].value;
        }

        console.log(`the sum is ${playerSum}`);
        return playerSum;

        for (let i = 0; i < dealerCards.length; i++) {
            dealerSum += dealerCards[i].value;

        }

        console.log(`the sum is ${dealerSum}`)
        return dealerSum;

    }

    //**Variable * rules**//
    function rules() {

        if (playerSum > 22) {
            return prompt("You lose... Score of  ," + playerSum + " Play again?");
        }
        if (playerSum === 21) {
            return prompt("BLACKJACK! You win!  ... Play again!");
        }

    }
    //console.log(rules());
    /////////////////////////////////////

    /////////////////////////////////////////
    let dealerCards = [];
    let randomNumber = 0;
    let playerCards = [];



    ///////////////




    //Player is dealt the first hand 
    function firstDeal() {
        for (i = 0; i < 2; i++) {
            (playerCards.push(cards[Dealer(1, 52)]));
        }
        //sumOfCards();
        return playerCards;

        for (i = 0; i < 2; i++) {
            (dealerCards.push(cards[Dealer(1, 52)]));
        }
        //sumOfCards();
        return dealerCards;
    }



    sumOfCards();
    rules();
    if (playerCards === 21) {
        return alert("You were dealt a natural! You win with a score of 21 on the deal")
    }
    console.log(firstDeal());
    console.log("the players hand");
    /////////////////////////////


    //Dealer is dealt firsthand
    function firstDealerDeal() {
        for (i = 0; i < 2; i++) {
            (dealerCards.push(cards[Dealer(1, 52)]));
        }
        return dealerCards;


        sumOfCards();
        rules();
        $('#cardPlacement2').prepend($('<img />'));
        $('img').first().attr('src', dealerCards[dealerCards.length - 1].image);


    };
    console.log(firstDealerDeal());
    console.log('dealer hand');




    //Hit function for the player//
    function hitFunction() {

        for (i = 0; i < 1; i++) {
            (playerCards.push(cards[Dealer(1, 52)]));
        }
        console.log(playerCards);
        sumOfCards();
        rules();
        return playerCards;

    };



    //Hit button for the player, being linked to console and function//
    $('#hitButton').click(() => {
        hitFunction();
        $('#cardPlacement2').prepend($('<img />'));
        $('#cardPlacement2 img').first().attr('src', playerCards[playerCards.length - 1].image)
    });







    $('#cardPlacement').prepend($('<img />'));
    $('#cardPlacement img').first().attr('src', dealerCards[dealerCards.length - 1].image);




    $('#cardPlacement').prepend($('<img />'));
    $('#cardPlacement img').first().attr('src', dealerCards[dealerCards.length - 2].image);


    $('#cardPlacement2').prepend($('<img />'));
    $('#cardPlacement2 img').first().attr('src', playerCards[playerCards.length - 1].image);


    $('#cardPlacement2').prepend($('<img />'));
    $('#cardPlacement2 img').first().attr('src', playerCards[playerCards.length - 2].image);




    //$('#cardPlacement2').prepend($('<img />'));
    //$('img').first().attr('src', playerCards[playerCards.length -3].image);


    // $('#cardPlacement2').prepend($('<img />'));
    //$('img').first().attr('src', playerCards[playerCards.length -4].image);

    ///////////////////////////////////////////
    //#hitButton.onclick = 



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

});
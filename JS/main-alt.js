
//The 52 card deck as an object array
const cards = [
    //HEARTS
    {
        suit: "hearts",
        name: "ace",
        image: 'images/AH.png',
        value: 11
    },
    {
        suit: "hearts",
        name: "two",
        image: 'images/2H.png',
        value: 2
    },
    {
        suit: "hearts",
        name: "three",
        image: 'images/3H.png',
        value: 3
    },
    {
        suit: "hearts",
        name: "four",
        image: 'images/4H.png',
        value: 4
    },
    {
        suit: "hearts",
        name: "five",
        image: 'images/5H.png',
        value: 5
    },
    {
        suit: "hearts",
        name: "six",
        image: 'images/6H.png',
        value: 6
    },
    {
        suit: "hearts",
        name: "seven",
        image: 'images/7H.png',
        value: 7
    },
    {
        suit: "hearts",
        name: "eight",
        image: 'images/8H.png',
        value: 8
    },
    {
        suit: "hearts",
        name: "nine",
        image: 'images/9H.png',
        value: 9
    },
    {
        suit: "hearts",
        name: "ten",
        image: 'images/10H.png',
        value: 10
    },
    {
        suit: "hearts",
        name: "jack",
        image: 'images/JH.png',
        value: 10
    },
    {
        suit: "hearts",
        name: "queen",
        image: 'images/QH.png',
        value: 10
    },
    {
        suit: "hearts",
        name: "king",
        image: 'images/KH.png',
        value: 10
    },
    //Diamonds
    {
        suit: "diamonds",
        name: "ace",
        image: 'images/AD.png',
        value: 11
    },
    {
        suit: "diamonds",
        name: "two",
        image: 'images/2D.png',
        value: 2
    },
    {
        suit: "diamonds",
        name: "three",
        image: 'images/3D.png',
        value: 3
    },
    {
        suit: "diamonds",
        name: "four",
        image: 'images/4D.png',
        value: 4
    },
    {
        suit: "diamonds",
        name: "five",
        image: 'images/5D.png',
        value: 5
    },
    {
        suit: "diamonds",
        name: "six",
        image: 'images/6D.png',
        value: 6
    },
    {
        suit: "diamonds",
        name: "seven",
        image: 'images/7D.png',
        value: 7
    },
    {
        suit: "diamonds",
        name: "eight",
        image: 'images/8D.png',
        value: 8
    },
    {
        suit: "diamonds",
        name: "nine",
        image: 'images/9D.png',
        value: 9
    },
    {
        suit: "diamonds",
        name: "ten",
        image: 'images/10D.png',
        value: 10
    },
    {
        suit: "diamonds",
        name: "jack",
        image: 'images/JD.png',
        value: 10
    },
    {
        suit: "diamonds",
        name: "queen",
        image: 'images/QD.png',
        value: 10
    },
    {
        suit: "diamonds",
        name: "king",
        image: 'images/KD.png',
        value: 10
    },
    //Clubs
    {
        suit: "clubs",
        name: "ace",
        image: 'images/AC.png',
        value: 11
    },
    {
        suit: "clubs",
        name: "two",
        image: 'images/2C.png',
        value: 2
    },
    {
        suit: "clubs",
        name: "three",
        image: 'images/3C.png',
        value: 3
    },
    {
        suit: "clubs",
        name: "four",
        image: 'images/4C.png',
        value: 4
    },
    {
        suit: "clubs",
        name: "five",
        image: 'images/5C.png',
        value: 5
    },
    {
        suit: "clubs",
        name: "six",
        image: 'images/6C.png',
        value: 6
    },
    {
        suit: "clubs",
        name: "seven",
        image: 'images/7C.png',
        value: 7
    },
    {
        suit: "clubs",
        name: "eight",
        image: 'images/8C.png',
        value: 8
    },
    {
        suit: "clubs",
        name: "nine",
        image: 'images/9C.png',
        value: 9
    },
    {
        suit: "clubs",
        name: "ten",
        image: 'images/10C.png',
        value: 10
    },
    {
        suit: "clubs",
        name: "jack",
        image: 'images/JC.png',
        value: 10
    },
    {
        suit: "clubs",
        name: "queen",
        image: 'images/QC.png',
        value: 10
    },
    {
        suit: "clubs",
        name: "king",
        image: 'images/KC.png',
        value: 10
    },
    //Spades
    {
        suit: "spades",
        name: "ace",
        image: 'images/AS.png',
        value: 11
    },
    {
        suit: "spades",
        name: "two",
        image: 'images/2S.png',
        value: 2
    },
    {
        suit: "spades",
        name: "three",
        image: 'images/3S.png',
        value: 3
    },
    {
        suit: "spades",
        name: "four",
        image: 'images/4S.png',
        value: 4
    },
    {
        suit: "spades",
        name: "five",
        image: 'images/5S.png',
        value: 5
    },
    {
        suit: "spades",
        name: "six",
        image: 'images/6S.png',
        value: 6
    },
    {
        suit: "spades",
        name: "seven",
        image: 'images/7S.png',
        value: 7
    },
    {
        suit: "spades",
        name: "eight",
        image: 'images/8S.png',
        value: 8
    },
    {
        suit: "spades",
        name: "nine",
        image: 'images/9S.png',
        value: 9
    },
    {
        suit: "spades",
        name: "ten",
        image: 'images/10S.png',
        value: 10
    },
    {
        suit: "spades",
        name: "jack",
        image: 'images/JS.png',
        value: 10
    },
    {
        suit: "spades",
        name: "queen",
        image: 'images/QS.png',
        value: 10
    },
    {
        suit: "spades",
        name: "king",
        image: 'images/KS.png',
        value: 10
    }
];

///GameBoard Setup
const gameBoardDealer = [];
let randNum = Math.floor(Math.random() * cards.length)
gameBoardDealer.push(cards[randNum])
//Setting up game board for player
const gameBoardPlayer = [];
randNum = Math.floor(Math.random() * cards.length)
gameBoardPlayer.push(cards[randNum])
deal(gameBoardPlayer);
deal(gameBoardDealer);
//Function to dispense cards 
function deal(arr) {
    for (i = 0; i < arr.length; i++) {
        randNum = Math.floor(Math.random() * cards.length)
        if (cards[randNum].name !== arr[i].name && cards[randNum].name !== gameBoardDealer[i].name && cards[randNum].suit !== arr[i].suit && cards[randNum].suit !== gameBoardDealer[i].suit) {
            arr.push(cards[randNum])
            console.log(arr)
            sumCards(gameBoardPlayer);
         
            break;
        }
        else {
            i -= 1;
        }
    }
}

//Game**Logic
//Dealer's Turn
function dealerTurn(){
    sumCards(gameBoardDealer)
    if(sumCards(gameBoardDealer) < 21){
        deal(gameBoardDealer)
        $('#dealer').prepend($('<img />'))
        $('img').first().attr('src', gameBoardDealer[gameBoardDealer.length -1].image)
        console.log(gameBoardDealer)
    }
}
//Function to sum game cards for losing conditions 
function sumCards(arr) {
    let num = 0;
    for (i = 0; i < arr.length; i++) {
        num += arr[i].value
    }
    if (num > 21 && arr === gameBoardPlayer) {
        alert("Busted")
    }
    return num
}
//Function for hit button 
function hit(arr) {
    document.getElementById('hitButton').addEventListener('click', () => {
        deal(arr)
        setPlayerCard()
        dealerTurn()
    })
}
document.getElementById('hitButton').addEventListener('click', hit(gameBoardPlayer))
///User Interaction
//Function that sets board and starts game
function start() {
    $('#startButton').on('click', () => {
        for (i = 0; i < gameBoardPlayer.length; i++) {
            $('#startButton').hide()
            $('#player').append($('<img />'))
            $('img').eq(i).attr('src', gameBoardPlayer[i].image)
        }
        for (i = 0; i < gameBoardDealer.length; i++) {
            $('#dealer').append($('<img />'))
            $('img').eq(i).attr('src', gameBoardDealer[i].image)
        }
    })
}
console.log(gameBoardPlayer)
//Function that adds card to player board
function setPlayerCard() {
        $('#player').append($('<img />'))
        $('img').last().attr('src', gameBoardPlayer[gameBoardPlayer.length -1].image)
    
}
start()


$('body').css('background-color', red);












































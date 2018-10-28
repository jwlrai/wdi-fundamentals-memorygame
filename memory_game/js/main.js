// memory game ga

var cards =  [
    {
        rank:'queen',
        suit:'hearts',
        cardImage:'images/queen-of-hearts.png'
    },
    {
        rank:'queen',
        suit:'diamonds',
        cardImage:'images/queen-of-diamonds.png'
    },
    {
        rank:'king',
        suit:'hearts',
        cardImage:'images/king-of-hearts.png'
    },
    {
        rank:'king',
        suit:'diamonds',
        cardImage:'images/queen-of-diamonds.png'
    }
];
var cardsInPlay = [];

var checkForMatch = function(ths){
    ths.setAttribute('src',cards[ths.getAttribute('data-id')].cardImage);
    if(cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }
        cardsInPlay = [];
        document.getElementById('game-board').childNodes.forEach(function(element){
            if(element.src !== undefined){
                element.setAttribute('src','images/back.png');
            }
           
        });
    }
    
}
var flipCard = function(ths){
    cardsInPlay.push(cards[ths.getAttribute('data-id')].rank);

}
var createBoard  = function(){
    for(var i=0; i < cards.length; i++){
        var newImg = document.createElement('img');
        newImg.setAttribute('src','images/back.png');
        newImg.setAttribute('data-id',i);

        newImg.addEventListener('click',function(){
            flipCard(this);
            checkForMatch(this);
        });
        document.getElementById('game-board').appendChild(newImg);
    }
}
createBoard();


let cards=[];//array-an ordered list of items
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";

let messageEl=document.getElementById('message-el');
let sumEl=document.getElementById('sum-el');
//let sumEl=document.querySelector('#sum-el'); if it is a class we use a dot instead of the #
let cardsEl=document.getElementById('cards-el'); 

let player={
    name:"david",
    chips:123
}



playerEl=document.getElementById('player-el');
playerEl.textContent=player.name+ ":$"+ player.chips 
function getRandomCard(){
    let rand=Math.floor(Math.random()*13)+1

    if(rand===1){
        return 11
    }else if(rand>10){
        return 10
    }else{
        return rand;
    }
    
}

function startgame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard 
    rendergame();
}

function rendergame(){
    cardsEl.textContent="cards:"

    for(let i=0; i< cards.length;i++){
        cardsEl.textContent+=cards[i]+ " ";
    }

    sumEl.textContent="sum:"+sum
    if(sum<=20){
        message="Do you want to draw a new card?"
        
    }else if(sum===21){
        message="whoo! yiu've got Blackjack!"
        hasBlackJack=true
    }else{
        message="you're out of the game!"
        isAlive=false
    }

    messageEl.textContent=message;
}

function newCard(){
    if(isAlive===true  && hasBlackJack===false){
        let card=getRandomCard();
    cards.push(card)

    sum+=card;

    rendergame()
    }
}
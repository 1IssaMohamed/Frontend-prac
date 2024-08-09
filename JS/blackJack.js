let sum= 0
let allCards=[]
let hasBlackJack=false
let isAlive=true
let sumText = document.querySelector("#sum")
let cards=document.querySelector("#cards")
let message=document.getElementById("message-el")
// creating a player object that tracks how much money I really got 
let player = {
    name: "John",
    chips: 145,
    sayHello: function(){
        console.log("YOOOOOOOOOO!")
    }
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
// <21 sitll in the game
// ==21 YOOOHOOOO
// >21 fml
function start(){
    // let isAlive=true
    first= Math.floor(Math.random()*13)+1
    second= Math.floor(Math.random()*13)+1
    sum= (first+second)
    isAlive=true
    hasBlackJack=false
    allCards=[first,second]
    render()
}
function render(){
    if(isAlive==false){
        message.textContent=("You lost already bro give it up :skull:")
    }
    else if(hasBlackJack==true){
        message.textContent=("You won already, wanna give me my money back?")
    }
    else{
    sumText.textContent=("Sum: "+sum)
    cards.textContent=("Cards: "+allCards)
    if(sum<21){
        message.textContent= ("Want another card??")
    }
    else if(sum==21){
        message.textContent=("YOU DID IT BOY")
        hasBlackJack=true
    }
    else{
        message.textContent=("You never know if theres diamonds waitinging right behind this layer of rocks\n keep going!!")
        isAlive=false
    }
}
}
function card(){
    newC=Math.floor(Math.random()*13)+1
    allCards.push(newC)
    sum=sum+newC
    render()
}
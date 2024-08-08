let first=0
let second =0
let sum =(first+second)
let hasBlackJack=false
let isAlive=true
let sumText = document.querySelector("#sum")
let cards=document.querySelector("#cards")
let message=document.getElementById("message-el")

// <21 sitll in the game
// ==21 YOOOHOOOO
// >21 fml
function start(){
    first= Math.floor(Math.random()*13)
    second= Math.floor(Math.random()*13)
    cards.textContent=("Cards:"+first+","+second)
    sumText.textContent=("Sum:"+(first+second))
    let sum= (first+second)
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
console.log(message)

}
function card(){
    newC=Math.floor(Math.random()*13)
    let sumText = document.querySelector("#sum")
    sum=parseInt(sumText.value)+newC

    let cards=document.querySelector("#cards")
    let message=document.getElementById("message-el")
    sumText.textContent=("Sum:"+sum)
    cards.textContent+=(","+newC)
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
console.log(message)
}
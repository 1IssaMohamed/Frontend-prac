let first=2 
let second=6
sum=first+second
let hasBlackJack=false
let isAlive=true
// <21 sitll in the game
// ==21 YOOOHOOOO
// >21 fml
let mesage=""
if(sum<21){
    message= ("Want another card??")
}
else if(sum==21){
    message=("YOU DID IT BOY")
    hasBlackJack=true
}
else{
    message=("You never know if theres diamonds waitinging right behind this layer of rocks\n keep going!!")
    isAlive=false
}
console.log(message)
// document.getElementById("count-el").innerText=5
let count=0
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
function increment(){
    console.log("button was clicked")
    count+=1
    countEl.textContent=count
}
function save(){
    saveEl.textContent+=(count+" - ")
    count=0
    countEl.textContent=count
    // countEl.innerText=count
    // countEl.textContent=count
}
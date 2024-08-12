// function save(){
//     console.log("buttone clicked!")
// }
const inputBtn=document.getElementById("input-btn")
let myLeads=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("unordered-list")
inputBtn.addEventListener("click",function(){    
    myLeads.push(inputEl.value)
    ulEl.innerHTML+= "<li>"+inputEl.value+"</li>"
})
for (let i=0; i<myLeads.length;i++){
    ulEl.textContent+=inputEl.value
}
// function save(){
//     console.log("buttone clicked!")
// }
const inputBtn=document.getElementById("input-btn")
let myLeads=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("unordered-list")
inputBtn.addEventListener("click",function(){    
    myLeads.push(inputEl.value)
        // <p><a href='abc.com' target="_blank">test</a></p>
    // ulEl.innerHTML+= "<li> <a href='"+inputEl.value+"' target='_blank'>"+ inputEl.value+"</li>"
    ulEl.innerHTML+= 
    `<li>
        <a href="${inputEl.value}" target="_blank"> 
            ${inputEl.value}
        </a>
     </li>`

    inputEl.value=""

})
// for (let i=0; i<myLeads.length;i++){
//     ulEl.textContent+=inputEl.value
// }
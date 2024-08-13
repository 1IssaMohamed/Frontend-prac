let myLeads=[]
const inputBtn=document.getElementById("input-btn")
const delEl=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("unordered-list")



//refresh all the links right when the page opens (if there exist any links that is)
 const localStorageData=JSON.parse(localStorage.getItem("leads"))
if (localStorageData){
    myLeads=localStorageData
    render(myLeads)
}

delEl.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[]
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    // The reason I dont have to get all the items form storage is because I already did that before I entered this fucntion
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("leads",JSON.stringify(myLeads))
    render(myLeads)
})

inputEl.addEventListener("keydown", function(event){
    if(event.key=="Enter"){
        inputBtn.click();
    }
})

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]
tabBtn.addEventListener("click",function(){
        // verbose variant
        myLeads.push(window.location.href)
        render(myLeads)
    // function logTabs(tabs) {
    //     myLeads.push(tabs[0].url);
    //     localStorage.setItem("leads",JSON.stringify(myLeads))
    //     render(myLeads)
    // }
    
    // browser.tabs.query({currentWindow: true, active: true}).then(logTabs, console.error);
})

function render(leads){
    let listItems = ""
    for(let i=0; i< leads.length;i++){
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
    }
    // printint literally everythign from the localStorage isnt something you ALWAYS want to do, 
    // sometimes the vibes may just be to print everythging out from a single vairable...
    // for (let i = 0; i < localStorage.length; i++) {
    //     let key = localStorage.key(i);
    //     if (key==="leads"){
    //     let value = JSON.parse(localStorage.getItem(key));
    //         for (let j=0; j<value.length;j++){
    //             listItems += `
    //             <li>
    //                 <a target='_blank' href='${value[j]}'>
    //                     ${value[j]}
    //                 </a>
    //             </li>
    //         `
    //         }
    //     }
    //     else{
    //         let value = JSON.stringify(localStorage.getItem(key));
    //         listItems += `
    //             <li>
    //                 <a target='_blank' href='${value}'>
    //                     ${value}
    //                 </a>
    //             </li>
    //         `
    //     }
    ulEl.innerHTML = listItems  

    }


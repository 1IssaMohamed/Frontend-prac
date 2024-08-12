
const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy(){
    // 2 different ways to go about editing/mainpulating HTML elements in js

    // This makes more sense intuituively and easier to read so prolly shou8ld go with this 
    container.innerHTML += "<p>Thank you for buying!</p>"
    
    const par = document.createElement("p")
    par.textContent ="Thank you for buying!"
    container.append(par)
}
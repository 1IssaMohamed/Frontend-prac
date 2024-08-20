// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it

let totalPrice = "420.69235632455"
// totalPrice=totalPrice.toFixed(2)
// console.log(Number(totalPrice))

const btn = document.getElementById("buy-btn")
btn.textContent = `Buy € ${Number(totalPrice).toFixed(2) }`

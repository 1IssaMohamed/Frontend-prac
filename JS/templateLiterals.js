
// template strings/literals
// remind me of the f"{var}" from python so sorta familiar in a way 

const recipient = "James"
const sender="Albert"


// Refactor the email string to use template strings
// const email = "Hey " + recipient + "! How is it going? Cheers Per"
const email = ` Hey 
                ${recipient}! 
                How is it goign? Cheers 
                ${sender}`

console.log(email)
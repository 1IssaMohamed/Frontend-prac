// // Setup: I got my daughter a fridge for her birthday.
// Punchline: I can't wait to see her face light up when she opens it.

// ---

// Setup: How did the hacker escape the police?
// Punchline: He just ransomware!

// ---

// Setup: Why don't pirates travel on mountain roads?
// Punchline: Scurvy.

// ---

// Setup: Why do bees stay in the hive in the winter?
// Punchline: Swarm.

// ---

// Setup: What's the best thing about Switzerland?
// Punchline: I don't know, but the flag is a big plus!

// function Joke({setup , punchline }){
//     return(
//     <>
//         <h1>Setup: {setup}</h1>
//         <h1>Punchline: {punchline}</h1>
//     </>
//     )
// }
// or
// doing {joke} means youre destructring the array or " " (idk what the terminology is) but this is essenitally taking in the prop which is an object 
// and then youre breaking it down into its the vairables in the object
// this isnt really necessary, but just makes it easier to understand 
function Joke({ joke }) {
    return (
        <>
            <h1>Setup: {joke.setup}</h1>
            <h1>Punchline: {joke.punchline}</h1>
        </>
    )
}
export default Joke
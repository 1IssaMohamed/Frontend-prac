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
function Joke(props){
    return(
    <>
        <h1>Setup: {props.setup}</h1>
        <h1>Punchline: {props.punchline}</h1>

        <h1>Setup: {props.setup}</h1>
        <h1>Punchline: {props.punchline}</h1>
        
        <h1>Setup: {props.setup}</h1>
        <h1>Punchline: {props.punchline}</h1>

        <h1>Setup: {props.setup}</h1>
        <h1>Punchline: {props.punchline}</h1>

        <h1>Setup: {props.setup}</h1>
        <h1>Punchline: {props.punchline}</h1>
    </>
    )
}
export default Joke
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from "./components/Joke"
/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */

// put in actual jokes please lol

let jokeList = [
    { setup: "What do you call a lazy kangaroo?", punchline: "Pouch potato!" },
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
    { setup: "What did the ocean say to the beach?", punchline: "Nothing, it just waved!" },
    { setup: "Why did the bicycle fall over?", punchline: "Because it was two tired!" }
]




export default function App() {
    // want to take in the joke array 
    // map each and every single 1 seperately into the Joke prop

    // sending in 1 of these jokes 
    // const only1 = <Joke joke={jokeList[0]} />

    // mapping all the jokes this time 
    const manyJokes =
        // take in all the jokes -> push them into Joke component & joke prop 1 by 1 
        jokeList.map((singleJoke) => <Joke joke={singleJoke} />)



    return (
        <>
            {/* {only1} */}
            {manyJokes}
        </>
    )
}

import React from "react"
import Count from "./components/Count"
export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        // This could be ineffective if we have multiple calls to add() in a short time, because
        // this is becuase useState work by updating the state of the react component/system
        // and this all happens with asynch calls, so this entail that unlike synchronous code, the value of count is not updated IMM after calling setCount
        // asynch calls only care about the value at the current time
        // so if you have too many calls happeneing at once, you might overwhelm the sytem and th estate may get updated with an previous valeu multiple times of 2 or more.
        setCount(count+1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    /**
     * Challenge:
     * - Create a new component called `Count`
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the h2.count element below
     *      and display the incoming prop `number`
     * - Replace the h2.count below with an instance of
     *   the new Count component, passing the correct value
     *   to its `number` prop.
     * - After doing this, everything should be working the
     *   same as before.
     */

    return (
        <main className="container">
            <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>
                <Count number={count}/>
                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
        </main>
    )
}

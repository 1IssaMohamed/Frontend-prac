import React from "react"

export default function Pad(props) {
    const [on, setOn] = React.useState(props.on)
    
    return (
        <button 
            style={{backgroundColor: props.color}}
            // acutally changes the transparency
            className={props.on ? "on" : undefined}
            // ok this dosent work because, when react runs, beucase
            //When you write onClick={props.toggle}, you are passing a reference to the function.
            //  React will call props.toggle only when the button is clicked.
            // // But if you write onClick={props.toggle()}, you are calling the function immediately during render,
            //  and the result (usually undefined) is set as the click handler—so nothing happens on click.
            // THEN if you call on onClick= { ()=> props.toggle()} youre fine becuase now youre creating another function insdie of th eonlick 
            // and so youve returned to the previous state where its jus ta reference
            onClick={() => props.toggle(props.id, setOn)}
        ></button>
    )
}
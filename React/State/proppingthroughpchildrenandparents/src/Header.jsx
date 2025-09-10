import React from "react"
import avatar from "./ope ope.jpg"

export default function Header(props) {
    
    /**
     * Challenge:
     * Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */
    

    return (
        <header>
            <img id="avatar" width="50px"  src={avatar} />
            <p>{props.user}</p>
        </header>
    )
}

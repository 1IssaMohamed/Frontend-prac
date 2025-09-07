import React from 'react'
import starFilled from "../images/star-filled.png"
import starEmpty from "../images/star-empty.png"

function Star(props) {

    let isFilled = props.contact.isFavorite
    let star = isFilled ? starFilled : starEmpty
    let typeStar = isFilled ? "filled star icon" : "empty star icon"
    return (
        <>
            <button
                onClick={props.toggleFavourite}
                aria-label={isFilled? "Remove from favorites" : "Add to favorites"}
                aria-pressed={isFilled}
                className="favorite-button"
            >
                <img src={star} alt={typeStar} className="favorite"></img> 
                </button>
        </>
    );
}
export default Star;
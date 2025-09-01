import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    let star=contact.isFavorite?starFilled:starEmpty
    let typeStar=contact.isFavorite?"filled star icon":"empty star icon"
    function toggleFavorite(event) {
      event.preventDefault()
    //   ok so essentially wwhats happening here is that youre doing setContact ( function (prevContact){
    //  ( {..,prevContact, isFavorite:!prevContact.isFavourite })
    // })
    // in depth what is happening is that we are obv creating the prev contanct object as a parameter that were callign to the setContact function
    // Then we are usign ( ) to ensure taht java understands the { } as an object and not an expression/funciton. Usually () is just used for paramters or grouping things tho 
    // anothe alternative here would be to expand everythign and NOT use an arrow function which forces me to retun 1 line/object which woul dinturn allow me to do sum like let temp = {...prevContact, !isFav} or wtv
    // then we spread the ...preContact like so which essenitally seperates it into all of its key:item pairs, and we add th enew isFavorite value to the pairs
    // BUT in js each key can only appear once, so what ends up happing is the new isFavorite overrides the old isFavorite
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }));

    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        aria-pressed={contact.isFavorite}
                        className="favorite-button"
                    >
                        <img
                            src={star}
                            alt={typeStar}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact"> {contact.email} </p>
                </div>

            </article>
        </main>
    )
}

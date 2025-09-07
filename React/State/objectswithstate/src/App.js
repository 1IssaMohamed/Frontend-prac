import React from "react"
import avatar from "./images/user.png"
import Star from "./componenets/Star"
// import starFilled from "./images/star-filled.png"
// import starEmpty from "./images/star-empty.png"

export default function App() {

       /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display. (You'll
     *   need to import the 2 star icons into that new component first).
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    // let star=contact.isFavorite?starFilled:starEmpty
    // let typeStar=contact.isFavorite?"filled star icon":"empty star icon"
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
                        {/* print the star */}
                        <Star contact={contact} toggleFavourite={toggleFavorite}/>
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

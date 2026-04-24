import Path from '../../assets/Path.png';
import './Entry.css';
// Location:
// Japan

// Google Maps Link:
// https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu

// Dates:
// 12 Jan, 2021 - 24 Jan, 2021

// Text:
// Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
type TravelCardPros = {
    entry: {
        id: number;
        img: {
            src: string;
            alt: string;
        };
        country: string;
        title: string;
        googleMapsLink: string;
        dates: string;
        text: string;
    }
};
// so in a normal function you have:
// function (x,y,z) that takes in 3 differetn values
// but in react a function is allowed ONLY 1 argument
// And this argument is an object
// and this object will take in all the values you need 
// and then you access them on your own later
// ex I make a call to a fucntion that has looks liek thsi function testing(x) {}
// then I pass in from the client side somethign like testing(id=1, name="john", country="US")
// and then I can access thsi easily byu doing x.id or x.name or x.country as you please! 
// THIS is a prop or PROPERTIES!!!!!!! 

// in this case below we say {entry} which is known as destructuring which is just a fancy way of saying 
// get this value from here! 
// in python terms this would be like shapes[square], where it gets the value for you 
// so you dont need to say shapes.square.id or anything like that! 
// Otherwise I could technically just do TravelCardPros.entry.id etc thorughout this just simplifies things a bit, espeically when you get into 
// istuations where it gets more complex  ex: Travelprops.entry.img.src would be rewritten as entry.img.src which is just a bit cleaner 
function Entry({ entry }: TravelCardPros) {
    return (
        <div className='entry'>
            <div className="entry-img-container">
                <img src={entry.img.src} alt={entry.img.alt} className="entry-img" />
            </div>
            <div className="Content">
                <div className='location'>
                    <img src={Path} alt="Path" className="path-img" />
                    {'\u00A0'}{'\u00A0'}<p>     {entry.country}</p>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                    <a href={entry.googleMapsLink}>Google maps</a>
                </div>
                <h1>{entry.title}</h1>
                <h3>{entry.dates}</h3>
                <p>{entry.text}</p>
            </div>
        </div>
    )
};
export default Entry;
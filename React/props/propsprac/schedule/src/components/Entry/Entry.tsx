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
type TravelCardPros={
    id:number;
    viewImage: string;
    location: string;
    mapsLink: string;
    attraction: string;
    date : string;
    bio : string;
    alt :string;
};

function Entry({id,viewImage, location, mapsLink, attraction, bio, date, alt}: TravelCardPros){
    return(
        <div className='entry'>
            <div className="entry-img-container">
                <img src={viewImage} alt={alt} className="entry-img" />
            </div>
            <div className="Content">
                <div className='location'>
                    <img src={Path} alt="Path" className="path-img" />
                    {'\u00A0'}{'\u00A0'}<p>     {location}</p>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                    <a href={mapsLink}>Google maps</a>
                </div>
                <h1>{attraction}</h1>
                <h3>{date}</h3>
                <p>{bio}</p>
            </div>
        </div>
    )
};
export default Entry;
import globeimg from '../../assets/Globe.png'
// Cont with cleaning up the css and gettign the flexing to work

function Header() {
    return (
        <>
            <header>
                <img src={globeimg} alt="Globe" className="globe-img" />
                <h1>My travel journal.</h1>
            </header>
        </>
    )
}

export default Header


import travelLogo from '../images/Fill 213.png'

function NavBanner(){
    return(
        <div className='travelBanner'>
            <img className='bannerLogo' src={travelLogo} alt='banner'></img>
            <h1 className='bannerText'>my travel journal.</h1>
        </div>
    )
}

export default NavBanner;
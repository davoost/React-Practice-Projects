
import starIcon from './images/Star 1.png'

function Card(props){
    let badgeText
    if (props.item.openspots === 0){
        badgeText = "SOLD OUT"
    }
    else if (props.item.location === 'Online'){
        badgeText = 'ONLINE'
    }
    return(
        <div className='card-container'>
            {badgeText !== undefined && <div className='card--badge'>{badgeText}</div>}
            <img className='card--image' src={require(`./images/${props.item.img}`)} alt='gallery'></img>
            <div className='card--stats'>
            <img className='card--star' src={starIcon} alt='star'></img>
            <span>{props.item.rating}</span>
            <span className='grey'>({props.item.reviews})</span>
            <span className='grey'>- {props.item.location}</span>
            </div>
            <p className='titleText'>{props.item.title}</p>
            <p className='priceText'><span className='bold'>From {props.item.price}</span> / person</p>
        </div>
    )
}

export default Card;
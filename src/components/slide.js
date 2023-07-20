import pathIcon from '../images/Path.png'

function Slide(props){
    return(
        <div className='slide--whole'>
            <img className='slide--image' src={require(`../images/${props.item.imageUrl}`)} alt='gallery'></img>
        <div className = 'slide--textbox'>    
        <div className='slide--locationData'>
            <img className='slide--pathicon' src={pathIcon} alt='icon'></img>
            <h3 className='slide--location'>{props.item.location}</h3>
            <a className='slide--locationlink' href={props.item.googleMapsUrl}> View on Google Maps</a>
        </div>
            <h2 className='slide--title'>{props.item.title}</h2>
            <h4 className='slide--dates'>{props.item.startDate} - {props.item.endDate}</h4>
            <p className='slide--description'>{props.item.description}</p>
        </div>
        <hr className='slide--line'></hr>
        </div>
    )
}

export default Slide;
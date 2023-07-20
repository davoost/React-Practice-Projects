import StarEmpty from '../images/star-empty.png'
import StarFilled from '../images/star-filled.png'

function Star(props){
    return(
        <div>
            <img 
            src={props.isFilled ? StarFilled : StarEmpty} 
            alt='star'
            onClick = {props.handleClick}
            ></img>
        </div>
    )
}

export default Star;


function Dice(props){
    const background_colour = props.isHeld ? '#59E391': '#FFFFFF'
    return(
        <div 
        className='tenzies--dice' 
        style={{background:background_colour}} 
        onClick={props.diceClick}>
        <h2>{props.value}</h2>
        </div>
    )
}

export default Dice
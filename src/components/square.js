

function Square(props){
  
    return(
        <div 
        className="square" 
        style={{top:`${props.y - 5}px`, left:`${props.x - 5}px`, backgroundColor:'black', color:'red'}}
        //onClick={() => props.clickHandler(props.id)}
        >{props.number}</div>
    )
}

export default Square
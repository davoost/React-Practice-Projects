

function Answer(props){
    let styles = props.isSelected ? '#D6DBF5' : '#F5F7FB'
    return(
        <div>
            <p className='question--answer' 
            style={{background: styles}}
            onClick={()=>props.handleSelected(props.id)}>{props.answer}</p>
        </div>
    )
}

export default Answer;
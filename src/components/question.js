

function Question(props){
    let question = props.question
    return (
        <div>
            <h1 className='question--title'>{question}</h1>
        </div>
    )
}

export default Question
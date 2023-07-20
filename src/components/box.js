import '../app-boxes.css'
import React from 'react'

function Box(props){
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }

    return(
        <div>
            <div onClick={() => props.clickHandler(props.id)} className="box" style={styles}>
            </div>
        </div>
        )
}

export default Box;
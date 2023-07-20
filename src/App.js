import React from 'react'
import Square from './components/square'
import './app-squares.css'


function App(){

    const [livingSquares, setLivingSquares] = React.useState([])

    function handleSelected(event){
        let x = Math.round(event.clientX/10)*10
        let y = Math.round(event.clientY/10)*10
        for(let i=0; i<livingSquares.length; i++){
            if (livingSquares[i][0] != x &&
                livingSquares[i][1] != y){
                setLivingSquares(prevState => {
                    return [...prevState]
                })
            }
        }
        console.log('i didn stop')
        setLivingSquares(prevState=> {
            console.log(livingSquares)
            return [...prevState, 
                [x, y]]})
    }

    let squareElements = livingSquares.map((item, index)=>{
        return <Square x={item[0]} y={item[1]} number={index}></Square>
    })

    function gameStart(){
        for (let i=0; i<livingSquares.length; i++){
            let arrayItem = livingSquares[i] //the thing we want to check
            let newArray = livingSquares
            let count = 0 //all the livingSquares minus item
            for (let j=0; j<newArray.length; j++){
                //check the right square
                if(newArray[j][0] + 10 === arrayItem[0] &&
                    newArray[j][1] === arrayItem[1]){
                        count++
                    }
                //check the left square
                else if(newArray[j][0] - 10 === arrayItem[0] &&
                    newArray[j][1] === arrayItem[1]){
                        count++
                    }
                //check the up square
                else if(newArray[j][0]  === arrayItem[0] &&
                    newArray[j][1] + 10 === arrayItem[1]){
                        count++
                    }
                //check the down square
                else if(newArray[j][0] === arrayItem[0] &&
                    newArray[j][1] - 10 === arrayItem[1]){
                        count++
                    }
                //check the up left square
                else if(newArray[j][0] - 10 === arrayItem[0] &&
                    newArray[j][1] + 10 === arrayItem[1]){
                        count++
                    }
                //check the up right square
                else if(newArray[j][0] + 10 === arrayItem[0] &&
                    newArray[j][1] + 10  === arrayItem[1]){
                        count++
                    }
                //check the down left square
                else if(newArray[j][0] - 10 === arrayItem[0] &&
                    newArray[j][1] - 10 === arrayItem[1]){
                        count++
                    }
                //check the down right square
                else if(newArray[j][0] + 10 === arrayItem[0] &&
                    newArray[j][1] - 10 === arrayItem[1]){
                        count++
                    }
            }
            console.log('item '+i+ ' in array has '+count+' items around it')
        }
    }

    return(
        <div>
            <div className='screen' onClick={handleSelected}>
            {squareElements}
            </div>
            <button onClick={gameStart}>Start the game!</button>
        </div>
    )
}

export default App
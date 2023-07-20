import './app-tenzies.css'
import Dice from './components/dice'
import React from 'react'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function App(){
    const [tenzies, setTenzies] = React.useState(false)
    const [diceArray, setDiceArray] = React.useState(allNewDice())

    React.useEffect(()=> {
        const allHeld = diceArray.every(die => die.isHeld)
        const firstValue = diceArray[0].value
        const allSameValue = diceArray.every(die => die.value === firstValue)
        if (allHeld & allSameValue){
            setTenzies(true)
        }
    }, [diceArray])

    function allNewDice(){
        const newDice = []
        for (let i=0; i <10; i++){
            newDice.push({
                value: Math.ceil(Math.random()*6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function handleClick(){
        //roll click
        if (tenzies){
            setTenzies(false)
            setDiceArray(allNewDice())
        }
        else
        {const newDice =[]
        for(let i=0; i<10; i++){
            if (diceArray[i].isHeld){
                newDice.push(diceArray[i])
            }
            else{
                newDice.push({
                    value: Math.ceil(Math.random()*6),
                    isHeld: false,
                    id: diceArray[i].id
                })
            }
        }
        setDiceArray(newDice)}
    }

    const DiceElements = diceArray.map(die => <Dice 
        key={die.id}
        id={die.id} 
        value={die.value} 
        isHeld={die.isHeld}
        diceClick={()=>diceClick(die.id)}
        ></Dice>)

    function diceClick(id){
        setDiceArray(prevState => prevState.map(die => {
                return die.id === id ? 
                {...die, isHeld: !die.isHeld} : die
        }))}

    return(
        <div className='tenzies'>
            <main className='tenzies--board'>
                {tenzies && <Confetti></Confetti>}
                <h1 className='tenzies--title'>Tenzies</h1>
                <p className='tenzies--instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className='tenzies--diceContainer'>
                {DiceElements}
                </div>
                <button className='tenzies--button' onClick={handleClick}>{tenzies ? 'New Game':'Roll'}</button>
            </main>
        </div>
    )
}

export default App
import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data2"
import Split from "react-split"
import {nanoid} from "nanoid"
import './app-notes.css'

export default function App() {
    const [notes, setNotes] = React.useState(()=>
        JSON.parse(localStorage.getItem("notes")) || [])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    React.useEffect(()=> {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        setNotes(oldNotes => {
            const newArray = []
            for (let i = 0; i <oldNotes.length; i++){
                const oldNote = oldNotes[i] 
                if (oldNote.id === currentNoteId){
                    newArray.unshift({...oldNote, body: text})}
                else {
                    newArray.push(oldNote)
                }
                }
            return newArray
            }
        )
        
        /*
        setNotes(oldNotes => oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId
                ? { ...oldNote, body: text }
                : oldNote
        }))
        */
    }
    


    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}


/*

import React from 'react'
import Square from './components/square'
import './app-squares.css'

function App(){
    let squares = [0]

    function logLocation(event){
        console.log('clicked')
        let new_x = (Math.round(event.clientX/10))*10
        let new_y = (Math.round(event.clientY/10))*10
        {<Square
            key={squares.length}
            x={new_x}
            y={new_y}
            ></Square>}
        squares.push(squares.length)
    }

    return(
        <div className='screen' onClick={logLocation}>
        </div>
    )
    }

export default App

function App(){
    const [squares, setSquares] = React.useState([])

    function logLocation(event){
        let new_x = (Math.round(event.clientX/10))*10
        let new_y = (Math.round(event.clientY/10))*10
        setSquares((prevSquares) => [...prevSquares, 
            {key: squares.length,
            x:new_x,
            y:new_y}]);
    }

    const squareElements = squares.map((square) => 
        (<Square
            key={square.key}
            x={square.x}
            y={square.y}
            ></Square>))

    return(
        <div className='screen' onClick={logLocation}>
        {squareElements}
        </div>
    )
    }

export default App

function SquareAbove(another_x, another_y, this_key){
            setSquares((prevSquares) => 
        [...prevSquares, 
            {key: this_key,
            x:another_x,
            y:another_y}
        ]);

//for (let i=1; i<6; i++){
          //  setInterval(SquareAbove(new_x, new_y+(i*10), squares.length + i), 500)
    //    }

<Square x={x} y={y}></Square>

import './app.css';
import MemeHeader from "./components/memeheader";
import MemeBody from "./components/memebody";

function App(){
    return(
        <div>
            <MemeHeader></MemeHeader>
            <MemeBody></MemeBody>
        </div>
    )
}

export default App;
export default function App(){

    const [isGoingOut, setIsGoingOut] = React.useState(true)
    
    function handleClick(){
        setIsGoingOut(function(oldValue){
            return (!oldValue)
        })
    }

    return(
        <div onClick={handleClick}>
            <h1>Do I feel like going out?</h1>
            <h1>{isGoingOut ? 'yes' : 'no'}</h1>
        </div>
    )
}

export default App;






import React from "react";
import Counter from './components/count'

function App(){
    const [count, setCount]= React.useState(0)

    function handleClickUp(){
        setCount(function(oldValue){
            return oldValue +1
        })
    }
    function handleClickDown(){
        setCount(function(oldValue){
            return oldValue -1
        })
    }
    return(
        <div>
            <h1>Count Machine</h1>
            <div>
                <Counter number={count}></Counter>
                <button onClick={handleClickUp}>plus</button>
                <button onClick={handleClickDown}>minus</button>
            </div>
        </div>
    )
}

export default App

import React from 'react'
import Star from './components/star'

function App(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "191829281918",
        email: "91819101",
        isFavorite: true
    })

    function toggleFavorite(){
        setContact(function(prevContact){
            return {
                ...prevContact,
                isFavorite: !contact.isFavorite
            }
        })
    }

    return(
        <div>
            <button>Who are you?</button>
            <h1>{contact.firstName + ' ' + contact.lastName}</h1>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}></Star>
        </div>
    )
}
export default App;


import React from 'react'
import Header from './components/header2'
import Body from './components/body2'

function App(){
    const [user,  setUser]  = React.useState("David")

    return(
        <div>
            <Header person={user}></Header>
            <Body person={user}></Body>
        </div>
    )
}

export default App

setSquares(prevSquares=>{
            const newSquares = []
            for (let i=0; i<prevSquares.length; i++){
                const currentSquare = prevSquares[i]
                if (currentSquare.id === id){
                    const updatedSquare = {
                    ...currentSquare,
                    on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                }
                else{
                    newSquares.push(currentSquare)
                }
            }
            return newSquares

import React from 'react'
import './app-boxes.css'
import {boxes} from "./boxes"
import Box from "./components/box"

function App(){
    const [squares, setSquares] = React.useState(boxes) 
    
    function toggle(id){
        setSquares(prevSquares=>{
            return prevSquares.map((square)=> {
                return square.id === id ? {...square, on: !square.on} : square
            })
    })
    }
    const squareElements = squares.map(square => 
        (<Box
            key={square.id}
            id={square.id}
            darkMode={square.on}
            clickHandler={toggle}
            ></Box>))
    return (
        <main>
            {squareElements}
        </main>
    )
}

export default App


import React from 'react'

function App(){
    const [names, setNames] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isFriendly: true,
        employment: "",
        favColor: ""
    })

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setNames(prevState => {
            return{
                ...prevState,
                [name] : type === 'checkbox' ? checked:value
            }
        })
        }
    
    function handleSubmit(event){
        event.preventDefault()
        console.log(names)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            name = 'firstName'
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={names.firstName}
            >
            </input>
            <input
            name = 'lastName'
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={names.lastName}
            >
            </input>
            <input
            name = 'email'
            type="text"
            placeholder="email"
            onChange={handleChange}
            value={names.email}
            >
            </input>
            <textarea
            value={names.comments}
            onChange={handleChange}
            name= 'comments'
            ></textarea>
            <input 
            type='checkbox'
            id='isFriendly'
            checked={names.isFriendly}
            onChange = {handleChange}
            name = 'isFriendly'
            ></input>
            <label htmlFor='isFriendly'>Are you friendly?</label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                type='radio'
                id='unemployed'
                name='employment'
                value='unemployed'
                onChange={handleChange}
                checked={names.employment === 'unemployed'}
                ></input>
                <label htmlFor='unemployed'>Unemployed</label>
                <br />
                <input 
                type='radio'
                id='part-time'
                name='employment'
                value='part-time'
                onChange={handleChange}
                checked={names.employment === 'part-time'}
                ></input>
                <label htmlFor='part-time'>part-time</label>
                <br />
                <input 
                type='radio'
                id='full-time'
                name='employment'
                value='full-time'
                onChange={handleChange}
                checked={names.employment === 'full-time'}
                ></input>
                <label htmlFor='full-time'>full-time</label>
                <br />
            </fieldset>
            <br />

            <label htmlFor='favColor'>What is your favourite colour?</label>
            <br />
            <select 
            id='favColor'
            value={names.favColor}
            onChange={handleChange}
            name='favColor'
            >
                <option value=''>--choose--</option>
                <option value='red'>Red</option>
                <option value='orange'>Orange</option>
                <option value='yellow'>Yellow</option>
                <option value='green'>Green</option>
                <option value='blue'>Blue</option>
                <option value='indigo'>Indigo</option>
                <option value='violet'>Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}

export default App;

import React from 'react'
import './app-signup.css'

function App(){
    const [user, setUser] = React.useState({
        username: '',
        userPassword: '',
        userPasswordConfirm: '',
        userNewsletter: false
    })

    function handleSubmit(event){
        event.preventDefault()
        if(user.userPassword === user.userPasswordConfirm){
            console.log("Successfully signed up")
        }
        else{
            console.log("Passwords do not match")
        }
        if (user.userNewsletter && user.userPassword === user.userPasswordConfirm){
            console.log("Thanks for signing up to our newsletter!")
        }
    }

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setUser(prevState => {
            return{
                ...prevState,
                [name] : type === 'checkbox' ? checked:value
            }
        })
    }

    return (
        <div className='container'>
        <div className='userForm'>
            <form onSubmit={handleSubmit}>
                <input 
                className='userForm--textinput'
                type='text'
                placeholder='username'
                name='username'
                onChange={handleChange}
                value={user.username}
                ></input>
                <input
                className='userForm--textinput'
                type='text'
                placeholder='new password'
                name='userPassword'
                onChange={handleChange}
                value={user.userPassword}
                ></input>
                <input
                className='userForm--textinput'
                type='text'
                placeholder='confirm password'
                name='userPasswordConfirm'
                onChange={handleChange}
                value={user.userPasswordConfirm}
                ></input>
                <input
                type='checkbox'
                id='userNewsletter'
                className="userForm--checkbox"
                name='userNewsletter'
                onChange={handleChange}
                checked={user.userNewsletter}
                ></input>
                <label>I want to join the newsletter</label>
                <button 
                onClick={handleSubmit}
                className='userForm--button'
                >Sign up</button>
            </form>
        </div>
        </div>
    )
}

export default App

import React from 'react'

export default function App(){
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    console.log('component rendered')

    //side effects - fetch considered side effect happens outside react
    //useEffect requires a function 
    React.useEffect(function(){
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))

    }, [count])//dependencies array. 

    function handleClick(){
        setCount(prevCount => prevCount+1)
    }

    return (
        <div>
            <h1>The count is {count}</h1>
            <button onClick={handleClick}>Get next character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

import React from 'react'
import WindowTracker from './components/windowtracker'

function App(){
    const[show, setShow] = React.useState(true)

    function handleClick(){
        setShow(prevState => !prevState)
    }
    return(
        <div>
            <button onClick={handleClick}>Toggle WindowTracker</button>
            {show && <WindowTracker></WindowTracker>}
        </div>
    )
}
export default App

*/
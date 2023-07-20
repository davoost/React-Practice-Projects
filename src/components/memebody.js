import React from 'react'
import {memeData} from "../meme-data";

function MemeBody(){
    const [allMemes, setAllMemes] = React.useState({
        memes:{},
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    React.useEffect(function(){
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(prevState => {
            return {
            ...prevState,
            memes: {data}
            }
        }))
    }, [])

    function handleChange(event){
        const{name, value} = event.target
        setAllMemes(prevState => {
            return{
                ...prevState,
                [name] : value}})
    }

    function getMemeImage(){
        const memesArray = allMemes.memes.data.data.memes
        const random = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[random].url
        setAllMemes(function(prevMeme){
            return {...prevMeme,
                randomImage: url
            }
        })
        }

    return(
        <main className='memeBody'>
            <div className='form'>
                <input 
                type="text" 
                className='form--inputs' 
                placeholder='write your top meme'
                name='topText'
                value={allMemes.topText}
                onChange={handleChange}
                ></input>
                <input 
                type="text" 
                className='form--inputs' 
                placeholder='write the bottom meme'
                name='bottomText'
                value={allMemes.bottomText}
                onChange={handleChange}
                ></input>
                <button onClick={getMemeImage} className='memebody--button'>Get a new meme image</button>
            </div>
            <div className="meme">
            <img className='meme--image' src={allMemes.randomImage} alt='memeImg'></img>
            <h2 className='meme--topText'>{allMemes.topText}</h2>
            <h2 className='meme--bottomText'>{allMemes.bottomText}</h2>
            </div>
        </main>
    )
}

export default MemeBody
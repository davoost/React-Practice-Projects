import trollFace from '../images/Troll Face.png'

function MemeHeader(){
    return(
        <div className='header'>
            <img className='headerImg' src={trollFace} alt='troll'></img>
            <h1 className='headerTitle'>Meme Generator</h1>
            <h2 className='headerText'>React Course - Project 3</h2>
        </div>
    )
}

export default MemeHeader
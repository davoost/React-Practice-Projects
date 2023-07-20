import topImages from './images/Group-77.png'

function Top(){
    return(
        <section className="hero">
            <img className='hero--photo' src={topImages} alt="a load of people"></img>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </section>
    );
}

export default Top;
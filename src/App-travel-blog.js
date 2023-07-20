
import './app.css';
import NavBanner from './components/navbanner'
import Slide from './components/slide'
import {traveldata} from './traveldata'
//import MainContent from './maincontent'
//import Header from './header'

function App(){
    const slides = traveldata.map((item) => {
        return <Slide
        key = {item.id}
        item = {item}
        ></Slide>}
        )
    console.log(slides)
    return(
        <div>
            <NavBanner></NavBanner>
            <div className='slides'>
                {slides}
            </div>
        </div>
    )
}
export default App;

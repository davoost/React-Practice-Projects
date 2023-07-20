
import './app.css';
import NavBar from './components/navbar'
import Top from './components/top-section'
import Card from './components/card'
import {data} from './data'
//import MainContent from './maincontent'
//import Header from './header'

function App(){
    const cards = data.map((item) => {
        return <Card
        key = {item.id}
        item = {item}
        ></Card>})
    return(
        <div>
            <NavBar></NavBar>
            <Top></Top>
            <div className='cards'>
                {cards}
            </div>
        </div>
    )
}
export default App;

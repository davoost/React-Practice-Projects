
import './App-static-page.css';
import MainContent from './components/maincontent'
import Header from './components/header'
import React from 'react'

function AppStaticPage(){
    const [darkMode, setDarkMode] = React.useState(false)
    function toggleDarkMode(){
        setDarkMode(prevState => !prevState)
    }
  
    return(
        <div>
            <Header darkMode={darkMode} handleClick={toggleDarkMode}></Header>
            <MainContent darkMode={darkMode}></MainContent>
        </div>
        )
}
export default AppStaticPage;
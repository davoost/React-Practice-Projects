
import reactLogo from "../images/logo192.png"

function Header(props){
    let mode = props.darkMode ? 'dark' : 'light'
return (
        <nav className={`nav ${mode}nav`}>
            <img className='logo' src={reactLogo} alt='a logo'></img>
            <h3>ReactFacts</h3>
            <p className={`${mode}light-switch`}>light</p>
            <label className={`switch`}>
                <input type="checkbox" onClick={props.handleClick}></input>
                <span className={`slider round slider-${mode}`}></span>
            </label>
            <p className={`${mode}dark-switch`}>dark</p>
        </nav>
)
}


export default Header
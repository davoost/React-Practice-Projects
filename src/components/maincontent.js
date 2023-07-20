
function MainContent(props){
    let mode = props.darkMode ? 'dark' : 'light'
    return (
        <div className={`${mode}maincontent-container maincontent-container`}>
            <h2 className={`title ${mode}title`}>Fun facts about React</h2>
        <ul className={`list-stuff ${mode}list-stuff`}>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
            
        </div>
    )
}

export default MainContent
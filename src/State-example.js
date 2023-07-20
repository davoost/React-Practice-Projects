import React from 'react';

function App(){
    const [things, setThings] = React.useState(["thing 1", "thing 2"])
    
    function addThing(){
        const newThingText = `thing ${things.length +1}`
        setThings(prevState => [...prevState, newThingText])
    }

    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    return(
        <div>
            <button onClick={addThing}>Add Item</button>
            {thingsElements}
        </div>
    )
}

export default App;
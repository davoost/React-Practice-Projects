import { useState } from "react";

function AddItem(props){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const addItemButtonPressed = () => {
        props.AddItem({
                name: name, 
                price: price, 
                type: type, 
                brand: brand
            });
            setName("");
            setPrice(0);
            setType("");
            setBrand("");
    };

    return (
        <div className = 'containter'>
            <div className = 'row'>
            <h2>Add an Item</h2>
            </div>
            <div className = 'row'>
                <label htmlFor="name-field">Name: </label>
                <input 
                    id="name-field"
                    className = 'form-control'
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor="price-field">Price: </label>
                <input 
                    id="price-field" 
                    className = 'form-control'
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}>
                    </input>
                <label htmlFor="type-field">Type: </label>
                <input 
                    id="type-field" 
                    className = 'form-control'
                    type="text" 
                    value={type}  
                    onChange={(e) => setType(e.target.value)}></input>
                <label htmlFor="brand-field">Brand: </label>
                <input 
                    id="brand-field" 
                    className = 'form-control'
                    type="text" 
                    value={brand}  
                    onChange={(e) => setBrand(e.target.value)}></input>
            </div>
            <div className = 'row mt-3'>
                <button type="button" className = 'btn btn-primary' onClick={addItemButtonPressed}>Add</button>
                </div>
        </div>
    )
}

export default AddItem;
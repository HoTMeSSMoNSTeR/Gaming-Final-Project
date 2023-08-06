import React from 'react'
import { useState } from 'react'

export default function WishlistForm (props) {
    props.onSubmit
    const [newItem, setNewItem] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault();
        const data={newItem}

        if(newItem === "") return

        props.onSubmit(newItem)
       
        setNewItem("")
    }

    return (
        <form className='new-item-form'>
        <div>
            <label htmlFor='item' className='form-label'>New Wishlist Item</label>
            <input
            className='form-control-lg'
            type='text'
            id='item'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}>
            </input>
        </div>
        <button
        onClick={handleSubmit} 
        className='all-buttons'>
            Wish!
        </button>
    </form>
    )
}
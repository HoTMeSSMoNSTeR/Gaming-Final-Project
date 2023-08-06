import React from 'react'
import { useState } from 'react'

export default function Wishlist() {
    const [newItem, setNewItem] = useState("")
    const [myWishlist, setmyWishlist] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        const data={newItem}

        setmyWishlist((currentmyWishlist) => {
            return [
                ...currentmyWishlist,
                { id: crypto.randomUUID(), title:newItem, completed:false},
            ]
        })
        setNewItem("")
    }

function toggleList(id, completed) {
    setmyWishlist(currentmyWishlist => {
        return currentmyWishlist.map(myWishlist => {
            if(myWishlist.id === id) {
                return { ...myWishlist, completed}
            }
        })
    })
}

function deleteItem(id) {
    setmyWishlist(currentmyWishlist => {
        return currentmyWishlist.filter(myWishlist => myWishlist.id !== id) 
    })
}

    return(
        <div>
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
        <h4>Wishlist...</h4>
        <ul>
            {myWishlist.map(myWishlist => {
                return (
                    <li key={myWishlist.id} className='wishlist-item'>
                        <label>
                            <input type="checkbox" 
                            checked={setmyWishlist.completed}
                            onChange={e => toggleList(myWishlist.id, e.target.checked)} />
                            {myWishlist.title}
                        </label>
                <button
                onClick={() => deleteItem(myWishlist.id)} 
                className='del-btn'>
                    DELETE
                 </button>
            </li>
                )
            }) 
            }
            
        </ul>
        </div>
    )
}
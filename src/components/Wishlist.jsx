import React from 'react'
import { useState } from 'react'
import WishlistForm from './WishlistForm';

export default function Wishlist() {
    const [myWishlist, setmyWishlist] = useState([])

function addWishItem(title) {
    setmyWishlist((currentmyWishlist) => {
        return [
            ...currentmyWishlist,
            { id: crypto.randomUUID(), title, completed:false},
        ]
    })
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
            <WishlistForm onSubmit={addWishItem} />
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
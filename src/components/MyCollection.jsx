import React from 'react';
import { useState } from 'react';
// import '../index.css'

export default function MyCollection() {
const [myGames, setMyGames] = useState("")
const [myPlatform, setMyPlatform] =useState("")
const [myGamesList, setMyGamesList] = useState([])

const handleSubmit = (e) => {
    e.preventDefault();
        console.log(myGames)
        console.log(myPlatform)
    const data={myGames}
    const platformData={myPlatform}
        if(myGames && myPlatform) {
            setMyGamesList((ls) => [...ls, data, platformData] )
            setMyGames("")
            setMyPlatform("")
        }
}

    return (
        <div className='mb-3'>
            <h2>Game Collections</h2>
        <form className='add-game-form'
            onSubmit={handleSubmit}>
                <label htmlFor='my-game-form'>Name of Game:</label>
                <input
                id='my-game-form'
                name='my-games' 
                placeholder='Game Name'
                type='text'
                value={myGames}
                onChange={(e) => setMyGames(e.target.value)}
                className='form-control-lg'>
                </input>
                <label htmlFor='platform'></label>
                <input
                id='platform'
                name='my-platform'
                placeholder='Platform Name'
                type='text'
                value={myPlatform}
                onChange={(e) => setMyPlatform(e.target.value)}
                className='form-control-lg'>
                </input>
                <button className='all-buttons'>Add Game!</button>
        </form>
        <div className='see-what-i-type'>
            <p>{myGames} {myPlatform}</p>
        </div>
        <h4>My Game List</h4>
        {
            myGamesList.map((a) => 
            <div className='my-game-list'>
                <li className='game-added'>{a.myGames}</li>
                <li className='game-added'>{a.myPlatform}</li>
            </div>
            )
        }
        </div>
    )
}
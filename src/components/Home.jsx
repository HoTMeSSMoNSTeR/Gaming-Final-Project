import React from 'react'
import Gamecard from './Gamecard'
import '../index.css'
import Gamelist from './Gamelist'

export default function Home() {
    const data = Gamelist.map(game => {
        return <Gamecard
          key={game.id} 
          {...game}
           />
      })

    return (
        <>
            <h1>
                Explore your next game to play or build your collection!
            </h1>
            <div className='flex-container'>
                {data}
            </div>
        </>

    )
}
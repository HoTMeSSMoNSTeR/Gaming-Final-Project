import React from 'react'
import App from './App'
import {BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import PlayerCard from './components/PlayerCard'
import Collections from './components/Collections'
import Streaming from './components/Streaming'


export default function Navbar() {
    return (
            <BrowserRouter>
            <nav className='nav'>
                <Link to='/' className='site-title'>SPUNK</Link>
                <Link to='/PlayerCard' className='links'>Player Card</Link>
                <Link to='/Collections' className='links'>Collections</Link>
                <Link to='/Streaming' className='links'>Streaming</Link>
                <Link to='https://www.twitch.tv/' className='links'>Head to TWITCH</Link>
            </nav>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/PlayerCard" element={<PlayerCard />} />
            <Route path="/Collections" element={<Collections />} />
            <Route path="Streaming" element={<Streaming />} />
        </Routes>
        </BrowserRouter>

    ) 
    
}
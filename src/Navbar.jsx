import React from 'react'
import App from './App'
import {BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import PlayerCard from './components/PlayerCard'
import Collections from './components/Collections'
import Streaming from './components/Streaming'
import Home from './components/Home'


export default function Navbar() {
    return (
            <>
                <nav className='navbar navbar-expand'>
                    <Link to='/Home' className='site-title'>SPUNK</Link>
                    <Link to='/PlayerCard' className='links'>Player Card</Link>
                    <Link to='/Collections' className='links'>Collections</Link>
                    <Link to='/Streaming' className='links'>Streaming</Link>
                    <Link to='https://www.twitch.tv/' className='links'>Head to TWITCH</Link>
                </nav>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/PlayerCard" element={<PlayerCard />} />
                    <Route path="/Collections" element={<Collections />} />
                    <Route path="Streaming" element={<Streaming />} /> 
                </Routes> 
            </>

    ) 
    
}


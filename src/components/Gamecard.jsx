import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'


export default function Gamecard(props) {
    return (
        <>
        <div className='game-card card'>
            <img className='card-img-top img-fluid gc-img' src={props.imageURL} alt={props.alt}></img>
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-subtitle mb-2 basic-info'>Rating: {props.rating}</p>
            <p className='card-subtitle mb-2 basic-info'>Released: {props.release}</p>
            <p className='card-subtitle mb-2 basic-info'>{props.genre}</p>
            <p className='card-text gc-description'>{props.description}</p>
            <p className='card-subtitle mb-2 gc-platforms'>Platforms:{props.platforms}</p>
        </div>
        </>
    )
}
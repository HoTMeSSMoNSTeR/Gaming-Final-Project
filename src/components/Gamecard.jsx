import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'


export default function Gamecard(props) {
    return (
        <>
        <div className='game-card card'>
            <img className='card-img-top img-fluid gc-img' src={props.imageURL} alt={props.alt}></img>
            <div>
                <h2 className='card-title gc-title'>{props.name}</h2>
                <p className='card-subtitle mb-0.5 basic-info'>Rating: {props.rating}</p>
                <p className='card-subtitle mb-0.5 basic-info'>Released: {props.release}</p>
                <p className='card-subtitle mb-0.5 basic-info'>{props.genre}</p>
                <p className='card-text gc-description'>{props.description}</p>
                <p className='card-subtitle mb-0.5 gc-platforms'>Platforms:{props.platforms}</p>
            </div>

        </div>
        </>
    )
}
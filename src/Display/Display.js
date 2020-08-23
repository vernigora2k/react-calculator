import React from 'react'
import './Display.css'

export default function Display({ currentNumber }) {
    return (
        <div className='display'>
            <form className='dispalay__form'>
                <input className='display__input' value={currentNumber}>

                </input>
            </form>
        </div>
    )  
}
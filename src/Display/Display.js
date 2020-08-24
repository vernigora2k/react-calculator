import React from 'react'
import './Display.css'

export default function Display({ result }) {

    return (
        <div className='display'>
            <form className='dispalay__form'>
                <input className='display__input' value={result} >
                    
                </input>
            </form>
        </div>
    )  
}
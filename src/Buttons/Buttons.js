import React from 'react'
import './Buttons.css'

export default function Buttons() {
    return (
        <div className='buttons'>
            <div className='buttons__num'>
                <button className='btn'>7</button>
                <button className='btn'>8</button>
                <button className='btn'>9</button>
                <button className='btn'>4</button>
                <button className='btn'>5</button>
                <button className='btn'>6</button>
                <button className='btn'>1</button>
                <button className='btn'>2</button>
                <button className='btn'>3</button>
                <button className='btn'>0</button>
                <button className='btn'>.</button>
            </div>
            <div className='buttons__func'>
                <button className='btn'>+</button>
                <button className='btn'>-</button>
                <button className='btn'>*</button>
                <button className='btn'>/</button>
                <button className='btn'>%</button>
                <button className='btn'>=</button>
                <button className='btn'>c</button>
            </div>
        </div>
    )
}
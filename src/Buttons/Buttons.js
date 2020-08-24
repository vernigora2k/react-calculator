import React from 'react'
import './Buttons.css'

export default function Buttons({ btnClick }) {
    function handleSubmit(e) {
        e.preventDefault()
        btnClick(e.target.name)
    }

    return (
        <div className='buttons'>
            <div className='buttons__num'>
                <button name={7} className='btn' onClick={handleSubmit}>7</button>
                <button name={8} className='btn' onClick={handleSubmit}>8</button>
                <button name={9} className='btn' onClick={handleSubmit}>9</button>
                <button name={4} className='btn' onClick={handleSubmit}>4</button>
                <button name={5} className='btn' onClick={handleSubmit}>5</button>
                <button name={6} className='btn' onClick={handleSubmit}>6</button>
                <button name={1} className='btn' onClick={handleSubmit}>1</button>
                <button name={2} className='btn' onClick={handleSubmit}>2</button>
                <button name={3} className='btn' onClick={handleSubmit}>3</button>
                <button name={0} className='btn' onClick={handleSubmit}>0</button>
                <button name='.' className='btn' onClick={handleSubmit}>.</button>
            </div>
            <div className='buttons__func'>
                <button name='+' className='btn' onClick={handleSubmit}>+</button>
                <button name='-' className='btn' onClick={handleSubmit}>-</button>
                <button name='*' className='btn' onClick={handleSubmit}>*</button>
                <button name='/' className='btn' onClick={handleSubmit}>/</button>
                <button name='%' className='btn' onClick={handleSubmit}>%</button>
                <button name='=' className='btn' onClick={handleSubmit}>=</button>
                <button name='c' className='btn' onClick={handleSubmit}>c</button>
            </div>
        </div>
    )
}
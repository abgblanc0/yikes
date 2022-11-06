import React from 'react'
import ReactDOM from 'react-dom/client'
import Cell from './Cell'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <>
    <div className='board'>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
    </div>
    </>
)

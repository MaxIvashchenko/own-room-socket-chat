import React from 'react'
import closeIcon from '../../icons/close.png'
export default function NotFound() {
    return (
        <div className="NotFound">
            <h1>PAGE NOT FOUND</h1>
            <a href="/">
               <p> click here</p> 
               <img src={closeIcon} alt="close icon" /> 
               <p>to return on the main page</p>
            </a>
        </div>
    )
}

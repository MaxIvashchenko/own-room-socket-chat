import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Start({location}) {
    const [name, setName] = useState('')

    return (
        <div className="Start">
            <div className="container">
                <h1 className="heading">Type your name, dude</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
               
                <Link onClick={e => (!name) ? e.preventDefault() : null} 
                to={`/chats-room?name=${name}`}>
                    <button  type="submit">start</button>
                </Link>
            </div>
        </div>
    )
}

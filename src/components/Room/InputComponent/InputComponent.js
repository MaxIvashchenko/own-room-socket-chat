import React from 'react'


export default function InputComponent({ message, setMessage, sendMessage }) {

    return (

        <form className="InputComponent">
            <input
                className="input"
                type="text"
                placeholder="type a message ..."
                value={message}
                onChange={event => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="sendButton" onClick={event => sendMessage(event)}>SEND</button>
        </form>

    )
}

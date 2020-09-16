import React, { useEffect, useState } from 'react'
import InfoBar from './InfoBar/InfoBar'
import Messages from './Messages/Messages'
import io from 'socket.io-client'
import NotFound from '../NotFound/NotFound';
import InputComponent from './InputComponent/InputComponent';

import back from '../../icons/back.png'
import home from '../../icons/home.png'

let socket;

export default function Room(props) {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [prevPath, setPrevPath] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const ENDPOINT = 'https://chat-room-app-react.herokuapp.com/'

    // const messages = ['hello', 'you', 'dude']

    useEffect(() => {
        if (!props.location.state) return null
        let { name, room, path } = props.location.state;

        socket = io(ENDPOINT) // соединение Юзера по заданному порту

        setName(name)
        setRoom(room)
        setPrevPath(path)

        socket.emit('join', { name, room }, () => { });

        return () => { // выполняется при unmount компонента
            socket.emit('disconnect')
            socket.off()
        }

    }, [ENDPOINT, props])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    if (!room) return <NotFound />;

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    return (
        <div className="Room">
            <div id="btnContainer">
                <a href={prevPath} id="btnBack">
                    <img src={back} alt="close icon" />
                </a>

                <a id="btnHome" href="/">
                    <img src={home} alt="close icon" />
                </a>
            </div>

            <h1>User name: {name}</h1>


            <div className="outerContainer">
                <div className="container">
                    <InfoBar room={room} />
                    <Messages messages={messages} name={name} />
                    <InputComponent message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </div>
            
        </div>
    )
}

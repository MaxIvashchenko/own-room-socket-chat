import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import NotFound from '../NotFound/NotFound'
import back from '../../icons/back.png'

export default function ChatsRoom({ location }) {
    const [name, setName] = useState('')
    const path = location.pathname + location.search

    useEffect(() => {

        const { name } = queryString.parse(location.search)

        name && setName(name[0].toUpperCase() + name.slice(1))

    }, [location.search])


    const rooms = ['cook', 'sport', 'art']

    if (!name) { return (<NotFound />) }

    console.log(name)

    return (
        <div className="ChatsRoom">
            <Link to={`/`}>
                <button className="navBtnLeft"  type="submit">
                    <img src={back} alt="close icon" />
                </button>
            </Link>
            <h1>Hello, <i>{name}</i> ! <br /> Please, choose the room chat by the topic</h1>

            <div className="buttons">
                {rooms.map((room, i) => {
                    return (
                        <Link key={i} onClick={e => (!name) ? e.preventDefault() : null}
                            to={{ pathname: `room/${room}`, state: { name, room, path } }}>
                            <button type="submit">{room}</button>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

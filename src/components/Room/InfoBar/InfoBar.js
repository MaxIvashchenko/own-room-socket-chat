import React from 'react'
import onlineIcon from "../../../icons/laptop.png"

export default function InfoBar({room}) {
    return (
        <div className="InfoBar">
            <div className="tab">
                <img className="onlineIcon" src={onlineIcon} alt="online icon"/>
                <h3>Topic of this chat: {room}</h3>
            </div>
            
        </div>
    )
}

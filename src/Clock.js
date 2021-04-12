import React from 'react';
import { useEffect, useState } from "react";


function Clock() {
    let date = new Date();
    const [time, setTime] = useState(`${date.getHours() % 12}:${date.getMinutes()}`);
    useEffect(() => {
        let minutes = date.getMinutes();
        if (minutes.toString().length == 1){
            minutes = `0${minutes}`;
        }
        let hours = date.getHours();
        if (hours > 12) {
            hours = hours - 12;
        }
        setTime(`${hours}:${minutes}`);
    })
    return (
        <div id="time">{time}</div>
    );
}

export default Clock;
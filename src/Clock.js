import React from 'react';
import { useEffect, useState } from "react";
import getCookie from "./Cookie.js";

function Clock() {
    const [date] = useState(new Date());
    const [time, setTime] = useState(`${date.getHours() % 12}:${date.getMinutes()}`);
    getCookie("clock");

    function toggleClock() {
        if(document.getElementById("clock").style.display === "block"){
            document.cookie = "clock=none";
            document.getElementById("clock").style.display = "none";
        } else {
            document.cookie = "clock=block";
            document.getElementById("clock").style.display = "block";
        }
    }

    document.getElementById("hide_clock").onclick = toggleClock;

    useEffect(() => {
        let minutes = date.getMinutes();
        if (minutes.toString().length === 1){
            minutes = `0${minutes}`;
        }
        let hours = date.getHours();
        if (hours > 12) {
            hours = hours - 12;
        }
        setTime(`${hours}:${minutes}`);
        document.getElementById("clock").style.display = getCookie("clock");
    }, [setTime, date])
    return (
        <div id="time">{time}</div>
    );
}

export default Clock;
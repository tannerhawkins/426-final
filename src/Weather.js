import { Component, useEffect, useState } from "react";
import axios from "axios";

function Weather() {

    const [finalMessage, setMessage] = useState("");
    const [weather, setWeather] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [low, setLow] = useState(null);
    const [high, setHigh] = useState(null);
    const [currTemp, setCurrTemp] = useState(null);
    const [units, setUnits] = useState("imperial");
    const [main, setMain] = useState(null);
    const [description, setDescription] = useState(null);
    const [count, setCount] = useState(0);
    const code = "cf0cdab436e7a78c55ebf2423ebb5eab";
    let newLat;
    let newLon;
    let newWeather;
    let newLow;
    let newHigh;
    let newCurrTemp;
    let newMain;
    let newDescription;

    if (count === 0){
        window.addEventListener("load", getLocation, {once : true});
        setCount(1);
    }

    useEffect(() => {
        document.getElementById("location").innerText = finalMessage;
    });

    async function getWeather() {
        if (newLat != null & newLon != null) {
            try {
                document.getElementById("loader").style.visibility = "visible";
                await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${newLat}&lon=${newLon}&appid=${code}&units=${units}`).then(result => {
                    setWeather(result);
                    newWeather = result;
                    setLow(newWeather.data.main.temp_min);
                    newLow = newWeather.data.main.temp_min;
                    setHigh(newWeather.data.main.temp_max);
                    newHigh = newWeather.data.main.temp_max;
                    setCurrTemp(newWeather.data.main.temp);
                    newCurrTemp = newWeather.data.main.temp;
                    setMain(newWeather.data.weather[0].main);
                    newMain = newWeather.data.weather[0].main;
                    setDescription(newWeather.data.weather[0].description);
                    newDescription = newWeather.data.weather[0].description;
                });
                document.getElementById("loader").style.visibility = "hidden";
            }
            catch (error) {
                document.getElementById("loader").style.visibility = "hidden";
                console.log(error);
            }
        }
    }


    function supports() {
        if (!navigator.geolocation) {
            return false;
        }
        return true;
    }

    function onSuccess(positionNew) {
        setLat(positionNew.coords.latitude);
        setLon(positionNew.coords.longitude);
        newLat = positionNew.coords.latitude;
        newLon = positionNew.coords.longitude;
        if (newLat != null & newLon != null) {
            setMessage(`Your location is ${newLat}, ${newLon}`);
            if (weather == null) { getWeather(); }
        }
        else {
            getLocation();
        }
    }

    function onError() {
        setMessage("Please allow use of location or enter zip code to see weather.");
        console.log("Please allow use of location or enter zip code to see weather.");
    }

    function getLocation() {
        if (!supports()) {
            setMessage("Your browser doesn't support geolocation, please enter city or zipcode.");
        }
        else {
            console.log("getting");
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    }
    
    return <div>
        <h1 className="title" id="location"></h1>
        <div id="weatherBox">
            <div id="weatherImage"></div>
            <div>{currTemp}</div>
            <div>{main}</div>
            <div>{description}</div>
        </div>
    </div>
};

export default Weather;
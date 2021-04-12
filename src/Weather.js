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
    const [sunset, setSunset] = useState(null);
    const code = "cf0cdab436e7a78c55ebf2423ebb5eab";
    let newLat;
    let newLon;
    let newWeather;
    let newLow;
    let newHigh;
    let newCurrTemp;
    let newMain;
    let newDescription;

    useEffect(() => {
        document.getElementById("weatherBox").innerHTML = `
        <div id="weatherImage">
        <i class="fa ${images(main)}"></i>
        <div class="temp">${removeDecimal(currTemp)}</div>
        </div>
        <div class="weatherInfo">
        <div>${capitalize(description)}</div>
        </div>`
        if (main != null) {
            document.getElementById("weatherBox").style.display = "flex";
        }
        getLocation();
    });

    function capitalize(string){
        if(string == null) {return}
        let words = string.split(" ")
        for( let i = 0; i < words.length; i++){
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(" ")
    }

    function removeDecimal(string){
        if(string == null) {return}
        return string.toString().split(".")[0] + '&#176';
    }

    function images(weather) {
        let now = new Date();
        if (now < sunset) {
            switch (weather) {
                case "Clear":
                    return "fa-sun"
                case "Clouds":
                    return "fa-cloud-sun"
                case "Drizzle":
                    return "fa-cloud-sun-rain"
                case "Rain":
                    return "fa-cloud-showers-heavy"
                case "Thunderstorm":
                    return "fa-bolt"
                case "Snow":
                    return "fa-snowflake"
            }
        } else {
            switch (weather) {
                case "Clear":
                    return "fa-moon"
                case "Clouds":
                    return "fa-cloud-moon"
                case "Drizzle":
                    return "fa-cloud-moon-rain"
                case "Rain":
                    return "fa-cloud-showers-heavy"
                case "Thunderstorm":
                    return "fa-bolt"
                case "Snow":
                    return "fa-snowflake"
            }
        }
    }

    async function getWeather() {
        if (newLat != null & newLon != null) {
            try {
                document.getElementById("loader").style.display = "block";
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
                    setSunset(new Date(newWeather.data.sys.sunset * 1000))
                });
                document.getElementById("loader").style.display = "none";
            }
            catch (error) {
                document.getElementById("loader").style.display = "none";
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
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    }

    return <div>
        <div id="weatherBox" style={{ display: "none" }}>
            <div id="weatherImage">
                <i className={`fa ${images(main)}`}></i>
                <div className="temp">{removeDecimal(currTemp)}</div>
            </div>
            <div className="weatherInfo">
                <div>{capitalize(description)}</div>
            </div>
        </div>
    </div>
};

export default Weather;
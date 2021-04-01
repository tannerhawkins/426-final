import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import axios from "axios";
import { trackPromise } from 'react-promise-tracker';

function Location() {

    const [finalMessage, setMessage] = useState("");
    const [weather, setWeather] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [dailyLows, setLows] = useState(null);
    const [dailyHighs, setHighs] = useState(null);
    const [units, setUnits] = useState("imperial");
    const [main, setMain] = useState(null);
    const [description, setDescription] = useState(null);
    const code = "cf0cdab436e7a78c55ebf2423ebb5eab";
    let newLat;
    let newLon;
    let newWeather;
    let low;
    let high;
    let newMain;
    let newDescription;

    useEffect(() => {
        document.getElementById("location").innerText = finalMessage;
    });

    async function getWeather() {
        if (newLat != null & newLon != null) {
            try {
                document.getElementById("loader").style.visibility = "visible";
                await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${newLat}&lon=${newLon}&appid=${code}&units=${units}`).then(result => {setWeather(result); newWeather=result;});
                setLows(newWeather.data.main.temp_min);
                low = newWeather.data.main.temp_min;
                setHighs(newWeather.data.main.temp_max);
                high = newWeather.data.main.temp_max;
                setMain(newWeather.data.weather[0].main);
                newMain = newWeather.data.weather[0].main;
                setDescription(newWeather.data.weather[0].description);
                newDescription = newWeather.data.weather[0].description;
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
            if(weather == null){getWeather();}
        }
        else {
            getLocation();
        }
    }

    function onError() {
        setMessage("Please allow use of location or enter zip code to see weather.");
    }

    function getLocation() {
        if (!supports()) {
            setMessage("Your browser doesn't support geolocation, please enter city or zipcode.");
        }
        else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    }
    window.onload = getLocation;
    return <div>
        <h1 className="title" id="location"></h1>
        <div id="weatherBox">
        {main}
        {description}
        </div>
    </div>
};

export default Location;
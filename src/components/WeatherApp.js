import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "203a45682b4d41af883215000220605";
const BASE_URL = "http://api.weatherapi.com/v1";

const WeatherApp = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState();

    const getUserLocation = async () => {
        const response = await fetch("https://ipinfo.io/json?token=b6a2f5c07da522");
        const data = await response.json();
        setLocation(data.city);
    };

    useEffect(() => {
        getUserLocation();
    }, []);

    console.log(location);

    const getWeather = async () => {
        console.log(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
        const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
        setWeather(response?.data);
    };

    useEffect(() => {
        getWeather();
    }, [location]);

    console.log(weather);

    return (
        <div className="WeatherApp">
            <div className="WeatherWrapped">
                <h1 className="Tempetature">{weather?.current?.temp_c}°C</h1>
                <div>
                    <p className="Location">{location}</p>
                    <p className="WeatherStatus">{weather?.current?.condition?.text}</p>
                </div>
            </div>
            <img className="WeatherIcon" src={weather?.current?.condition?.icon} alt="Icon" />
        </div>
    )
};

// weather?.current?.temp_c
// src={weather?.current?.condition?.icon}
// weather?.current?.condition?.text

export default WeatherApp;
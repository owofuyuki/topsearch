import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "203a45682b4d41af883215000220605";
const BASE_URL = "http://api.weatherapi.com/v1";

const CalendarApp = () => {
    const [location, setLocation] = useState("");
    const [calendar, setCalendar] = useState();

    const getUserLocation = async () => {
        const response = await fetch("https://ipinfo.io/json?token=b6a2f5c07da522");
        const data = await response.json();
        setLocation(data.city);
    };

    useEffect(() => {
        getUserLocation();
    }, []);

    console.log(location);

    const getCalendar = async () => {
        console.log(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
        const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${location}`);
        setCalendar(response?.data);
    };

    useEffect(() => {
        getCalendar();
    }, []);

    console.log(calendar);

    const getMonth = (str) => {
        switch (str) {
            case "01": return "January";
            case "02": return "February";
            case "03": return "March";
            case "04": return "April";
            case "05": return "May";
            case "06": return "June";
            case "07": return "July";
            case "08": return "August";
            case "09": return "September";
            case "10": return "October";
            case "11": return "November";
            case "12": return "December";
        }
    };

    return (
        <div className="CalendarApp">
            <p className="CalendarYear">{calendar?.location?.localtime.slice(0, 4)}</p>
            <h1 className="CalendarDate">{calendar?.location?.localtime.slice(8, 10) + ' ' + getMonth(calendar?.location?.localtime.slice(5, 7))}</h1>
            <p className="CalendarDetail">Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
    );
};

export default CalendarApp;
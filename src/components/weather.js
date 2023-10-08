import axios from 'axios';
import React, { useEffect, useState } from 'react';

function OpenWeather() {
    const [city, setCity] = useState('delhi');
    const handleSubmit = (e) => {
        e.preventDefault();
        setCity('');
    }
    const[weather, setWeather] = useState(null);
    const getWeather = async () => {
        try {
            const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d6723d613308cde7e4391708839b62a5`);
            setWeather(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getWeather();
    },[city]);
    return ( <><h1>Current Weather</h1>
    <form onSubmit={handleSubmit}>
        <div className='form-group p-3'>
            <label for='name'>City</label>
            <input type='text' id='city' placeholder='City'
            className='form-control'
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            />
        </div>
        <div className='form-group m-3'>
            <button type='submit' className='btn btn-primary'>Get Weather</button>
        </div>
    </form>
    {weather &&  
    <ul className='list-group'>
        <li className='list-group-item'><h2><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />{weather.name} {weather.main.temp}°F</h2></li>
        <li className='list-group-item'><h2>{weather.weather[0].main}</h2>{Date()}</li>
        <li className='list-group-item'>Wind {weather.wind.speed}km/h</li>
        <li className='list-group-item'>Cloudiness {weather.clouds.all}</li>
        <li className='list-group-item'>Pressure {weather.main.pressure}</li>
        <li className='list-group-item'>Humidity {weather.main.humidity}</li>
        <li className='list-group-item'>Sunrise {weather.sys.sunrise}</li>
        <li className='list-group-item'>Sunset {weather.sys.sunset}</li>
        <li className='list-group-item'>Visibility {weather.visibility}</li>
    </ul>}</> );
}

export default OpenWeather;
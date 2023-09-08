import React, { useEffect, useState } from 'react';
import "./style.css";
import Card from './Card';

const Temperature = () => {
    const [searchValue, setSearchValue] = useState("Karachi");
    const [tempInfo, setTempInfo] = useState({});

    const attainInformation = async () => {
        try{
            let url = 
            `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7ac2b5a9a7216e1fecffa12f79ad2c6d`;

            const response = await fetch(url);
            const data = await response.json();
            const { temp, pressure, humidity } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const apiInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset
            };

            setTempInfo(apiInfo);
        } catch (error){
            console.error(error);
        }
    };

    useEffect(() => {
        attainInformation();
    }, [searchValue]);

    return (
        <div>
            <div className="new-wrapper">
                <div className="search">
                    <input
                        type="search"
                        placeholder='Type city here...'
                        autoFocus
                        id='search'
                        className='new-searchTerm'
                        onChange={(event) => setSearchValue(event.target.value)}
                    />
                </div>
            </div>
            <Card tempInfo={tempInfo} />
        </div>
    )
}

export default Temperature;

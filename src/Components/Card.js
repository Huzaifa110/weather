import React from "react";

const Card = ({ tempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  let seconds = sunset;
  let date = new Date(seconds * 1000);
  let convertedTime = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="new-card">
      {/* <div className="new-weatherIcon">
        <i className="wi wi-sunny"></i>
      </div> */}
      <div className="new-weatherInfo">
        <div className="new-temperature">
          <span>{temp}&deg;C</span>
        </div>
        <div className="new-description">
          <div className="new-weatherCondition">{weatherMood}</div>
          <div className="new-place">
            {name}, {country}
          </div>
        </div>
      </div>
      <div className="new-date">{new Date().toLocaleString()}</div>
      <div className="new-extra-info">
        <div className="new-extra-info-item">
          <i className="wi wi-sunset new-extra-info-icon"></i>
          <p className="new-extra-info-label">{convertedTime} PM<br />Sunset</p>
        </div>
        <div className="new-extra-info-item">
          <i className="wi wi-humidity new-extra-info-icon"></i>
          <p className="new-extra-info-label">{humidity}<br />Humidity</p>
        </div>
        <div className="new-extra-info-item">
          <i className="wi wi-rain new-extra-info-icon"></i>
          <p className="new-extra-info-label">{pressure}<br />Pressure</p>
        </div>
        <div className="new-extra-info-item">
          <i className="wi wi-strong-wind new-extra-info-icon"></i>
          <p className="new-extra-info-label">{speed}<br />Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Card;


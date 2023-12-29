import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherEng(props) {
  return (
    <div className="Weatherinfo">
      <div className="YLocation">
        <h1>{props.info.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.info.date} />
          </li>
          <li>{props.info.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={props.info.icon} alt={props.info.description} />{" "}
          <span className="temperature">
            {Math.round(props.info.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

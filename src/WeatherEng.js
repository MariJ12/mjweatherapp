import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./Weather.css";

export default function WeatherEng(props) {
  return (
    <div className="Weatherinfo">
      <div className="YLocation">
        <h1>{props.info.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.info.date} />
          </li>
          <li className="text-capitalize">{props.info.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.info.icon} size={52} />

          <WeatherTemperature celsius={props.info.temperature} />
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

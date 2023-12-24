import React from "react";
import "./Weather.css";
import "./App";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row form-row">
          <div className="col-9 ">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3 ">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="YLocation">
        <h1>London</h1>
        <ul>
          <li>Friday 11:00</li>
          <li>Windy</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/windy.png"
            alt="windy"
          />{" "}
          <span className="temperature">11</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 76%</li>
            <li>Wind: 19 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by MariJ and is open-sourced on{" "}
          <a href="https://github.com/MariJ12/mjweatherapp">GitHub</a>
        </footer>
      </div>
    </div>
  );
}

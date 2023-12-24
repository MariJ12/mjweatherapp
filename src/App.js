import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by MariJ and is open-sourced on GitHub
        </footer>
      </div>
    </div>
  );
}

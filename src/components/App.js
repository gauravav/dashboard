import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import "../static/css/App.css";

import IC from "./ImageComponent.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save. It reloads. Yes, It really does
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now
        </a>
        <br />
        <IC></IC>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const apis = [
  "http://hp-api.herokuapp.com/api/characters",
  "https://anapioficeandfire.com/api/characters",
  "http://api-football-standings.azharimm.site//leagues/eng.1/standings",
  "https://api.spacexdata.com/v4/launches/latest (latest launch data for SpaceX)",
  "http://api.worldbank.org/v2/country/ind?format=json",
  "https://x-math.herokuapp.com/api/random",
  "https://api.adviceslip.com/advice",
  "https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime",
  "https://api.quarantine.country/api/v1/summary/latest",
  "https://qrng.anu.edu.au/contact/api-documentation/"
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

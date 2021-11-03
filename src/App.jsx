import logo from './logo.svg';
import './App.scss';

function App() {

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

  apis.forEach(api => {
    fetch(api)
      .then(res=> res.json())
      .then(json=>{
        console.log("===========================");
        console.log(api);  
        console.log("===========================");
        console.log(json);
      })
    
  })

  return (  
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

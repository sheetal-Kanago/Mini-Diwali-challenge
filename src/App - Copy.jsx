import react, {useState,useEffect } from 'react';
import './App.scss';

// function App() {
//   const url = "https://cors-anywhere.herokuapp.com/api-football-standings.azharimm.site//leagues/eng.1/standings";
//   // const url = 
//   const apis = [
//     // "http://hp-api.herokuapp.com/api/characters",
//     // "https://anapioficeandfire.com/api/characters",
//     "" //"http://api-football-standings.azharimm.site//leagues/eng.1/standings",
//     // /"https://api.spacexdata.com/v4/launches/latest",
//     /// "http://api.worldbank.org/v2/country/nz?format=json"
    
//     //  "https://api.lyrics.ovh/v1/Alan Walker/Faded",
    
//     // "https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&size=6" //Random numbner genrator "https://qrng.anu.edu.au/contact/api-documentation/"
//   ]

//   // apis.forEach(api => {
//     fetch(url)
//       .then(res=> res.json())
//       .then(json=>{
//         // console.log("===========================");
//         // console.log(url);  
//         // console.log("===========================");
//         // console.log(json);
        
//       })
//       .catch(err => console.log(err))
//   // })

//   return (  
//    <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




const App = () => {
  // const [changeUser,setChangeUser]=useState(true);
  // // const [user,setUser]=useState(null);
  // let teamData;
  // const url ="https://cors-anywhere.herokuapp.com/api-football-standings.azharimm.site//leagues/eng.1/standings";
 
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then( data => {
  //       teamData=data;
  //       console.log(data);
  //     })
  //     .catch(err => console.log(err))
  // }, [changeUser]);

//   var myHeaders = new Headers();
// myHeaders.append("x-rapidapi-key", "3860ee6d91mshd8456eed9053facp1edf1ejsn1e2096b83934");
// myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://v3.football.api-sports.io/{endpoint}", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

    fetch("https://api-football-v1.p.rapidapi.com/v3/leagues?id=39", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "3860ee6d91mshd8456eed9053facp1edf1ejsn1e2096b83934"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });

  return (
    <>
    It works
      {/* <button onClick={()=> setChangeUser(!changeUser)}>Get Profile</button> */}
      {/* {user && <Profile  data={user.results[0]}/>} */}
      {/* { console.log(teamData)}  */}
    </>
  )
}
export default App;
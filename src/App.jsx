import react, {useState,useEffect } from 'react';
import './App.scss';
import Lyrics from './components/Lyrics/Lyrics';
function App() {
  const [artistNumber, setArtistNumber]=useState(null);
  const [lyrics,setLyrics]=useState(null)
  // let lyrics1="";
  let url = "https://api.lyrics.ovh/v1/";
  
  
  useEffect(()=>{
    url+=artistNumber;
    // console.log(url);
    fetch(url)
      .then(res=> res.json())
      .then(json=>setLyrics(json.lyrics))
      .catch(err => console.log(err))
  },[artistNumber]);
  //  console.log(objectOf(lyrics));
  return (  
    <>
      {/* Add a dropdown for artiste-song selection
      create a <Lyrics> page and pass json.lyrics to it. Display lyrics. */}
      <label htmlFor="artiste-number">Choose an artiste-number:</label>
      <select name="artiste-number" id="artiste-number" 
        onChange={e => setArtistNumber(e.target.value)}>
        <option value="Alan Walker/Faded">Alan-Walker: Faded</option>  
        <option value="Bryan Adams/Heaven">Bryan Adams: Heaven</option>        
      </select>
      {artistNumber && <Lyrics lyrics={lyrics} />}


    </>
  )
}
export default App;
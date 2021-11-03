import React from 'react'
import './Lyrics.scss'

const Lyrics = (props) => {
  // const {lyrics}=props;
  let {lyrics}=props;
  //  lyrics=lyrics.subString(45);
  // console.log(lyrics.indexOf("\n"));
  // console.log(lyrics);
  return (
    <div className="display-linebreak">
      {/* Hello\n world */}
      {lyrics}
    </div>
  )
}

export default Lyrics

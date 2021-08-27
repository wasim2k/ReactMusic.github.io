import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs,setSongs] = useState([
   { 
    title: "Mann Bharryaay",
    artist: "B Praak",
    img_src: "./images/man  bharya 2.0.jpg",
    src: "./songs/Mann Bharryaa.mp3"
   },
  {
    title: "Raataan Lambiyan ",
    artist: "Tanishk Bagvhi",
    img_src: "./images/raatan lambiyan.jpg",
    src: "./songs/Raataan Lambiyan.mp3"
  },
  {
    title: "Ranjha ",
    artist: "Jasleen",
    img_src: "./images/ranjha shershaah.jpg",
    src: "./songs/Ranjha.mp3"
  },
  {
    title: "Sakhiyan ",
    artist: "Mahinder",
    img_src: "./images/sakhiya bell bottom.jpg",
    src: "./songs/Sakhiyan.mp3"
  }
    ]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex +1 );
    
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  return (
    <div className="App">
      <Player 
       currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      /> 
      
     
    </div>
  );
}

export default App;

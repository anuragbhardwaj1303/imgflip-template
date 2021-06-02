import React, { useState, useEffect } from "react";
import Memetemps from "./Memetemps";
function App() {
  const [temp, setTemp] = useState([]);
  const fetchMeme = async () => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const temps = await response.json();
      const temp = temps.data.memes;
      setTemp(temp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMeme();
  }, []);
  return (
    <main>
      <h2 className='title'>Top 100 Meme Templates</h2>
      <p>Source : Imgflip</p>
      <Memetemps temp={temp}></Memetemps>
    </main>
  );
}

export default App;

import React, {useEffect, useState} from 'react';

import HarryPotterList from './components/HarryPotterList.jsx';
import './css/App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
    .then((res) => res.json())
    .then((hpCharacters) => {
      console.log(hpCharacters);
      setCharacters(hpCharacters);
    })
  }, []);

  const handleCharacters = (e) => {
    let currentHouse = e.target.innerText;
    const newCharacters = [...characters];
    const selectedCharacters = newCharacters.filter(character => { 
      return character.house === currentHouse;
    });
    setDisplayedCharacters(selectedCharacters);
  };

  return (
    <div className="App">
        <h1 className='intro'>Harry Potter Characters</h1>
        <section className='nav'>
          {houses.map((house) => {
            return (
            <button key={houses} onClick={handleCharacters}> 
            {house}
            </button>
          );
          })}
        </section>
        <HarryPotterList characters={displayedCharacters} />
    </div>
  );
}

export default App;

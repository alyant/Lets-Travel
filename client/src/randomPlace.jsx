import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './weather.jsx';
import ThePlace from './thePlace.jsx';
import PotentialVisit from './potentialVisit.jsx';


const RandomPlace = () => {
  const [currentSelect, setCurrentSelect] = useState(null);
  const [currentSlogan, setCurrentSlogan] = useState('');

  const nextPlace = (city) => {
    const nextSlogan = [
    "Let's rock n roll, again!",
    "Hit me again",
    "Take my breath away",
    "Another idea, please",
    `Bon voyage ${city}`,
    "Let's go another round",
    `Hasta la vista ${city}`,
    `I'm just not feeling ${city}`
    ]
    let randomIndex = Math.floor(Math.random() * nextSlogan.length);
    setCurrentSlogan(nextSlogan[randomIndex]);
  };

  const getNextPlace = () => {
    axios.get('/nextPlace')
    .then((data) => {
      setCurrentSelect(data.data);
      setCurrentSlogan(data.data.place.city);
      return data.data.place.city;
    })
    .then((city) => {
      nextPlace(city);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    getNextPlace();
  }, []);

  if (!currentSelect) {return 'Still loading'}

  return (
    <div>
      <div className='header'>
        <img src='./library/Logo.png' className='logo'/>
        <div className='intro'>
          <h2 className='cityHeader'>{`How do you feel about ${currentSelect.place.city}?`}</h2>
          <button onClick={getNextPlace} className='nextPlaceButton'>{currentSlogan}</button>
        </div>
      </div>
      <div className='mainPlace'>
      <ThePlace data={currentSelect}/>
      <PotentialVisit/>
    </div>
    <Weather/>
    </div>

  )
}

export default RandomPlace;
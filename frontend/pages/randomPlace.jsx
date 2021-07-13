import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from '../components/weather.jsx';
import ThePlace from '../components/thePlace.jsx';
import PotentialVisit from '../components/potentialVisit.jsx';


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
    axios.get('http://localhost:4000/nextPlace')
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
      <title className='initialHeader'>{currentSelect.place.city}</title>
      <div className='header'>
        <img src='/Logo.png' className='logo'/>
        <div className='intro'>
          <h2 className='cityHeader'>{`How do you feel about `}</h2>
          <button onClick={getNextPlace} className='nextPlaceButton'>{currentSlogan}</button>
        </div>
        <img className='passport' src='/passport.jpeg'>
        </img><div className='city'>{currentSelect.place.city}</div>
      </div>
      <div className='mainPlace'>
        <ThePlace data={currentSelect}/>
        <div className='leftColumn'>
          <PotentialVisit data={currentSelect.place}/>
          <Weather data={currentSelect.place}/>
        </div>
    </div>
    </div>

  )
}

export default RandomPlace;
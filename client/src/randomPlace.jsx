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

  return (
    <div>
      <button onClick={getNextPlace}>{currentSlogan}</button>
      <Weather/>
      <ThePlace data={currentSelect}/>
      <PotentialVisit/>
    </div>
  )
}

export default RandomPlace;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './weather.jsx';
import ThePlace from './thePlace.jsx';
import PotentialVisit from './potentialVisit.jsx';


const RandomPlace = () => {


  return (
    <div>
      <Weather/>
      <ThePlace/>
      <PotentialVisit/>
    </div>
  )

}

export default RandomPlace;
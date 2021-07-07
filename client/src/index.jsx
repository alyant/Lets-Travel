import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import InitialImage from './initial.jsx';
import RandomPlace from './randomPlace.jsx';

const App = () => {
  const [initialClicked, setInitialClicked] = useState(false);

  const goToPlace = () => {
    setInitialClicked(true);
  };

  return (
    <div>
      {!initialClicked && <InitialImage goToPlace={goToPlace}/>}
      {initialClicked && <RandomPlace/>}
    </div>
  )

}

ReactDOM.render(<App/>, document.getElementById('app'));
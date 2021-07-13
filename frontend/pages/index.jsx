import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import InitialImage from '../components/initial.jsx';
import RandomPlace from '../components/randomPlace.jsx';

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

export default App;

// ReactDOM.render(<App/>, document.getElementById('app'));
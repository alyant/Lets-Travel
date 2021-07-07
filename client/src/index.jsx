import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import InitialImage from './initial.jsx';
import RandomPlace from './randomPlace.jsx';

const App = () => {
  const [currentSelect, setCurrentSelect] = useState(null);



  return (
    <div>
      {!currentSelect && <InitialImage/>}
      {currentSelect && <RandomPlace/>}
    </div>
  )

}

ReactDOM.render(<App/>, document.getElementById('app'));
import React from 'react';
import App from './index.jsx';

const InitialImage = ({ goToPlace }) => {

  return (
      <div className='initial'>
        <h1 className='test1'>Need to get away, just not sure where?</h1>
        <h2 className='test2'>Adventure awaits...</h2>
        <video src='./library/Airplane.mp4' muted loop autoPlay style={{'zIndex': '-99', width: '100%', height: '100%'}}></video>
        <div className='initialButtonWrap'>
          <button className='initialButton' onClick={goToPlace}>Let's go</button>
        </div>
      </div>
  )
}

export default InitialImage;

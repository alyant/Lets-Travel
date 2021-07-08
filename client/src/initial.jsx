import React from 'react';
import App from './index.jsx';

const InitialImage = ({ goToPlace }) => {

  return (
      <div className='initial'>
        <div className='initial-1'>
          <h1>Need to get away, just not sure where?</h1>
          <h2>Adventure awaits...</h2>
          <div className='cloud'>
            <img src='./library/cloud1.png' alt='' style={{'--i':3}}/>
            <img src='./library/cloud2.png' alt='' style={{'--i':2}}/>
            <img src='./library/cloud3.png' alt='' style={{'--i':5}}/>
            <img src='./library/cloud4.png' alt='' style={{'--i':3}}/>
            <img src='./library/cloud5.png' alt='' style={{'--i':8}}/>
          </div>
          <div className='initial-2'>
          <div className='cloudUD'>
            <img src='./library/cloud1.png' alt='' style={{'--i':8}}/>
            <img src='./library/cloud2.png' alt='' style={{'--i':2}}/>
            <img src='./library/cloud3.png' alt='' style={{'--i':6}}/>
            <img src='./library/cloud4.png' alt='' style={{'--i':4}}/>
            <img src='./library/cloud5.png' alt='' style={{'--i':5}}/>
          </div>
        </div>
        </div>
        <div className='initialButtonWrap'>
          <button className='initialButton' onClick={goToPlace}>Let's go</button>
        </div>
      </div>
  )

}

export default InitialImage;

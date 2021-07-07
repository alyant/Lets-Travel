import React from 'react';

const InitialImage = () => {

  return (
      <div className='initial'>
        <div className='initial-1'>
          <h1>Do you need to get away, just not sure where?</h1>
          <h2>Adventure is awaiting with just a click... </h2>
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
          <button className='initialButton'>Let's rock n roll</button>
        </div>
      </div>
  )

}

export default InitialImage;

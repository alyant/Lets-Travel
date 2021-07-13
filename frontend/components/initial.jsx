import React from 'react';
import Head from 'next/head';
import Image from 'next/image'
import initialPhoto from '../public/initial.jpg'

const InitialImage = ({ goToPlace }) => {

  return (
    <html lang='en'>
      <title className='test1'>Travel Idea Generator</title>
      <Image
      src={initialPhoto}
      alt='initialphoto'
      layout="fill"
      objectFit="cover"
      quality={100}
      placeholder="blur"
      />
      <div  className='dark-overlay'>
      <h1 className='test1'>Need to get away, just not sure where?</h1>
        <h2 className='test2'>Adventure awaits...</h2>
        <div className='initialButtonWrap'>
          <button className='initialButton' onClick={goToPlace}>Let's go</button>
        </div>
    </div>
    </html>


  )
}

export default InitialImage;

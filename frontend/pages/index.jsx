import React from 'react';
import Image from 'next/image'
import initialPhoto from '../public/initial.jpg';
import Link from 'next/link'

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
        <Link href="/randomPlace">
          <button className='initialButton'>Let's go</button>
        </Link>

        </div>
    </div>
    </html>


  )
}

export default InitialImage;

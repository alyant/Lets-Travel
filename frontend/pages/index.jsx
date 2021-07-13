import React from 'react';
import Image from 'next/image'
import initialPhoto from '../public/initial.jpg';
import Link from 'next/link'

const InitialImage = ({ goToPlace }) => {

  return (
    <html lang='en'>
      <title>Travel Idea Generator</title>
      <Image
      src={initialPhoto}
      alt='initialphoto'
      layout="fill"
      objectFit="cover"
      quality={100}
      placeholder="blur"
      />
      <div  className='dark-overlay'>
      <h1 className='initialHeader'>Need to get away, just not sure where?</h1>
        <h2 className='initialSubtitle'>Adventure awaits...</h2>
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

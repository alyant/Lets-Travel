/* eslint-disable no-const-assign */
import React, { useState, useEffect } from 'react';


const ThePlace = ({ data }) => {
  if (!data) {
    return 'Still Loading';
  }

  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);

  const plusSlides = (n) => {
    let newSlide = currentSlideNumber + n;
    setCurrentSlideNumber(newSlide)
    console.log('plusSlides', currentSlideNumber)
    showSlides(newSlide);
  }

  const currentSlide = (n) => {
    console.log(n)
    setCurrentSlideNumber(n)
    showSlides(n);
  }

  const showSlides = (n) => {
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('demo');
    if (n > slides.length) {setCurrentSlideNumber(1); n = 1}
    if (n < 1) {setCurrentSlideNumber(slides.length); n = slides.length}
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n-1].style.display = 'block';
    dots[n-1].className += 'active';
  }

  useEffect(() => {
    showSlides(currentSlideNumber);
  }, [data]);


  return (
      <div className='placeImages'>
        {data.images.map((image, index) => {
          return (
            <div className='mySlides' key={index}>
              <div className='numbertext'>{`${index + 1} of ${data.images.length}`}</div>
              <img src={image.url} style={{ 'objectFit':'cover', width: '1000px', height: '600px'}}/>
            </div>
            )
          })
        }
        <a className='prev' onClick={plusSlides.bind(null, -1)}> &#10094; </a>
        <a className='next' onClick={plusSlides.bind(null, 1)}> &#10095; </a>
        <div className='row'>
        {data.images.map((image, index) => {
          return (
            <div className='column' key={index}>
              <img className='demo cursor' src={image.url} id={index + 1} style={{'objectFit': 'cover', width: '100px', height: '100px'}} onClick={(e) => {currentSlide(Number(e.target.id)) }}/>
            </div>
            )
          })
          }
        </div>
      </div>
  )

}

export default ThePlace;
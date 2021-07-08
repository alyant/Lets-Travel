import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PotentialVisit = ({ data }) => {
  const [currentList, setCurrentList] = useState(null);

  const postPlace = () => {
    axios.post('/postPlace', { place_id: data.place_id })
    .then((res) => {
      setCurrentList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className='potentialVisit'>
      <ul>
        <li>
          <a href="#">
            <h2 className='potentialHeader'>Considering:</h2>
            <div className='potentialList'>
            {!currentList ? 'Nothing yet!' : currentList.map(item => {
              return (<ul key={item.city} className='potentialList'>{`${item.city}, ${item.country}`}</ul>)
            })}
            </div>
          </a>
        </li>
      </ul>
      <button onClick={postPlace}>Add me</button>
    </div>
  )
}

export default PotentialVisit;
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PotentialVisit = ({ data }) => {
  if (!data) {
    return 'Still loading';
  }
  const [currentList, setCurrentList] = useState([]);

  const postPlace = () => {
    if (currentList.length >= 6) {
      alert('You are considering too many places! Please remove a city before adding another.')
      return;
    }
    axios.post('/postPlace', { place_id: data.place_id })
    .then((res) => {
      if (res.data === 'Already logged') {
        alert('You already added this city!')
      } else {
        setCurrentList(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const getPlace = () => {
    axios.get('/getPotential')
    .then((data) => {
      setCurrentList(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const putPotential = (e) => {
    axios.put('/deletePotential', {id: e.target.id})
    .then((data) => {
      setCurrentList(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getPlace();
  }, [data]);

  return (
    <div className='potentialVisit'>
      <div className='stickyNote'>
        <h2 className='potentialHeader'>Considering:</h2>
        <div className='potentialList'>
        {currentList.length === 0 ? 'Nothing yet!' : currentList.map(item => {
          return (<ul key={item.city} className='potentialList' id={item.place_id} onClick={putPotential}>{`${item.city}, ${item.country}`}</ul>)
        })}
        </div>
      </div>
      <button onClick={postPlace} className='potentialButton'>Add City</button>
    </div>
  )
}

export default PotentialVisit;
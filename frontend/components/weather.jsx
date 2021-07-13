import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config.js';

const Weather = ( {data} ) => {
  if (!data) ('Still Loading;')

  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    let options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
      params: {lat: data.lat, lon: data.long},
      headers: {
        'x-rapidapi-key': config.WEATHER,
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (res) {
      console.log(res.data.city_name);
      const newWeather= res.data.data.map((item) => {
        const temp = {
        date: item.datetime.slice(6),
        high: Math.round((item.max_temp * 1.8) + 32),
        low: Math.round((item.min_temp * 1.8) + 32),
        description: item.weather.description,
        icon: item.weather.icon
      }
      return temp;
    });
      setWeather(newWeather);
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    getWeather();
  }, [data])

  return (
    <div className='weather' onClick={getWeather}>
      <table className='weatherTable'>
        <thead>
          <tr>
            <th>Date</th>
            <th>High</th>
            <th>Low</th>
            <th colSpan='2' scope='colgroup'>Forecast</th>
          </tr>
        </thead>
        <tbody>
          {!weather ? null : weather.map((day) => {
          return (
            <tr className='weatherDay' key={day.date}>
              <td>{day.date}</td>
              <td>{day.high}℉</td>
              <td>{day.low}℉</td>
              <td><img src={`/icons/${day.icon}.png`} className='weatherIcon'></img></td>
              <td>{day.description}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )

}

export default Weather;
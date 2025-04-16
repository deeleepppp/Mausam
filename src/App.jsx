import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Board from './components/Board'

const App = () => {
  const [city,setCity] = useState('')
  useEffect(() => {
    const getCityFromLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
              fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=e2ba1e504b854fa1a4c3fcf96f92a739`).then((raw)=>raw.json()).then((real)=>setCity(real.features[0].properties.city))
            }
  )}}

    getCityFromLocation();
  }, []);
  return (
    <div>
      <Navbar setCity ={setCity}/>
      <Board city={city} setCity={setCity}/>
    </div>
  )
}

export default App

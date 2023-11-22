import React from 'react'

const HandelApi = async(cityName) => {
    const apiKey = "99130c769914d4be93a28425a44a5b6f";
  return (
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
   
  )
}

export default HandelApi
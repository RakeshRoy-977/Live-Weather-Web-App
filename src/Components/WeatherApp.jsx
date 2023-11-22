import React, { useEffect, useState } from 'react'

const WeatherApp = () => {

  const [input,setinput] = useState("");
  const [city,setCity] = useState("dubai");
  const [data,setData] = useState(null);

  const handelBtn=(Event)=>{
    Event.preventDefault()
    setCity(input);
  }

  useEffect(()=>{
    const fetchapi=async()=>{
      const apiKey = "99130c769914d4be93a28425a44a5b6f";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const res = await fetch(url);
      const res2= await res.json();
      setData(res2)
      console.log(res2)
    };
    fetchapi();
  },[city])
    
  return (
    <main className='box'>
      <form className='search_box' onSubmit={handelBtn}>
      <input type="search" placeholder='City Name' onChange={(e)=>{setinput(e.target.value)}}/>
      <button type='Submit'>Search</button>
      </form>

      {!data ? <p>No Data Found</p> : <>
      <div className="infoBox">
        <h2>{`${data.name},${data.sys.country}`}</h2>
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon" />
        <h4>{`${data.weather[0].description} ~ ${data.main.temp} C `}</h4>

        <div className="temps">
        
        <p>{`humidity: ${data.main.humidity} ~ Wind Speed: ${data.wind.speed}`}</p>    
        </div>
      </div>
      </>}
    </main>
  )
}

export default WeatherApp